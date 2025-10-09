
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

export type projT = {
  title: string
  description: string
  technologies: string[]
  features: string[]
  links: {
    description: string
    type: "github" | "live"
    url: string
  }[]
}

export const skills = [
  {
    title: "Frontend",
    list: [
      "React", "Next.js", "Zustand", "Tanstak Query", "React-router-dom",
      "TailwindCSS", "Shadcn UI", "SCSS", "React Hook Form", "Zod",
      "Typescript", "Vite", "Bootstrap", "React Three Fiber",
    ]
  },
  {
    title: "Backend",
    list: ["Hono.js", "Express.js", "Fastify", "Jsonwebtoken", "Bcrypt", "Cloudinary", "REST API"]
  },
  {
    title: "Database / ORM",
    list: ["MongoDb", "PostgreSQL", "Redis", "Mongoose", "Prisma", "Sequelize", "TypeORM", "Supabase"]
  },
  {
    title: "Mobile / Desktop",
    list: ["React Native", "Expo", "Electron.js", "RN Reanimated", "Nativewind"]
  },
]

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

export const liveProjects: projT[] = [
  {
    title: "SD Matrimony",
    description: "SD Matrimony is a live, real-world project developed to help my uncle take his matrimony business online.",
    technologies: ["Next.js", "Hono.js", "MongoDB (Mongoose)", "Redis", "Tailwindcss", "Typescript", "React-queyry", "Zustand", "Shadcn UI"],
    features: [
      "Role-based authentication (Super-Admin, Admin and User)",
      "Advanced user filtering by various criteria",
      "Paid users can unlock other user's personal details",
      "PhonePe integration for secure payments",
    ],
    links: [
      {
        description: "Frontend",
        type: "github",
        url: "https://github.com/glRajkumar/sdm-matrimony-frontend",
      },
      {
        description: "Backend",
        type: "github",
        url: "https://github.com/glRajkumar/sdm-matrimony-backend",
      },
      {
        description: "Website",
        type: "live",
        url: "https://sdmatrimony.com",
      },
    ]
  },
  {
    title: "R3F Practice",
    description: "Website to know about R3F(three.js). (under development)",
    technologies: ["Next.js", "Three.js", "React-three-fiber", "Tailwindcss", "Typescript", "Mdx", "Lil-GUI", "Shiki", "Shadcn UI"],
    features: [
      "Documentation for R3F(three.js) components",
      "Live example for each components with code samples",
      "Examples for seperate individual projects"
    ],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/threejs-r3f",
      }
    ]
  },
]

export const archievedProjects: projT[] = [
  {
    title: "Post-It",
    description: "Post-It is a simple social media website with Next.js (v13) app router.",
    technologies: ["Next.js", "PostgreDql (Prisma)", "Next-Auth", "React-query", "Tailwindcss", "Typescript"],
    features: [
      "User can create, edit, and delete posts",
      "Comment functionality on posts",
      "User authendication with google, github or credencials",
      "Infinite scroll - get more posts on scroll"
    ],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/fullstack-nextjs",
      }
    ]
  },
  {
    title: "Trello clone",
    description: "Trello clone project consists main features of Trello with minimal ui (not exact ui).",
    technologies: ["React", "Socket.io", "React-router-dom", "Redux", "Express", "MongoDB (Mongoose)"],
    features: [
      "User can create, update and delete Boards, Lists, and Cards",
      "Private, public and shared boards. Real time updates on shared board",
      "Activity logs - shows all changes and updates done by whom and when",
      "Drag and drop the cards from one list to other",
    ],
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
    description: "Instagram clone project has the main features of the Instagram with minimal ui (not exact ui).",
    technologies: ["React", "React-router-dom", "Redux", "Express", "MongoDB (Mongoose)"],
    features: [
      "User can create, edit, and delete posts",
      "Like and comment functionality on posts",
      "Request to follow private accounts and directly follow public accounts",
      "View followed user's friends and thier posts",
    ],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/instagram-clone-v2",
      }
    ],
  },
  {
    title: "Mini projects",
    description: "This project consists of small (MERN or Plain React) projects I build at different time, and then combined.",
    technologies: ["React", "React-router-dom", "Express", "MongoDB (Mongoose)"],
    features: [
      "Netflix Landing Page Clone",
      "Weather Comparison Website",
      "Simple Room Based Chat Website",
      "Expense Tracker Website"
    ],
    links: [
      {
        description: "Source code",
        type: "github",
        url: "https://github.com/glRajkumar/Mini_projects",
      }
    ],
  },
  {
    title: "Landing pages",
    description: "This project consists of my several landing pages I build at different time, and then combined.",
    technologies: ["Html", "Css"],
    features: [
      "Netflix Landing Page",
      "Marquis Hotel Landing Page",
      "Coinskite School Landing Page",
    ],
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
