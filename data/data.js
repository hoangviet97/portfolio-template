import Img from "../public/assets/project1.jpg";
import Project2 from "../public/assets/project2.jpg";
import Project3 from "../public/assets/project3.jpg";
import Project4 from "../public/assets/project4.jpg";
import Project5 from "../public/assets/project5.jpg";
import Project6 from "../public/assets/project6.jpg";
import AboutImg from "../public/assets/about.jpg";
import ContactImg from "../public/assets/contact.jpg";
import { faRulerVertical, faMagnifyingGlass, faMobile } from "@fortawesome/free-solid-svg-icons";

import Client1 from "../public/assets/client1.png";
import Client2 from "../public/assets/client2.png";
import Client3 from "../public/assets/client3.png";
import Client4 from "../public/assets/client4.png";
import Client5 from "../public/assets/client5.png";
import Client6 from "../public/assets/client6.png";

export const theme = "dark";

export const logo = {
  title: "logo",
  imgUrl: ""
};

export const aboutImage = AboutImg;

export const contactImage = ContactImg;

export const highlightStatistics = [
  { title: "years of experience", number: 6, icon: "" },
  { title: "finished projects", number: 14, icon: "" },
  { title: "unique clients", number: 10, icon: "" },
  { title: "design awards", number: 3, icon: "" }
];

export const skills = [
  { title: "Javascript", percent: 90 },
  { title: "ReactJS", percent: 86 },
  { title: "Angular", percent: 73 },
  { title: "NodeJS", percent: 79 },
  { title: "Figma", percent: 82 }
];

export const languages = [
  { title: "English", percent: 100 },
  { title: "French", percent: 70 },
  { title: "Spanish", percent: 89 }
];

export const services = [
  { title: "Web Development", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate.", images: [Img], url: "www.facebook.com" },
  { title: "Mobile Apps", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate.", icon: faMobile },
  { title: "UI/UX Design", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate.", icon: faRulerVertical },
  { title: "Consultancy", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate.", images: [Img], url: "www.facebook.com" },
  { title: "Branding", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate.", images: [Img], url: "www.facebook.com" },
  { title: "SEO", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate..", icon: faMagnifyingGlass }
];

export const projects = [
  { title: "GreenField", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate asperiores quam voluptas accusantium debitis.", stack: ["React", "Tailwind", "GraphQL", "MySQL", "Prisma"], images: [Img], url: "www.facebook.com" },
  { title: "Visualy.io", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate asperiores quam voluptas accusantium debitis.", stack: ["React", "Tailwind", "GraphQL"], images: [Project2], url: "www.facebook.com" },
  { title: "Datafest", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate asperiores quam voluptas accusantium debitis.", stack: ["React", "Tailwind", "GraphQL"], images: [Project3], url: "www.facebook.com" },
  { title: "MonoSphere", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate asperiores quam voluptas accusantium debitis.", stack: ["React", "Tailwind", "GraphQL"], images: [Project4], url: "www.facebook.com" },
  { title: "Coinmartix", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate asperiores quam voluptas accusantium debitis.", stack: ["React", "Tailwind", "GraphQL"], images: [Project5], url: "www.facebook.com" },
  { title: "Connectimo", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut quisquam accusamus itaque voluptate asperiores quam voluptas accusantium debitis.", stack: ["Angular", "Rxjs", "Material UI", ".NET", "PostgreSQL", "Redis"], images: [Project6], url: "www.facebook.com" }
];

export const project_categories = ["All", "Websites", "Mobile Apps", "Logo Design"];

export const resume = {
  link: false,
  template: {
    firstname: "Edward",
    lastname: "Doe",
    title: "Fullstack developer and UI/UX designer",
    perex: "Passionated developer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products regardless of stack.",
    education: [
      { school_name: "University of economics in Prague", start: "Nov 2018", end: "Jan 2022" },
      { school_name: "Technical High School Kladno", start: "Aug 2013", end: "Jun 2017" }
    ],
    experience: [{ company_name: "Perfect Systems", position: "Front-End Developer", start_date: "", end_date: "", description: "", responsibilities: [] }],
    projects: [],
    core_technologies: ["Javascript, React.js, Next.js, Tailwind, Express, MySQL, GraphQL"],
    languages: ["English, Spanish, Czech"]
  }
};

export const clients = [Client1, Client2, Client3, Client4, Client5, Client6];
