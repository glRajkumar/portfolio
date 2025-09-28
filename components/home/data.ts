
type eduT = {
  course: string
  institution: string
  timeline: string
}

type descT = string | {
  title: string
  description: string
  points: string[]
}

type expT = {
  title: string
  company: string
  timeline: string
  location: string
  descriptions: descT[]
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

type dataT = {
  educations: eduT[]
  experiences: expT[]
  projects: projT[]
}

const data: dataT = {
  educations: [
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
  ],
  experiences: [
    {
      title: "Senior Product Engineer",
      company: "HaiVE",
      timeline: "Feb 2024 - Jun 2025",
      location: "Hybrid - Chennai, Tamil Nadu, India",
      descriptions: [
        {
          title: "HaiVE (Speakup)",
          description: "",
          points: [
            "Built an AI Agent Studio platform for automating B2B customer interactions using AI-powered voice and chat assistants — positioned as a direct competitor to vapi.ai and bland.ai.",
            "Developed the entire product from scratch on the frontend (NextJs and HonoJs), supporting features such as inbound/outbound phone call agents, intelligent chatbots, and customizable AI workflows tailored for enterprise clients.",
            "Integrated third-party platforms like Zendesk and Zoho Cliq via webhooks to enable seamless communication between AI agents and external systems.",
            "Led the development and maintenance of the web frontend, backend services (auth and user data), and chatbot functionality, ensuring a scalable and reliable experience across use cases.",
          ]
        },
        {
          title: "Nidum.AI",
          description: "",
          points: [
            "Spearheaded the UI development of a decentralized AI ecosystem from the ground up, enabling users to access and interact with multiple AI models from providers like OpenAI, Claude, Groq, and others—all under one platform.",
            "Built and maintained web (React), mobile (React Native + Expo), and desktop (Electron) applications to ensure seamless cross-platform access.",
            "Designed and implemented a high-performance, scalable ChatGPT-like UI/UX tailored for real-time AI interactions.",
            "Website features: Chat with various AI models, image uploads, and voice activity detection (VAD) support.",
            "Mobile app features: Chat with AI models, use local AI models, and upload images.",
            "Desktop app features: All web features, plus local model loading, document-based chat, and the ability for users to share their computation power by exposing models for use by others.",
          ]
        }
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Datalligence AI",
      timeline: "Jul 2023 - Feb 2024",
      location: "Chennai, Tamil Nadu, India",
      descriptions: [
        "Revamped OKR module UI with a sleek desig+n, enhancing user experience as well as developer experience.",
        "Overhauled UI logics for a more intuitive and seamless interface with Antd design systems with Tailwindcss.",
        "Accelerated development speed by incorporating Tailwind, React Query, and Zustand.",
        "Successfully addressed and resolved major backend and frontend issues.",
        "Upgraded deprecated libraries, ensuring code integrity and future-proofing.",
        "worked on TypeORM with PostgreSQL on the backend.",
      ]
    },
    {
      title: "Software Developer",
      company: "Redink.app",
      timeline: "Feb 2022 - Jun 2023",
      location: "Remote",
      descriptions: [
        "Successfully developed Redink classroom v2 (Teacher and Admin roles), showcasing my ability to create effective and user-friendly modern website. (React ecosystem with tailwindcss)",
        "I proactively addressed critical bugs and introduced new features, resulting in 78 pull requests and showcasing my commitment to continuous improvement in our current web app.",
        "Implemented optimization strategies by reducing library dependencies, resulting in a remarkable 30% reduction in overall site load, demonstrating my ability to enhance performance and efficiency.",
        "Directly collaborated with founders and co-founders of my company as well as our clients companies, contributing to a dynamic and innovative work environment.",
        "Managed various client projects, highlighting my diverse expertise in delivering tailored solutions.",
        {
          title: "Notable works",
          description: "",
          points: [
            "1) Redink Classroom website - developed new website for our company in Nextjs. link - https://redink.app",
            "2) Upfunda website (previously known as YouthInYou) - developed in Nextjs. link - https://upfunda.academy",
            "3) Truseve website (home, /microsoft, /hardware pages alone) - developed in Nextjs. link - https://www.truseve.com",
            "4) Skillaura web platform (Admin and Student roles) - developed in Reactjs with firebase authentication. Except home page, other pages not mobile optimized. link - https://skillaura.com"
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
      descriptions: [
        {
          title: "Full Time",
          description: "",
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
          description: "",
          points: [
            "Worked in basic tasks like creating simple webpages using react and redux.",
            "Created Simple Chat application using MERN with Socket.io.",
          ]
        }
      ]
    }
  ],
  projects: [
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
}

export default data
