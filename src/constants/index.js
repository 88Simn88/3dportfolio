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
    threejs,
    acad,
    meta,
    starbucks,
    tesla,
    shopify,
    pokedex,
    ecomm,
    rickmorty,
    petsblog,
    weather,
    galles,
    cardgame,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
    
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Fundamentals Module",
      company_name: "Academlo",
      icon: acad,
      iconBg: "#fff",
      date: "February 2023 - March 2023",
      points: [
        "Learning the fundamentals of web development",
        "Projects with HTML and CSS",
        "Projects and logic with Javascript",
        "build an E-commerce with HTML, CSS and Javascript"
      ],
    },
    {
      title: "React Js Module",
      company_name: "Academlo",
      icon: acad,
      iconBg: "#fff",
      date: "April 2023 - May 2023",
      points: [
        "First projects with React",
        "Differents Apis with react hooks",
        "Projects with hooks, Apis, Redux, Javascript and CSS"
      ],
    },
    {
      title: "Node.Js Module",
      company_name: "Academlo",
      icon: acad,
      iconBg: "#fff",
      date: "June 2023 - July 2023",
      points: [
        "Projects with postgreSQL",
        "Render Server Side",
        "Build Apis with Express and Node.js"
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Academlo",
      icon: acad,
      iconBg: "#fff",
      date: "August 2023",
      points: [
        "Graduated as a full stack Developer"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pokedex",
      description:
        "Web-based platform that allows users to search and read information about differents pokemons. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pokedex,
      source_code_link: "https://pokedex-sim.netlify.app",
      
    },
    {
      name: "E-commerce",
      description:
        "Web application that enables users to search, view, check stock and buy products.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ecomm,
      source_code_link: "https://e-commerce-sim.netlify.app",
    },
    {
      name: "Rick and Morty",
      description:
      "Web-based platform that allows users to search and read information about differents characters of Rick and Morty . ",
      tags: [
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: rickmorty,
      source_code_link: "https://rickandmorty-sim.netlify.app",
    },
    {
      name: "Petsblog",
      description:
        "Web plattform where you can find all the information that you need for your pets. ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: petsblog,
      source_code_link: "https://petsblog-sim.netlify.app",
    },
    {
      name: "Weather App",
      description:
        "Web app that allows users to have information about weather, searching for location and name.  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://weather-app-sim.netlify.app",
    },
    {
      name: "Fortune Cookies",
      description:
      "Web-based platform that enables users to search and read differents fortune phrases . ",
      tags: [
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: galles,
      source_code_link: "https://galletasdelafortuna1-sim.netlify.app",
    },
    {
      name: "Cardgame",
      description:
      "Web-app where you can play the famous Memory cardgame . ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cardgame,
      source_code_link: "https://cardgame-sim.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };