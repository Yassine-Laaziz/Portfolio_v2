import {
  backend,
  web,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
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
  arganaya,
  nextBlack,
} from '../assets'
import { achievementT, experience, project } from '../../types'

export const navLinks: { id: string; title: string }[] = [
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
export const services: { title: string; icon: string }[] = [
  {
    title: 'Fullstack Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Web Developer',
    icon: backend,
  },
]

export const technologies: { name: string; icon: string }[] = [
  { name: 'TypeScript', icon: typescript },
  { name: 'React JS', icon: reactjs },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Three JS', icon: threejs },
  { name: 'next Js', icon: nextBlack },
  { name: 'NextAuth', icon: nextAuth },
  { name: 'Framer-motion', icon: framerMotion },
  { name: 'Sanity CMS', icon: sanity },
  { name: 'Headless UI', icon: headlessUI },
  { name: 'vite', icon: vite },
  { name: 'figma', icon: figma },
]

export const experiences: experience[] = [
  {
    title: 'Nextjs Web Developer (fullstack)',
    company_name: 'Xphoria',
    icon: xphoria,
    iconBg: '#383E56',
    date: 'Jun 2023 - Present',
    points: [
      'Developed a passwordless email-only JWT authentication system for enhanced security and ease of use.',
      'Designed a captivating and user-friendly UX/UI with customizable product options.',
      'Implemented a checkout gateway using the Shopify package.',
    ],
  },
  {
    title: 'Nextjs Web Developer (fullstack)',
    company_name: 'Alexy',
    icon: alexy,
    iconBg: '#383E56',
    date: 'Jan 2023 - May 2023',
    points: [
      'Developed an e-commerce website with multiple session authentication gateways using NextAuth.js.',
      'Implemented nodemailer for notifying professionals about Google Meet sessions.',
      'Created a professional UX/UI newsletter subscription for beauty and health tips.',
    ],
  },
  {
    title: 'Nextjs Web Developer (fullstack)',
    company_name: 'Arganaya ',
    icon: arganaya,
    iconBg: '#383E56',
    date: 'Jun 2022 - Dec 2022 · 7 mos',
    points: [
      'Created a responsive, High-Quality Company Website according to design.',
      'Implemented signup/login functionalities, an email verification system, and a checkout system (was going to implement a checkout system using “stripe” but the company preferred a “pay as you receive” way).',
      'Implemented middleware and protected routes using “Jose” (a package like "jsonwebtoken") for authorization/authentication.',
      'Made the orders customizable by adding “params” and “option” properties to cart items making the website much more engaging and pleasurable.',
    ],
  },
  {
    title: 'Junior Frontend React Web Developer',
    company_name: "Tangier's Horizons Association",
    icon: tangierHorizons,
    iconBg: '#383E56',
    date: 'Mar 2022 - Jun 2022 · 4 mos',
    points: [
      "Engineered the Programs' Architecture to be scalable for upcoming updates and developers.",
      'Programmed The Whole Website According to design And all of its Pages using React Router V6 (nothing has been updated since I finished so you can check it out in my portfolio).',
      'Transformed a given design into a fully functioning website while respecting responsiveness.',
    ],
  },
]

export const contracts: project[] = [
  {
    name: 'Xphoria',
    description: `With a passworless email-only JWT authentication system, Xphoria is ensuring an easier and safer option eliminating and steering away from vurnabilities associated with
    user credentials. The project features a unique and captivating UX/UI and product customization guarantiying user satisfaction, the checkout gateway is implemented using the Shopify package.`,
    image: xphoria,
    website_link: 'https://xphoria.vercel.app',
    source_code_link: 'https://github.com/Yassine-Laaziz/Xphoria',
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
    website_link: 'https://alexy.vercel.app',
    source_code_link: 'https://github.com/Yassine-Laaziz/Alexy',
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
    name: 'Arganaya',
    description: `Arganaya focuses on ensuring user satisfaction through food customization for better health and taste preferences.
    The project includes user authentication through JWT, with nodemailer used for email verification and receiving food orders.`,
    image: arganaya,
    website_link: 'https://arganaya.vercel.app',
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
    name: 'Tangier Horizons',
    description: `Tangier Horizons is like a portfolio for an association, this project is simple yet provides a good UX/UI showcasing 
    the achievements, gallery and personalities of the association`,
    image: tangierHorizons,
    website_link: 'https://tangierHorizons.netlify.app',
    source_code_link: 'https://github.com/Yassine-Laaziz/IP-Tracker',
    stack: [
      { img: reactjs, alt: 'React.js' },
      { img: next, alt: 'Next.js' },
      { img: sanity, alt: 'Sanity' },
    ],
  },
]

export const projects: project[] = [
  {
    name: '3D Experiment',
    description: `3D shirt customization. Using advanced cutting-edge web development techniques and tools
    like Three.js and Next.js framework to deliver optimal performance and seamless interactivity, it also
    harnesses the power of ai for image generation on the server.`,
    image: experiment3D,
    website_link: 'https://3-d-experiment.vercel.app',
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
      {
        name: '3D',
        color: 'pink-text-gradient',
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
    website_link: 'https://metaverse-yl.vercel.app',
    image: metaverse,
    source_code_link: 'https://github.com/Yassine-Laaziz/Metaverse',
    stack: [
      { img: next, alt: 'Next.js' },
      { img: reactjs, alt: 'React.js' },
      { img: tailwind, alt: 'Tailwind.css' },
      { img: framerMotion, alt: 'Framer-Motion' },
    ],
  },
  {
    name: 'Portfolio',
    description: `This is my own portfolio project that ensures a captivating 3D user interface and experience using Three.js,
    showcasing some of my contracts, projects and achievements using a wonderful interface. Also uses a simple 'formSpree' 
    form-action url to send an email to me and 'formspree' and google recaptcha for spam prevention`,
    image: portfolio,
    website_link: 'https://yassinelz.vercel.app',
    source_code_link: 'https://github.com/Yassine-Laaziz/Arganaya',
    tags: [
      {
        name: '3D',
        color: 'pink-text-gradient',
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
    website_link: 'https://ip-tracker-yl.netlify.app',
    source_code_link: 'https://github.com/Yassine-Laaziz/IP-Tracker',
    stack: [{ img: reactjs, alt: 'React.js' }],
  },
]

export const achievements: achievementT[] = [
  {
    age: 12,
    achievement: 'I became a software engineer',
    description:
      'At the age of 12, I embarked on my software engineering journey by diving into Lua programming. Lua allowed me to develop various projects and sparked my passion for coding. It was during this time that I also began exploring the world of web development.',
    keyPoints: [
      'Initiated software engineering journey',
      'Developed projects using Lua',
      'Started exploring web development',
    ],
  },
  {
    age: 15,
    achievement: 'I became an advanced Web Developer with Cybersecurity Skills',
    description:
      'By the time I turned 15, I had established myself as an advanced fullstack web developer, proficient in both frontend and backend development. I specialized in creating captivating 3D user interfaces and seamless user experiences on the frontend, while also architecting robust and scalable backend systems. Additionally, I expanded my knowledge in cybersecurity, ensuring the security and integrity of web applications.',
    keyPoints: [
      'Advanced fullstack web development skills',
      'Expertise in creating captivating 3D user interfaces and seamless user experiences on the frontend',
      'Proficient in building robust and scalable backend system',
      'Proficient in cutting-edge web technologies',
      'Novice-level cybersecurity knowledge to enhance web application security',
    ],
  },
]
