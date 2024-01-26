import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  sql,
  empresa,
  Todolist,
  page,
  threejs,
  aspnet,
  ux,
  mujer,
  monte,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: reactjs,
  },
  {
    title: "ASP.NET Developer",
    icon: aspnet,
  },
  {
    title: "UI/UX",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Auxiliar de programacion",
    company_name: "RE & RAM ASUNTOS ADUANEROS Y MARITIMOS",
    icon: empresa,
    iconBg: "#383E56",
    date: "enero 2023 - julio 2023",
    points: [
      "Optimicé código, mejorando rendimiento en un 30% ",
      "Desarrollé funciones clave en JavaScript y C#",
      "Colaboré en proyectos con Agile y SCRUM",
      "Capacitado en últimas tecnologías: React, Node.js",
      "Documenté código, facilitando mantenimiento futuro",
      "Contribuí en el diseño de UI/UX para apps",
    ],
  },
  {
    title: "Encargado TIC",
    company_name: "Monte de Piedad",
    icon: monte,
    iconBg: "#E6DEDD",
    date: "octubre 2023 - enero 2024",
    points: [
      "mpulsé la competencia digital, logrando un incremento del 25% en productividad mediante la capacitación estratégica de equipos en TIC.",
      "Diagnostiqué y resolví problemas técnicos para clientes, logrando una tasa de resolución del 95%",
      "Proporcioné asistencia remota y en persona, manteniendo altos niveles de satisfacción del cliente.",
     
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "Su dedicación y profesionalismo fueron evidentes en todas las tareas que emprendió. ",
    name: "Lic. Indira Nuñez",
    designation: "Encargada De RRHH",
    company: "Monte de piedad",
    image: mujer,
  },

 ];

const projects = [
  {
    name: "To-Do-List",
    description:
      "Lista de tareas funcional, añadir tarea, eliminar tarea, marcar como realizada",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Todolist,
    source_code_link: "https://github.com/CesarRD6/TO-DO-LIST.git",
  },
  {
    name: "Landing-Page",
    description:
      "Landing-Page moderna responsiva",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: page,
    source_code_link: "https://github.com/CesarRD6/Landing-Page.git",
  },
  // {
  //   name: "",
  //   description:
  //     "",
  //   tags: [
  //     {
  //       name: "",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
