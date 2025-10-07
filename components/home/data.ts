
type eduT = {
  course: string
  institution: string
  timeline: string
}

type descT = string | {
  title: string
  listCls?: string
  description?: string
  points: string[]
}

type expT = {
  title: string
  company: string
  timeline: string
  location: string
  listCls?: string
  descriptions: descT[]
  compDescription?: string
}

type projT = {
  title: string
  description: string
  technologies: string[]
  timeline: string
  features: string[]
  links: {
    description: string
    type: "github" | "live"
    url: string
  }[]
}

export const educations: eduT[] = [
  {
    course: "MBA (General)",
    institution: "Pondicherry University - Loyola College",
    timeline: "2022 - 2024"
  },
  {
    course: "B.Sc. Mathematics",
    institution: "Loyola College",
    timeline: "2016 - 2019"
  },
  {
    course: "Schooling (6th - 12th)",
    institution: "Don Bosco Higher Secondary School",
    timeline: "2010 - 2016"
  }
]

export const experiences: expT[] = [
  {
    title: "Senior Product Engineer",
    company: "HaiVE",
    timeline: "Feb 2024 - Jun 2025",
    location: "Hybrid - Chennai",
    compDescription: "HaiVE is an AI-first SaaS company focused on research and developing innovative AI-driven products. I was responsible for end-to-end UI development across web, mobile, and desktop platforms, using React as the core technology. Contributed to 15+ projects from scratch, out of which two evolved into major products: Speakup, Nidum.AI.",
    listCls: "list-decimal marker:font-medium",
    descriptions: [
      {
        title: "Speakup (Agent Studio)",
        description: "Speakup is an AI Agent Studio platform that automates B2B customer interactions using AI-driven voice and chat assistants, positioned as a direct competitor to vapi.ai and bland.ai. It offers customizable AI workflows, multi-channel communication (voice and chat), and seamless third-party integrations.",
        points: [
          "Built an AI Agent Studio platform for automating B2B customer interactions using AI-powered voice and chat assistants — positioned as a direct competitor to vapi.ai and bland.ai.",
          "Developed the entire product from scratch on the frontend (NextJs and HonoJs), supporting features such as inbound/outbound phone call agents, intelligent chatbots, and customizable AI workflows tailored for enterprise clients.",
          "Integrated third-party platforms like Zendesk and Zoho Cliq via webhooks to enable seamless communication between AI agents and external systems.",
          "Led the development and maintenance of the web frontend, backend services (auth and user data), and chatbot functionality, ensuring a scalable and reliable experience across use cases.",
          "Implemented a user-friendly interface for creating and managing AI agents, linking them to mobile numbers, deploying them for various interaction scenarios and customizing their behavior and chatbot interfaces.",
          "Technologies used: NextJs, HonoJs, Tailwindcss, Zustand, React Query.",
        ]
      },
      {
        title: "Nidum.AI (Vibe Studio)",
        description: "Nidum.AI is transforming the AI landscape by building a decentralized ecosystem that allows anyone to contribute computing power and earn rewards. Currently being acquired by BitsCrunch, a leading AI + Blockchain company in the crypto space.",
        points: [
          "Spearheaded the UI development of a decentralized AI ecosystem from the ground up, enabling users to access and interact with multiple AI models from providers like OpenAI, Claude, Groq, and others—all under one platform.",
          "Built and maintained web (React), mobile (React Native + Expo), and desktop (Electron) applications to ensure seamless cross-platform access.",
          "Designed and implemented a high-performance, scalable ChatGPT-like UI/UX tailored for real-time AI interactions.",
          "Website features: Chat with various AI models, image uploads, and voice activity detection (VAD) support.",
          "Mobile app features: Chat with AI models, use local AI models, and upload images.",
          "Desktop app features: All web features, plus local model loading, document-based chat, and the ability for users to share their computation power by exposing models for use by others.",
          "Technologies used: React, React Native + Expo, Electron, Tailwindcss, Zustand, React Query.",
        ]
      }
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Datalligence AI",
    timeline: "Jul 2023 - Feb 2024",
    location: "In-Office - Chennai",
    compDescription: "Datalligence is an OKR and performance management platform built to drive team alignment, boost productivity, and accelerate execution within organizations.",
    descriptions: [
      "Revamped OKR module UI with a sleek design, enhancing user experience as well as developer experience.",
      "Overhauled UI logics for a more intuitive and seamless interface with Antd design systems with Tailwindcss.",
      "Accelerated development speed by incorporating Tailwind, React Query, and Zustand.",
      "Successfully addressed and resolved major backend and frontend issues.",
      "Upgraded deprecated libraries, ensuring code integrity and future-proofing.",
      "worked on TypeORM with PostgreSQL on the backend.",
      "Technologies used: React, Tailwindcss, React Query, Zustand, TypeORM, PostgreSQL.",
    ]
  },
  {
    title: "Software Developer",
    company: "Redink.app",
    timeline: "Feb 2022 - Jun 2023",
    location: "Remote",
    compDescription: "Redink is a leading LMS platform for K-12 Schools",
    descriptions: [
      "Successfully developed Redink classroom v2 (Teacher and Admin roles), showcasing my ability to create effective and user-friendly modern website. (React ecosystem with tailwindcss)",
      "I proactively addressed critical bugs and introduced new features, resulting in 78 pull requests and showcasing my commitment to continuous improvement in our current web app.",
      "Implemented optimization strategies by reducing library dependencies, resulting in a remarkable 30% reduction in overall site load, demonstrating my ability to enhance performance and efficiency.",
      "Directly collaborated with founders and co-founders of my company as well as our clients companies, contributing to a dynamic and innovative work environment.",
      "Managed various client projects, highlighting my diverse expertise in delivering tailored solutions.",
      {
        title: "Notable works",
        listCls: "list-decimal marker:font-medium",
        points: [
          "Redink Classroom website - developed new website for our company in Nextjs. link - https://redink.app",
          "Upfunda website (previously known as YouthInYou) - developed in Nextjs. link - https://upfunda.academy",
          "Truseve website (home, /microsoft, /hardware pages alone) - developed in Nextjs. link - https://www.truseve.com",
          "Skillaura web platform (Admin and Student roles) - developed in Reactjs with firebase authentication. Except home page, other pages not mobile optimized. link - https://skillaura.com"
        ]
      },
      "Overall, I excelled as a single developer, proving my capacity to take ownership of projects and deliver high-quality results independently. Teck stack utilized - React ecosystem, Nextjs, Tailwindcss.",
    ]
  },
  {
    title: "MERN Stack Developer",
    company: "Teknuance Info Solutions",
    timeline: "Nov 2020 - Feb 2022",
    location: "Remote",
    compDescription: "Teknuance Info Solutions is a product and research-driven organization delivering innovative solutions to complex challenges across industries",
    descriptions: [
      {
        title: "Full Time",
        points: [
          "Designed and Developed Sabhae Bot which processed, analyzed and rendered dynamic complex data as simple user interface in individual components. ",
          "Worked closely with Natural Language Processing and Machine learning Teams, planned and designed the flow of the Bot. ",
          "Built extensive test coverage for all new features, optimized and enhanced various aspects of the Bot development. I worked in bot as a single person in web development side. (Used React and Sass.) ",
          "I created CSS library in sass for our team which increased our UI team work flow to 50 to 60 percentage. ",
          "I worked in Sabhae products especially in Meeting, Calendar, Chat apps. (Sabhae is an all-in-one collaboration tool that helps in online meetings, collaboration, and communication for teams)",
        ]
      },
      {
        title: "Internship",
        points: [
          "Worked in basic tasks like creating simple webpages using react and redux.",
          "Created Simple Chat application using MERN with Socket.io.",
        ]
      }
    ]
  }
]

export const projects: projT[] = [
  {
    title: "Trello clone",
    description: "Trello clone using MERN stack with redux. This project consists main features of Trello like user can create, update and delete the task cards and drag and drop the cards, etc. (not exact ui). Open it in larger screen like laptops for the full feature.",
    technologies: ["MERN Stack"],
    timeline: "Dec 2020 - Feb 2021",
    features: [],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/trello_clone",
      }
    ],
  },
  {
    title: "Instagram clone",
    description: "Developed with MERN Stack. This project has the main features of the Instagram like User can create, like, comment on a post, add friends’ zone, protect their account, etc. (not exact ui)",
    technologies: ["MERN Stack"],
    timeline: "Sep 2020 - Dec 2020",
    features: [],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/instagram-clone-v2",
      }
    ],
  },
  {
    title: "Landing page collections",
    description: `
      This project consists of my several landing pages I build at different time, and then combined to come under one domain(project).Currently It consists of three landing pages.They are,
        1) Netflix Landing Page
        2) Marquis Hotel Landing Page 
        3) Coinskite School Landing Page
      `,
    technologies: ["Html, Css"],
    timeline: "Aug 2020 - Nov 2020",
    features: [],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/Landing_page_collections",
      },
      {
        description: "Live",
        type: "live",
        url: "https://glrajkumar.github.io/Landing_page_collections"
      }
    ],
  },
  {
    title: "MERN and React (mini projects)",
    description: `
      This project consists of small (MERN) projects I build at different time, and then combined to come under one domain(project). They are,
        1) Netflix Landing Page Clone
        2) Weather Comparison Website 
        3) Simple Room Based Chat Website 
        4) Expense Tracker Website 
      `,
    technologies: ["MERN"],
    timeline: "",
    features: [],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/Mini_projects",
      }
    ],
  },
]

export const socials = [
  {
    product: "github",
    link: "https://github.com/glRajkumar"
  },
  {
    product: "x",
    link: "https://x.com/GlRajKumar01"
  },
  {
    product: "linkedin",
    link: "https://www.linkedin.com/in/glrajkumar"
  },
  {
    product: "email",
    link: "mailto:glrajv369@gmail.com"
  },
]
