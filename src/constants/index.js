import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  shopify,
  threejs,
  threejsWhite,
  xphoria,
  sanity,
  framerMotion,
  next,
  headlessUI,
  experiment3D,
  metaverse,
  nextAuth,
  alexy,
  IP_Tracker,
  tangierHorizons,
  nodemailer,
  portfolio,
  vite,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Fullstack Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Web Developer',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: '',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const projects = [
  {
    name: 'Xphoria',
    description: `With a passworless email-only JWT authentication system, Xphoria is ensuring an easier and safer option steering away from vurnabilities associated with
    user credentials. The project features a unique and captivating UX/UI and product customization guarantiying user satisfaction, the checkout gateway is implemented using the Shopify package.`,
    image: xphoria,
    source_code_link: 'https://github.com/Yassine-Laaziz/Xphoria',
    remaining: 20,
    tags: [
      {
        name: 'Api Routes',
        color: 'green-text-gradient',
      },
      {
        name: 'CMS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Serverless (partially)',
        color: 'blue-text-gradient',
      },
    ],
    stack: [
      { img: mongodb, alt: 'MongoDB' },
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: typescript, alt: 'Typescript' },
      { img: sanity, alt: 'Sanity' },
      { img: nodejs, alt: 'Node.js' },
      { img: nodemailer, alt: 'Nodemailer' },
      { img: shopify, alt: 'Shopify' },
      { img: tailwind, alt: 'Tailwind.css' },
      { img: headlessUI, alt: 'HeadlessUI' },
      { img: framerMotion, alt: 'Framer-Motion' },
    ],
  },
  {
    name: 'Alexy',
    description: `Alexy is an e-commerce website that offers a variety of session authentication gateways using NextAuth.js. It allows users to choose the authentication option that suits them best. 
    Additionally, the project includes features such as notifying professionals via nodemailer for Google Meet sessions and a professional UX/UI newsletter subscription for beauty and health tips.`,
    image: alexy,
    source_code_link: 'https://github.com/Yassine-Laaziz/Alexy',
    remaining: 50,
    tags: [
      {
        name: 'Api Routes',
        color: 'green-text-gradient',
      },
      {
        name: 'CMS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Serverless (partially)',
        color: 'blue-text-gradient',
      },
    ],
    stack: [
      { img: mongodb, alt: 'MongoDB' },
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: nextAuth, alt: 'NextAuth.js' },
      { img: typescript, alt: 'Typescript' },
      { img: sanity, alt: 'Sanity' },
      { img: nodejs, alt: 'Node.js' },
      { img: nodemailer, alt: 'Nodemailer' },
      { img: tailwind, alt: 'Tailwind.css' },
      { img: headlessUI, alt: 'HeadlessUI' },
      { img: framerMotion, alt: 'Framer-Motion' },
    ],
  },
  {
    name: '3D Experiment',
    description: `3D shirt customization. Using advanced cutting-edge web development techniques and tools
    like Three.js and Next.js framework to deliver optimal performance and seamless interactivity, it also
    harnesses the power of ai for image generation on the server.`,
    image: experiment3D,
    source_code_link: 'https://github.com/Yassine-Laaziz/3D-Experiment',
    tags: [
      {
        name: 'Api Routes',
        color: 'green-text-gradient',
      },
      {
        name: 'Serverless (partially)',
        color: 'blue-text-gradient',
      },
    ],
    stack: [
      { img: threejsWhite, alt: 'Three.js' },
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: typescript, alt: 'Typescript' },
      { img: nodejs, alt: 'Node.js' },
      { img: tailwind, alt: 'Tailwind.css' },
      { img: framerMotion, alt: 'Framer-Motion' },
    ],
  },
  {
    name: 'Metaverse',
    description: `This is a landing page project, that delivers a captivating user interface and experience, 
    The sleek design and animation is crafted using Tailwind CSS and Framer-Motion.`,
    image: metaverse,
    source_code_link: 'https://github.com/Yassine-Laaziz/Metaverse',
    tags: [
      {
        name: 'UI/UX',
        color: 'blue-text-gradient',
      },
    ],
    stack: [
      { img: next, alt: 'Next.js' },
      { img: reactjs, alt: 'React.js' },
      { img: tailwind, alt: 'Tailwind.css' },
      { img: framerMotion, alt: 'Framer-Motion' },
    ],
  },
  {
    name: 'Arganaya',
    description: `Arganaya focuses on ensuring user satisfaction through food customization for better health and taste preferences.
    The project includes user authentication through JWT, with nodemailer used for email verification and receiving food orders.`,
    image: alexy,
    source_code_link: 'https://github.com/Yassine-Laaziz/Arganaya',
    tags: [
      {
        name: 'Api Routes',
        color: 'green-text-gradient',
      },
      {
        name: 'CMS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Serverless (partially)',
        color: 'blue-text-gradient',
      },
    ],
    stack: [
      { img: mongodb, alt: 'MongoDB' },
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: sanity, alt: 'Sanity' },
      { img: nodejs, alt: 'Node.js' },
      { img: nodemailer, alt: 'Nodemailer' },
    ],
  },
  {
    name: 'Portfolio',
    description: `This is my own portfolio project that ensures a captivating 3D user interface and experience using Three.js,
    showcasing some of my contracts, projects and achievements using a wonderful interface. Also uses a simple 'formSpree' 
    form-action url to send an email to me and 'formspree' and google recaptcha for spam prevention`,
    image: portfolio,
    source_code_link: 'https://github.com/Yassine-Laaziz/Arganaya',
    tags: [
      {
        name: 'Api Routes',
        color: 'green-text-gradient',
      },
      {
        name: 'CMS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Serverless (partially)',
        color: 'blue-text-gradient',
      },
    ],
    stack: [
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: threejsWhite, alt: 'Three.js' },
      { img: framerMotion, alt: 'Framer-Motion' },
      { img: vite, alt: 'Vite' },
    ],
  },
  {
    name: 'IP Tracker',
    description: `An IP Tracker Built using simple rest api's, user enters IP, website uses api to fetch the ip json,
    display it properly and assign it's latitude and longitude to an api map, if user enters a blank ip the website
    uses another api to get the ip first.`,
    image: IP_Tracker,
    source_code_link: 'https://github.com/Yassine-Laaziz/IP-Tracker',
    stack: [{ img: reactjs, alt: 'React.js' }],
  },
  {
    name: 'Tangier Horizons',
    description: `Tangier Horizons is like a portfolio for an association, this project is simple yet provides a good UX/UI showcasing 
    the achievements, gallery and personalities of the association`,
    image: tangierHorizons,
    source_code_link: 'https://github.com/Yassine-Laaziz/IP-Tracker',
    stack: [
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: sanity, alt: 'Sanity' },
    ],
  },
]

export { services, technologies, experiences, projects }
