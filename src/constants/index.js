import { getAssetPath } from '../utils/getAssetPath';

export const myProjects = [
  {
    id: 1,
    title: "ProClean ERP",
    description:
      "Sistema ERP completo desarrollado para investigación académica con gestión empresarial integral.",
    subDescription: [
      "Desarrollo de un sistema ERP completo con backend modular y escalable.",
      "Implementación de sistema de autenticación y autorización de usuarios.",
      "Creación de dashboards interactivos para visualización de datos empresariales.",
      "Gestión integral de procesos empresariales con interfaz moderna y responsiva.",
    ],
    href: "https://github.com/smuke123/ProClean_ERP",
    logo: "",
    image: getAssetPath("assets/projects/Proclean.jpeg"),
    tags: [
      {
        id: 1,
        name: "React",
        path: getAssetPath("assets/logos/react.svg"),
      },
      {
        id: 2,
        name: "JavaScript",
        path: getAssetPath("assets/logos/javascript.svg"),
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: getAssetPath("assets/logos/tailwindcss.svg"),
      },
      {
        id: 4,
        name: "Git",
        path: getAssetPath("assets/logos/git.svg"),
      },
    ],
  },
  {
    id: 2,
    title: "Dismet Distribuciones Website",
    description:
      "Desarrollo completo del frontend de la página web corporativa de Dismet Distribuciones.",
    subDescription: [
      "Desarrollo frontend completo usando tecnologías web modernas.",
      "Implementación de interfaces responsivas optimizadas para todos los dispositivos.",
      "Diseño orientado a mejorar la experiencia de usuario y conversión.",
      "Integración de componentes interactivos y animaciones fluidas.",
    ],
    href: "https://github.com/smuke123/DismetWebPage",
    logo: "",
    image: getAssetPath("assets/projects/DismetWeb.jpeg"),
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: getAssetPath("assets/logos/html5.svg"),
      },
      {
        id: 2,
        name: "CSS3",
        path: getAssetPath("assets/logos/css3.svg"),
      },
      {
        id: 3,
        name: "JavaScript",
        path: getAssetPath("assets/logos/javascript.svg"),
      },
      {
        id: 4,
        name: "Git",
        path: getAssetPath("assets/logos/git.svg"),
      },
    ],
  },
  {
    id: 3,
    title: "Students Performance Analysis",
    description:
      "Análisis de datos y predicción de desempeño académico usando Python y técnicas de data science.",
    subDescription: [
      "Análisis de dataset con miles de registros de estudiantes.",
      "Aplicación de técnicas estadísticas para predicción de desempeño académico.",
      "Visualización de datos usando Matplotlib para insights accionables.",
      "Procesamiento y limpieza de datos usando Pandas y NumPy.",
    ],
    href: "https://github.com/smuke123/StudentsPerfomanceAnalysis",
    logo: "",
    image: getAssetPath("assets/projects/StudentAnalysis.png"),
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: getAssetPath("assets/logos/javascript.svg"),
      },
      {
        id: 2,
        name: "Git",
        path: getAssetPath("assets/logos/git.svg"),
      },
      {
        id: 3,
        name: "GitHub",
        path: getAssetPath("assets/logos/github.svg"),
      },
      {
        id: 4,
        name: "VSCode",
        path: getAssetPath("assets/logos/visualstudiocode.svg"),
      },
    ],
  },
  {
    id: 4,
    title: "Challenge Flutter GreenGo",
    description:
      "Aplicación móvil desarrollada en tiempo récord durante un evento local de Flutter.",
    subDescription: [
      "Desarrollo de aplicación completa desde cero en solo 3 horas.",
      "Participación en evento competitivo de Flutter Bucaramanga 2024.",
      "Implementación rápida de UI/UX atractiva y funcional.",
      "Gestión eficiente del tiempo y priorización de features bajo presión.",
    ],
    href: "https://github.com/smuke123/ChallengeFlutterGreenGo",
    logo: "",
    image: getAssetPath("assets/projects/FlutterChallenge.jpeg"),
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: getAssetPath("assets/logos/javascript.svg"),
      },
      {
        id: 2,
        name: "Git",
        path: getAssetPath("assets/logos/git.svg"),
      },
      {
        id: 3,
        name: "GitHub",
        path: getAssetPath("assets/logos/github.svg"),
      },
      {
        id: 4,
        name: "VSCode",
        path: getAssetPath("assets/logos/visualstudiocode.svg"),
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/573005495453",
    icon: getAssetPath("assets/socials/whatsApp.svg"),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/edgar-santiago-ariza-garc%C3%ADa-835221398/",
    icon: getAssetPath("assets/socials/linkedIn.svg"),
  },
  {
    name: "GitHub",
    href: "https://github.com/smuke123",
    icon: getAssetPath("assets/socials/github.svg"),
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "Dismet Distribuciones",
    date: "Enero 2025 - Junio 2025",
    contents: [
      "Desarrollo completo del frontend de la página web corporativa de la empresa usando tecnologías modernas.",
      "Implementación de interfaces responsivas optimizadas para todos los dispositivos.",
      "Diseño orientado a mejorar la experiencia de usuario y aumentar la conversión.",
      "Colaboración con el equipo de diseño para traducir mockups en componentes funcionales.",
      "Proyecto disponible en: github.com/smuke123/DismetWebPage",
    ],
  },
  {
    title: "Estudiante de Ingeniería de Sistemas",
    job: "Universidad Industrial de Santander (UIS)",
    date: "2021 - 2026 (Est.)",
    contents: [
      "Formación en desarrollo de software, estructuras de datos y algoritmos.",
      "Desarrollo de proyectos académicos usando React, Node.js, Python y Flutter.",
      "Participación activa en eventos de desarrollo como Flutter Bucaramanga 2024.",
      "Certificación de inglés nivel B2, facilitando acceso a documentación técnica internacional.",
      "Investigación y desarrollo de sistema ERP completo como proyecto académico.",
    ],
  },
  {
    title: "Desarrollador de Proyectos Personales",
    job: "GitHub Portfolio",
    date: "2024 - Presente",
    contents: [
      "Desarrollo de proyectos personales para expandir conocimientos en diferentes tecnologías.",
      "Creación de portafolio en GitHub con proyectos en React, Python, Flutter y más.",
      "Análisis de datos con Python, Pandas y Matplotlib para proyectos de data science.",
      "Aprendizaje continuo de nuevas tecnologías y frameworks modernos.",
    ],
  },
];
export const reviews = [
  {
    name: "María González",
    username: "@mariag",
    body: "Edgar es un desarrollador muy profesional y dedicado. Su trabajo en el frontend es impecable.",
    img: "https://robohash.org/maria",
  },
  {
    name: "Carlos Rodríguez",
    username: "@carlosr",
    body: "Excelente trabajo en el desarrollo de nuestro sitio web. Muy responsable y creativo.",
    img: "https://robohash.org/carlos",
  },
  {
    name: "Ana Martínez",
    username: "@anam",
    body: "Su capacidad para resolver problemas y crear soluciones innovadoras es impresionante.",
    img: "https://robohash.org/ana",
  },
  {
    name: "Luis Fernández",
    username: "@luisf",
    body: "Gran habilidad técnica y excelente comunicación. Un placer trabajar con él.",
    img: "https://robohash.org/luis",
  },
  {
    name: "Sandra López",
    username: "@sandral",
    body: "Desarrollador talentoso con gran atención al detalle y pasión por su trabajo.",
    img: "https://robohash.org/sandra",
  },
  {
    name: "Diego Ramírez",
    username: "@diegor",
    body: "Su conocimiento en frontend y su capacidad de aprendizaje son excepcionales.",
    img: "https://robohash.org/diego",
  },
];
