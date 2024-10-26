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
docker,
carrent,
jobit,
tripguide,
threejs,
xodeum,
BlueBrackets,
Avatar,
Lane,
Traffic,

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
    title: "Web Developer",
    icon: web,
},
{
    title: "Android Developer",
    icon: mobile,
},
{
    title: "Python Developer",
    icon: backend,
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
{
    name: "docker",
    icon: docker,
},
];

const experiences = [
{
    title: "Android Developement Intern",
    company_name: "Blue Brackets",
    icon: BlueBrackets,
    iconBg: "white",
    date: "December 2023 - April 2024",
    points: [
        "Developed an inventory management application tailored for housing schemes.",
        "Implemented features for project creation, plot details, dimensions, and potential buyers.",
        "Designed a user-friendly interface for employees, enabling drag-and-drop project creation."
    ],
},
{
    title: "Full stack Developer",
    company_name: "Xodeum",
    icon: xodeum,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
    ],
},
];

const testimonials = [
// {
//     testimonial:
//     "I thought it was impossible to make a website as beautiful as our product, but Haram proved me wrong.",
//     name: "Muhammad Taha Mukhtar",
//     designation: "Freelancer",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
// },
// {
//     testimonial:
//     "I've never met a web developer who truly cares about their clients' success like haram does.",
//     name: "Hamza Khurshid",
//     designation: "CTO",
//     company: "Xodeum",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
// },
// {
//     testimonial:
//     "After haram optimized our app, our traffic increased by 50%. We can't thank him enough!",
//     name: "Imran Rao",
//     designation: "CEO",
//     company: "Blue Brackets",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
// },
];

const projects = [
{
    name: "3d Avatar",
    description:
    "Implementing the knowledge of threejs and react-three-fiber to create a 3d avatar with custom animations like typing,falling and controls.",
    tags: [
    {
        name: "react-three-fiber",
        color: "blue-text-gradient",
    },
    {
        name: " three.js",
        color: "green-text-gradient",
    },
    {
        name: "tailwind",
        color: "pink-text-gradient",
    },
    ],
    image: Avatar,
    source_code_link: "https://github.com/Haram-Nagra/Otaku-Guide",
},
{
    name: "Adaptive Encryption Based on traffic Analysis",
    description:
    "Developed adaptive encryption using AES-GCM to ensure data confidentiality with resilient 128-bit encryption processes.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "flask",
        color: "green-text-gradient",
    },
    {
        name: "tailwind",
        color: "pink-text-gradient",
    },
    ],
    image: Traffic,
    source_code_link: "https://github.com/Haram-Nagra/Adaptive-Encryption-Based-on-traffic-analysis",
},
{
    name: "Real Time Lane Detection",
    description:
    "A comprehensive lane detection system that enables real time lane detection showing blue lines on lane using only digital image processing.",
    tags: [
    {
        name: "javascript",
        color: "blue-text-gradient",
    },
    {
        name: "OpenCV",
        color: "green-text-gradient",
    },
    {
        name: "python",
        color: "pink-text-gradient",
    },
    ],
    image: Lane,
    source_code_link: "https://github.com/",
},
];

export { services, technologies, experiences, testimonials, projects };