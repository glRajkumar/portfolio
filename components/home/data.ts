
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

export const experiences = [
  {
    title: "Senior Product Engineer",
    company: "HaiVE",
    timeline: "Feb 2024 - Jun 2025",
    location: "Hybrid - Chennai",
    compDescription: "HaiVE is an AI-first SaaS company focused on research and developing innovative AI-driven products. I was **responsible for end-to-end UI development** across web, mobile, and desktop platforms using React as the core technology. **Contributed to 15+ projects from scratch**, out of which two evolved into major products: Speakup and Nidum.AI.",
    descriptions: [
      `
###### 1. Speakup (Agent Studio)

Speakup is an AI Agent Studio platform that automates B2B customer interactions using AI-driven voice and chat assistants - positioned as a direct competitor to vapi.ai and bland.ai. It offers customizable AI workflows, multi-channel communication (voice and chat), and seamless third-party integrations.

- Developed the entire product from scratch on the frontend (**Next.js and Hono.js**), supporting features such as inbound/outbound phone call agents, intelligent chatbots, and customizable AI workflows tailored for enterprise clients.
- Integrated third-party platforms like **Zendesk and Zoho Cliq via webhooks** to enable seamless communication between AI agents and external systems.
- **Led** the development and maintenance of the **frontend, backend** services (auth and user data), and chatbot functionality, ensuring a scalable and reliable experience across use cases.
- **Implemented a user-friendly interface** for creating and managing AI agents, linking them to mobile numbers, deploying them for various interaction scenarios and customizing their behavior and chatbot interfaces.
- Technologies used: Next.js, Hono.js, Tailwind CSS, Zustand, React Query.
`,

      `
###### 2. Nidum.AI (Vibe Studio)

Nidum.AI is transforming the AI landscape by building a decentralized ecosystem that allows anyone to contribute computing power and earn rewards. Currently being acquired by BitsCrunch, a leading AI + Blockchain company in the crypto space.

- **Spearheaded the UI development** of a decentralized AI ecosystem from the ground up, enabling users to access and interact with multiple AI models from providers like **OpenAI, Claude, Groq**, and others - all under one platform.
- Built and maintained **web (React), mobile (React Native + Expo), and desktop (Electron)** applications to ensure seamless cross-platform access.
- Designed and implemented a **high-performance, scalable ChatGPT-like UI/UX** tailored for real-time AI interactions.
- Website features: Chat with AI models, image uploads, and voice activity detection (VAD) support.
- Mobile app features: Chat with AI models, use local AI models, and upload images.
- Desktop app features: All web features, plus local model loading, document-based chat, and the ability for users to share their computation power by exposing models for use by others.
- Technologies used: React, React Native + Expo, Electron, Tailwind CSS, Zustand, React Query.
`,
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Datalligence AI",
    timeline: "Jul 2023 - Feb 2024",
    location: "In-Office - Chennai",
    compDescription: "Datalligence is an OKR and performance management platform built to drive team alignment, boost productivity, and accelerate execution within organizations.",
    descriptions: [
      `
- **Revamped OKR module UI** with a sleek design, enhancing both user and developer experience.
- Overhauled UI logics for a more intuitive and seamless interface using **Ant Design systems** with Tailwind CSS.
- **Accelerated development speed** by incorporating Tailwind CSS, React Query, and Zustand.
- Successfully addressed and **resolved** major frontend and backend **issues**.
- **Upgraded deprecated libraries**, ensuring code integrity and future proofing.
- Worked on TypeORM with PostgreSQL on the backend.
- Technologies used: React, Tailwind CSS, React Query, Zustand, TypeORM, PostgreSQL.`
    ]
  },
  {
    title: "Software Developer",
    company: "Redink.app",
    timeline: "Feb 2022 - Jun 2023",
    location: "Remote",
    compDescription: "Redink is a leading LMS platform for K-12 schools.",
    descriptions: [
      `
- Successfully developed **Redink Classroom v2** (Teacher and Admin roles), showcasing my ability to create effective and user-friendly modern web applications using React and Tailwind CSS.
- Proactively **addressed critical bugs** and introduced new features, resulting in **78 pull requests**, demonstrating my commitment to continuous improvement.
- Implemented **optimization strategies** by reducing library dependencies, achieving a **30% reduction** in overall site load time.
- Directly collaborated with founders and clients, contributing to a dynamic and innovative work environment.
- Managed various client projects, highlighting my expertise in delivering tailored solutions.
- Excelled as a **solo developer**, taking full ownership and delivering **high-quality results** independently.
- Notable Works:
  1. **Redink Classroom** website - built in Next.js. [Website](https://redink.app)
  2. **Upfunda** website (previously YouthInYou) - built in Next.js. [Website](https://upfunda.academy)
  3. **Truseve** website (home, /microsoft, /hardware pages) - built in Next.js. [Website](https://www.truseve.com)
  4. **Skillaura** platform (Admin and Student roles) - built in React.js with Firebase authentication. [Website](https://skillaura.com)
- Technologies used: React, Next.js, Tailwind CSS.`
    ]
  },
  {
    title: "MERN Stack Developer",
    company: "Teknuance Info Solutions",
    timeline: "Nov 2020 - Feb 2022",
    location: "Remote",
    compDescription: "Teknuance Info Solutions is a product and research-driven organization delivering innovative solutions to complex challenges across industries. Worked on Sabhae products which is an all-in-one collaboration tool for online meetings and team communication and collabration - positioned as a direct competitor to Microsoft's Teams products.",
    descriptions: [
      `
###### Full Time

- Designed and developed Sabhae Bot, which processed, analyzed and **rendered complex data dynamically into simple UI components**.
- **Collaborated with NLP and Machine Learning teams** to plan and design the bot workflow.
- Built extensive test coverage for all new features and optimized several aspects of bot development using React and Sass.
- **Created a custom CSS library in Sass** for the UI team, improving **workflow efficiency by 50-60%**.
- Contributed to Sabhae products such as Meeting, Calendar, and Chat apps.

###### Internship

- Worked on basic tasks such as creating simple webpages using React and Redux.
- Built a simple chat application using the MERN stack with Socket.io for **real-time messaging**.`
    ]
  }
];


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
      "User authentication with google, github or credentials",
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
    description: "Trello clone project consists main features of Trello with minimal ui.",
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
    description: "Instagram clone project has the main features of the Instagram with minimal ui.",
    technologies: ["React", "React-router-dom", "Express", "MongoDB (Mongoose)"],
    features: [
      "User can create, edit, and delete posts",
      "Like and comment functionality on posts",
      "Request to follow private accounts and directly follow public accounts",
      "View followed user's friends and their posts",
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
    description: "This project consists of small (MERN or Plain React) projects I build at different time and then combined.",
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
    description: "This project consists of my several landing pages I build at different time and then combined.",
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
