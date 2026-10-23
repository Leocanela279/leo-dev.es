import type { ImageMetadata } from 'astro';
import tomate from '../assets/projects/tomate.png';
import reskillia from '../assets/projects/reskillia.png';
import icex from '../assets/projects/icex.png';
import stastarat from '../assets/projects/stastarat.png';

export type Locale = 'es' | 'en';

export interface Project {
  id: string;
  name: string;
  kind: string;
  /** Machine-readable start of the project, for <time datetime>. */
  start: string;
  /** Human-readable period shown on the timeline. */
  period: string;
  summary: string;
  facts: string[];
  stack: { icon: string; label: string }[];
  link?: { href: string; label: string };
  repo?: { href: string; label: string };
  image: ImageMetadata;
  alt: string;
}

export interface SkillGroup {
  icon: string;
  title: string;
  items: { icon: string; label: string }[];
}

const links = {
  email: 'leandrocanela279@gmail.com',
  github: 'https://github.com/Leocanela279',
  gitlab: 'https://gitlab.com/leandrocanela279',
  cv: 'https://porfoli-leo.vercel.app/cvLeo.pdf',
};

// Stacks are shared by both languages.
const stacks = {
  tomate: [
    { icon: 'simple-icons:swift', label: 'SwiftUI' },
    { icon: 'simple-icons:apple', label: 'macOS 14+' },
    { icon: 'simple-icons:astro', label: 'Astro' },
    { icon: 'simple-icons:cloudflare', label: 'Cloudflare' },
  ],
  icex: [
    { icon: 'simple-icons:nextdotjs', label: 'Next.js 16' },
    { icon: 'simple-icons:react', label: 'React 19' },
    { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS 4' },
    { icon: 'simple-icons:supabase', label: 'Supabase' },
    { icon: 'simple-icons:docker', label: 'Docker' },
  ],
  reskillia: [
    { icon: 'simple-icons:nextdotjs', label: 'Next.js 16' },
    { icon: 'simple-icons:react', label: 'React 19' },
    { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS 4' },
    { icon: 'simple-icons:supabase', label: 'Supabase' },
    { icon: 'simple-icons:googlegemini', label: 'Gemini' },
    { icon: 'simple-icons:docker', label: 'Docker' },
  ],
  stastarat: [
    { icon: 'simple-icons:laravel', label: 'Laravel 12' },
    { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS 4' },
    { icon: 'simple-icons:vite', label: 'Vite' },
  ],
};

const skillItems = {
  backend: [
    { icon: 'simple-icons:laravel', label: 'Laravel' },
    { icon: 'simple-icons:php', label: 'PHP' },
    { icon: 'simple-icons:go', label: 'Go' },
    { icon: 'simple-icons:nodedotjs', label: 'Node.js' },
  ],
  frontend: [
    { icon: 'simple-icons:nextdotjs', label: 'Next.js' },
    { icon: 'simple-icons:react', label: 'React' },
    { icon: 'simple-icons:astro', label: 'Astro' },
    { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS' },
    { icon: 'simple-icons:typescript', label: 'TypeScript' },
  ],
  data: [
    { icon: 'simple-icons:postgresql', label: 'PostgreSQL' },
    { icon: 'simple-icons:supabase', label: 'Supabase' },
    { icon: 'simple-icons:mysql', label: 'MySQL' },
  ],
  tools: [
    { icon: 'simple-icons:docker', label: 'Docker' },
    { icon: 'simple-icons:git', label: 'Git' },
    { icon: 'simple-icons:swift', label: 'SwiftUI' },
  ],
};

const es = {
  meta: {
    title: 'Leandro Canela, desarrollador backend',
    description:
      'Portfolio de Leandro Canela, desarrollador full-stack centrado en backend en Barcelona. Laravel, Go y Next.js.',
  },
  skip: 'Saltar al contenido',
  langLabel: 'Idioma',
  nav: { work: 'Proyectos', about: 'Sobre mí', contact: 'Contacto', label: 'Principal' },
  ids: { work: 'proyectos', about: 'sobre-mi', contact: 'contacto' },
  hero: {
    lines: ['Leandro Canela,', 'desarrollador backend'],
    sentence:
      'Construyo productos web con Laravel, Go y Next.js desde Barcelona. Me ocupo de los datos, los permisos y la lógica que hace que todo funcione.',
    action: 'Ver proyectos',
    secondary: 'Descargar CV',
  },
  instrument: {
    caption: 'Lo que ha costado servirte esta página',
    ttfb: 'Primer byte',
    protocol: 'Protocolo',
    ready: 'Documento listo',
    requests: 'Peticiones',
    weight: 'Transferido',
    viewport: 'Tu ventana',
    cached: 'en caché',
    pending: '—',
  },
  work: {
    heading: 'Proyectos',
    intro: 'Lo que he construido, del más reciente al primero.',
    stack: 'Tecnología',
  },
  projects: [
    {
      id: 'tomate',
      name: 'Tomate',
      kind: 'App de macOS para estudiar',
      start: '2026-10',
      period: 'oct. 2026',
      summary:
        'Temporizador pomodoro para Mac pensado para sesiones largas, de 25 a 90 minutos, con la opción de dividir las de una hora o más en dos bloques con un descanso a mitad. Vive en la barra de menú, programa sesiones y guarda el historial de la última semana. Todo es local: sin cuentas ni servidor.',
      facts: [
        'Sesiones programadas sin solapes, con notificaciones para empezar o rechazar',
        'Activa el modo Concentración de macOS durante el estudio mediante Atajos',
        'El tiempo se guarda como fechas, así que sigue exacto aunque el Mac se duerma',
        'Web de descarga hecha con Astro',
      ],
      stack: stacks.tomate,
      link: { href: 'https://usetomate.com', label: 'Visitar usetomate.com' },
      repo: { href: 'https://github.com/Leocanela279/tomate', label: 'Código' },
      image: tomate,
      alt: 'Web de Tomate con el titular «Estudia en pomodoros de hasta 90 minutos» y la ventana de la app debajo.',
    },
    {
      id: 'icex',
      name: 'ICEX Next',
      kind: 'Portal de candidaturas, en Humannova',
      start: '2026-09',
      period: 'sept. 2026 – hoy',
      summary:
        'Portal de candidaturas para el programa ICEX Next, construido sobre la base de Reskillia y recortado a lo que pedía el cliente: sin IA, sin registro público y con la privacidad por delante. El equipo da de alta a cada persona, que recibe un enlace para crear su contraseña, acepta la política de privacidad y entrega su CV y el cuestionario de su perfil.',
      facts: [
        'Lectura de CV en PDF o imagen, con OCR local para documentos escaneados',
        'Un cuestionario por perfil, versionado y con migración de borradores entre versiones',
        'Registro de cada aceptación de privacidad con su versión y fecha',
        'Exportación de las respuestas a Excel para el equipo evaluador',
      ],
      stack: stacks.icex,
      link: { href: 'https://icex.humannova.com/', label: 'Ver el acceso' },
      image: icex,
      alt: 'Pantalla de acceso de ICEX Next: a la izquierda el mensaje sobre el cuestionario, a la derecha el formulario de inicio de sesión.',
    },
    {
      id: 'reskillia',
      name: 'Reskillia',
      kind: 'Evaluación de competencias con IA, en Humannova',
      start: '2026-03',
      period: 'mar. 2026 – hoy',
      summary:
        'Plataforma para que una empresa evalúe las competencias digitales de su equipo según DigComp 2.2, el marco europeo. Cada persona sube su CV y completa su perfil; Gemini elige siete competencias con su nivel objetivo, genera las preguntas y puntúa las respuestas. El resultado es un radar que compara el nivel esperado con el conseguido, descargable en PDF.',
      facts: [
        'Acceso con correo o con Google sobre Supabase Auth',
        'Datos personales cifrados con AES-256-GCM y políticas RLS en PostgreSQL',
        'Interfaz en castellano y catalán',
        'Desarrollo y despliegue en contenedores Docker',
      ],
      stack: stacks.reskillia,
      link: { href: 'https://skillia-dev-production.up.railway.app/es', label: 'Visitar Reskillia' },
      image: reskillia,
      alt: 'Portada de Reskillia con el titular «Desbloquea tu potencial real» y los botones para empezar o iniciar sesión.',
    },
    {
      id: 'stastarat',
      name: 'Club Stas Tarat',
      kind: 'Web de club, en equipo',
      start: '2025-03',
      period: 'mar. 2025 – jul. 2026',
      summary:
        'Web del Club Stas Tarat, un club de juegos de mesa y rol de Terrassa con casi cuarenta años y cerca de cien socios. Presenta sus seis secciones, el horario semanal, el calendario de eventos y la ludoteca, y tiene zona de socios.',
      facts: [
        'Hecha en equipo con Manuel Ordoñez y Nicolau Miguel',
        'Integración con APIs de Google',
        'Generación de PDF y códigos QR',
      ],
      stack: stacks.stastarat,
      link: { href: 'https://stastarat.com', label: 'Visitar stastarat.com' },
      image: stastarat,
      alt: 'Portada de stastarat.com con el titular «Descobreix el món dels jocs de taula» y la mascota verde del club.',
    },
  ] satisfies Project[] as Project[],
  about: {
    heading: 'Sobre mí',
    paragraphs: [
      'Soy Leandro, desarrollador full-stack en Barcelona, con el peso puesto en el backend, y estudiante de informática. Disfruto de la parte del trabajo que casi no se ve: el modelo de datos, los permisos y lo que ocurre cuando algo falla.',
      'Trabajo en Humannova, donde construimos Reskillia y el portal de ICEX Next con Next.js, Supabase y Docker. Antes de eso, Laravel fue mi herramienta principal: de ahí salió la web de Stas Tarat.',
      'Fuera del trabajo hago herramientas que uso yo mismo, como Tomate, un temporizador para estudiar en el Mac, y utilidades en Go para la terminal.',
    ],
    role: 'Desarrollador full-stack en Humannova y estudiante de informática',
    skillsHeading: 'Con qué trabajo',
    skills: [
      { icon: 'lucide:server', title: 'Backend', items: skillItems.backend },
      { icon: 'lucide:layout-template', title: 'Frontend', items: skillItems.frontend },
      { icon: 'lucide:database', title: 'Datos', items: skillItems.data },
      { icon: 'lucide:wrench', title: 'Herramientas', items: skillItems.tools },
    ] satisfies SkillGroup[],
  },
  contact: {
    heading: '¿Tienes un producto con lógica que ordenar?',
    sentence: 'Escríbeme y te respondo. También puedes ver mi código o descargar el CV.',
    cv: 'Descargar CV',
    city: 'Barcelona, España',
  },
  footer: {
    what: 'Desarrollador full-stack en Barcelona. Construyo la parte que no se ve para que la que se ve funcione.',
    work: 'Proyectos',
    site: 'Sitio',
    elsewhere: 'Contacto',
    otherLang: 'English',
    privacy: 'Esta web no usa cookies ni recoge datos de quien la visita.',
    clock: 'Hora en Barcelona',
    artCredit: 'La Sagrada Família del fondo es ASCII generado a partir de',
    artBy: 'de Jopparn',
  },
};

type Content = typeof es;

const en: Content = {
  meta: {
    title: 'Leandro Canela, backend developer',
    description:
      'Portfolio of Leandro Canela, a Barcelona-based full-stack developer focused on the backend. Laravel, Go and Next.js.',
  },
  skip: 'Skip to content',
  langLabel: 'Language',
  nav: { work: 'Projects', about: 'About', contact: 'Contact', label: 'Main' },
  ids: { work: 'projects', about: 'about', contact: 'contact' },
  hero: {
    lines: ['Leandro Canela,', 'backend developer'],
    sentence:
      'I build web products with Laravel, Go and Next.js from Barcelona. I take care of the data, the permissions and the logic that keeps it all working.',
    action: 'See projects',
    secondary: 'Download CV',
  },
  instrument: {
    caption: 'What it took to serve you this page',
    ttfb: 'First byte',
    protocol: 'Protocol',
    ready: 'Document ready',
    requests: 'Requests',
    weight: 'Transferred',
    viewport: 'Your window',
    cached: 'cached',
    pending: '—',
  },
  work: {
    heading: 'Projects',
    intro: 'What I have built, newest first.',
    stack: 'Stack',
  },
  projects: [
    {
      ...es.projects[0],
      kind: 'macOS study app',
      period: 'Oct 2026',
      summary:
        'A Pomodoro timer for the Mac built for long sessions, from 25 to 90 minutes, with the option to split anything over an hour into two blocks with a break in between. It lives in the menu bar, schedules sessions and keeps a week of history. Everything stays local: no accounts, no server.',
      facts: [
        'Scheduled sessions that never overlap, with notifications to start or decline',
        'Turns on macOS Focus while studying, through Shortcuts',
        'Time is stored as dates, so it stays exact even if the Mac sleeps',
        'Download site built with Astro',
      ],
      link: { href: 'https://usetomate.com', label: 'Visit usetomate.com' },
      repo: { href: 'https://github.com/Leocanela279/tomate', label: 'Code' },
      alt: 'Tomate’s website with the headline “Estudia en pomodoros de hasta 90 minutos” and the app window below.',
    },
    {
      ...es.projects[1],
      kind: 'Application portal, at Humannova',
      period: 'Sep 2026 – now',
      summary:
        'An application portal for the ICEX Next programme, built on the Reskillia codebase and cut down to what the client needed: no AI, no public sign-up and privacy first. The team invites each person, who gets a link to set a password, accepts the privacy policy and submits a CV and the questionnaire for their profile.',
      facts: [
        'Reads CVs as PDF or images, with local OCR for scanned documents',
        'One questionnaire per profile, versioned, with drafts migrated between versions',
        'Every privacy acceptance recorded with its version and date',
        'Answers exported to Excel for the review team',
      ],
      link: { href: 'https://icex.humannova.com/', label: 'See the sign-in' },
      alt: 'ICEX Next sign-in screen: the questionnaire message on the left, the sign-in form on the right.',
    },
    {
      ...es.projects[2],
      kind: 'AI skills assessment, at Humannova',
      period: 'Mar 2026 – now',
      summary:
        'A platform for companies to assess their team’s digital skills against DigComp 2.2, the European framework. Each person uploads a CV and fills in a profile; Gemini picks seven competences with a target level, writes the questions and scores the answers. The result is a radar chart comparing expected and achieved levels, downloadable as a PDF.',
      facts: [
        'Email or Google sign-in on Supabase Auth',
        'Personal data encrypted with AES-256-GCM and RLS policies in PostgreSQL',
        'Interface in Spanish and Catalan',
        'Developed and deployed in Docker containers',
      ],
      link: { href: 'https://skillia-dev-production.up.railway.app/es', label: 'Visit Reskillia' },
      alt: 'Reskillia’s home page with the headline “Desbloquea tu potencial real” and buttons to start or sign in.',
    },
    {
      ...es.projects[3],
      kind: 'Club website, team project',
      period: 'Mar 2025 – Jul 2026',
      summary:
        'The website of Club Stas Tarat, a board game and role-playing club in Terrassa that has run for almost forty years with around a hundred members. It presents the club’s six sections, the weekly schedule, the event calendar and the game library, with a members’ area.',
      facts: [
        'Built as a team with Manuel Ordoñez and Nicolau Miguel',
        'Google API integration',
        'PDF and QR code generation',
      ],
      link: { href: 'https://stastarat.com', label: 'Visit stastarat.com' },
      alt: 'stastarat.com home page with the headline “Descobreix el món dels jocs de taula” and the club’s green mascot.',
    },
  ],
  about: {
    heading: 'About',
    paragraphs: [
      'I’m Leandro, a full-stack developer in Barcelona who leans towards the backend, and a computer science student. I enjoy the part of the work nobody sees: the data model, the permissions and what happens when something fails.',
      'I work at Humannova, where we build Reskillia and the ICEX Next portal with Next.js, Supabase and Docker. Before that, Laravel was my main tool: the Stas Tarat website came from there.',
      'Outside work I build tools I use myself, like Tomate, a study timer for the Mac, and small Go utilities for the terminal.',
    ],
    role: 'Full-stack developer at Humannova and computer science student',
    skillsHeading: 'What I work with',
    skills: [
      { icon: 'lucide:server', title: 'Backend', items: skillItems.backend },
      { icon: 'lucide:layout-template', title: 'Frontend', items: skillItems.frontend },
      { icon: 'lucide:database', title: 'Data', items: skillItems.data },
      { icon: 'lucide:wrench', title: 'Tools', items: skillItems.tools },
    ],
  },
  contact: {
    heading: 'Have a product with logic that needs sorting out?',
    sentence: 'Write to me and I’ll get back to you. You can also browse my code or download my CV.',
    cv: 'Download CV',
    city: 'Barcelona, Spain',
  },
  footer: {
    what: 'Full-stack developer in Barcelona. I build the part you don’t see so the part you do see works.',
    work: 'Projects',
    site: 'Site',
    elsewhere: 'Contact',
    otherLang: 'Español',
    privacy: 'This site uses no cookies and collects no data from its visitors.',
    clock: 'Time in Barcelona',
    artCredit: 'The Sagrada Família in the background is ASCII generated from',
    artBy: 'by Jopparn',
  },
};

export const content: Record<Locale, Content> = { es, en };
export { links };
