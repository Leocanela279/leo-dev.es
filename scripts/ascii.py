"""Render a photograph as shaded ASCII art for the footer background.

Usage:
    python3 scripts/ascii.py <photo> src/assets/ascii/sagrada.png [--cols 300] [--crop 0,0.07,1,0.57]

Built for the Sagrada Família photo ("Sagrada Família 2010" by Jopparn, CC BY-SA 3.0,
https://commons.wikimedia.org/wiki/File:Sagrada_Fam%C3%ADlia_2010.JPG). The output is an
adaptation of that photo, so it is shared under the same licence and credited in the footer.

Each cell carries the photo's light twice: the glyph is picked by how much ink it really puts
on screen in the font (measured, not guessed), and the glyph's own ink strength follows the
cell's brightness. The sky stays as faint texture so the clouds and the light read too.
The result is a transparent PNG of real monospace characters, drawn in the page's ink colour.
"""

import argparse

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

FONT = "/System/Library/Fonts/Menlo.ttc"
FONT_SIZE = 20  # rendered at 2x for sharp glyphs on retina screens
LINE_HEIGHT = 1.1
INK = (20, 20, 19)  # --ink


def measure_ramp(font: ImageFont.FreeTypeFont, cell: tuple[int, int], steps: int = 28) -> list[tuple[float, str]]:
    """Printable ASCII sorted by measured ink coverage, thinned to evenly spaced steps."""
    coverage = []
    for code in range(33, 127):
        ch = chr(code)
        img = Image.new("L", cell, 0)
        ImageDraw.Draw(img).text((0, 0), ch, font=font, fill=255)
        coverage.append((sum(img.get_flattened_data()) / (255 * cell[0] * cell[1]), ch))
    coverage.sort()
    top = coverage[-1][0]
    picked = [(0.0, " ")]
    for i in range(1, steps + 1):
        best = min(coverage, key=lambda c: abs(c[0] - top * i / steps))
        if best[1] != picked[-1][1]:
            picked.append(best)
    return picked


def is_sky(r: int, g: int, b: int) -> bool:
    return b - max(r, g) > 8


def render(path: str, out: str, cols: int, crop: tuple[float, float, float, float]) -> None:
    font = ImageFont.truetype(FONT, FONT_SIZE)
    cw = round(font.getlength("M"))
    lh = round(FONT_SIZE * LINE_HEIGHT)
    ramp = measure_ramp(font, (cw, lh))
    max_cov = ramp[-1][0]

    photo = Image.open(path).convert("RGB")
    w, h = photo.size
    photo = photo.crop((int(w * crop[0]), int(h * crop[1]), int(w * crop[2]), int(h * crop[3])))
    photo = photo.filter(ImageFilter.UnsharpMask(radius=2, percent=140, threshold=2))
    rows = round(cols * photo.height / photo.width * cw / lh)
    small = photo.resize((cols, rows), Image.Resampling.LANCZOS)

    gray = ImageOps.grayscale(small)
    colours, levels = small.load(), gray.load()
    cells = [(x, y) for y in range(rows) for x in range(cols)]
    sky = {c for c in cells if is_sky(*colours[c])}

    # Stone and sky are normalised separately: the stone gets the full tonal range (with some
    # equalisation so the pale sunlit towers keep their detail), the sky only a faint gradient.
    def tone_map(group: list[tuple[int, int]], equalise: float) -> dict[tuple[int, int], float]:
        values = sorted(levels[c] for c in group)
        lo, hi = values[int(len(values) * 0.01)], values[int(len(values) * 0.99)]
        rank = {}
        for i, v in enumerate(values):
            rank.setdefault(v, i / len(values))
        out = {}
        for c in group:
            stretched = min(1.0, max(0.0, (levels[c] - lo) / max(1, hi - lo)))
            out[c] = 1 - ((1 - equalise) * stretched + equalise * rank[levels[c]])
        return out

    stone = tone_map([c for c in cells if c not in sky], equalise=0.4)
    air = tone_map(list(sky), equalise=0.0)

    canvas = Image.new("RGBA", (cols * cw, rows * lh), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    for x, y in cells:
        if (x, y) in sky:
            dark = 0.02 + 0.08 * air[(x, y)]  # a whisper: the sky's gradient and its clouds
        else:
            dark = 0.14 + 0.86 * stone[(x, y)] ** 1.1  # even sunlit stone keeps a light glyph
        _, ch = min(ramp, key=lambda c: abs(c[0] - dark * max_cov))
        if ch == " ":
            continue
        alpha = int(255 * (0.16 + 0.84 * dark**0.8) * (0.55 if (x, y) in sky else 1))
        draw.text((x * cw, y * lh), ch, font=font, fill=(*INK, alpha))
    canvas.save(out, optimize=True)
    print(f"{cols}x{rows} cells, {canvas.width}x{canvas.height}px, ramp: {''.join(c for _, c in ramp)}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("photo")
    parser.add_argument("out")
    parser.add_argument("--cols", type=int, default=300)
    parser.add_argument("--crop", default="0,0.07,1,0.57", help="left,top,right,bottom as fractions of the photo")
    args = parser.parse_args()
    render(args.photo, args.out, args.cols, tuple(float(v) for v in args.crop.split(",")))
