export const projectsData = [
  {
    id: 1,
    featured: true,
    title: "Customer Support Ticket System",
    description:
      "A full-stack customer support platform that enables users to create, manage, and track support tickets through a role-based workflow. Built with a focus on scalability, maintainability, and real-world support operations.",
    technologies: ["React", "Node.js", "MongoDB", "React Query", "JWT"],
    githubUrl: "https://github.com/viplavg/Customer-Support-Ticket-System",
    liveUrl: "",
  },

  {
    id: 2,
    featured: true,
    title: "Shift Swap Management System",
    description:
      "A full-stack shift management platform that enables employees to request shift swaps while managers review, approve, or reject requests through a secure workflow. Features role-based authentication, authorization, audit logging, and a complete approval lifecycle designed for real-world workforce management.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Role-Based Access Control",
    ],
    githubUrl: "https://github.com/viplavg/Swap_Service",
    liveUrl: "https://shiftswap-ui.vercel.app",
    demoNote:
      "The backend is deployed on Render's free tier. The initial request after inactivity may take up to 30–60 seconds while the service starts. Subsequent requests respond normally.",
  },

  {
    id: 3,
    featured: false,
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with React featuring reusable components, theme switching, responsive design, and a scalable architecture for showcasing projects and professional experience.",
    technologies: ["React", "Context API", "CSS", "Vite"],
    githubUrl: "",
    liveUrl: "",
  },
];
