import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  danit,
  carrent,
  jobit,
  tripguide,
  forkio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Development",
    icon: web,
  },
  {
    title: "Responsive Web Design",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "DanIT Education",
    icon: danit,
    iconBg: "#383E56",
    date: "February 2022 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ihor proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "After Ihor optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const projects = [
  {
    name: "SnapTalk",
    description:
      "A web-based messaging platform that allows users to send and receive messages, similar to Telegram.The platform aims to enhance digital communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ihor3456.github.io/SnapTalk.io/",
  },
  {
    name: "Medical",
    description:
      "A web application that allows users to search for available doctors, view available appointment slots, and book consultations based on their medical needs and location.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://andreylight.github.io/Step_Project_Cards/",
  },
  {
    name: "Budwellness",
    description:
      "An online store that offers a wide range of medical products specifically designed for the treatment of cancer. The platform  have  medical supplies delivered to their location. ",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "saas",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://budwellness.dan-it.com.ua/",
  },
  {
    name: "Forkio",
    description:
      "A project website developed as a step-task for DAN-IT, utilizing HTML5, CSS3, and JavaScript (ES6). The platform features a responsive design with a structured layout and interactive components.  ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "sass",
        color: "blue-text-gradient",
      },
    ],
    image: forkio,
    source_code_link: "https://ihor3456.gitlab.io/step_project_forkio",
  },
];

export { services, technologies, experiences, testimonials, projects };
