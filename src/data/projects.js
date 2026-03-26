// Projects data for portfolio
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Vite. Features smooth animations, dark theme, and fully responsive design. Includes sections for hero, about, skills, projects, and contact.",
    techStack: ["React", "Vite", "CSS", "JavaScript", "HTML"],
    githubLink: "https://github.com/balogunnathanael/portfolio",
    liveDemo: "https://balogunnathanael-portfolio.netlify.app",
    image: "🌐",
    featured: true,
    category: "Web Development"
  },
  {
    id: 2,
    title: "Patient Management System",
    description: "A comprehensive patient management system built with Django. Features include patient registration, appointment scheduling, medical records management, and administrative dashboard. Implements authentication and authorization.",
    techStack: ["Python", "Django", "PostgreSQL", "React", "REST API"],
    githubLink: "https://github.com/TheFallin1/Patient-Management-System-.git",
    liveDemo: "#",
    image: "🏥",
    featured: true,
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Internship Monitoring System",
    description: "An internship monitoring and tracking system for educational institutions. Allows students to submit weekly reports, supervisors to provide feedback, and administrators to monitor progress.",
    techStack: ["Python", "Django", "SQLite", "JavaScript", "jQuery"],
    githubLink: "https://github.com/TheFallin1/MTU-SIWES-MONITOR.git",
    liveDemo: "#",
    image: "📊",
    featured: false,
    category: "Web Application"
  },
  {
    id: 4,
    title: "Network Security Scanner",
    description: "A command-line network security scanner built with Python. Performs port scanning, service detection, and vulnerability assessment. Includes basic ethical hacking tools.",
    techStack: ["Python", "Socket Programming", "Nmap", "Security"],
    githubLink: "https://github.com/balogunnathanael/network-scanner",
    liveDemo: "#",
    image: "🔒",
    featured: false,
    category: "Cybersecurity"
  },
  {
    id: 5,
    title: "Task Management API",
    description: "RESTful API for task management with Django REST Framework. Includes CRUD operations, user authentication, pagination, and API documentation with Swagger.",
    techStack: ["Python", "Django REST Framework", "PostgreSQL", "JWT"],
    githubLink: "https://github.com/balogunnathanael/task-api",
    liveDemo: "#",
    image: "⚡",
    featured: false,
    category: "API Development"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts for multiple cities. Integrates with weather APIs and features data visualization with charts.",
    techStack: ["JavaScript", "HTML", "CSS", "Weather API", "Chart.js"],
    githubLink: "https://github.com/balogunnathanael/weather-dashboard",
    liveDemo: "https://balogunnathanael-weather.netlify.app",
    image: "🌤️",
    featured: false,
    category: "Frontend"
  }
]

// Categories for filtering
export const categories = [
  "All",
  "Web Development",
  "Web Application", 
  "Healthcare",
  "Cybersecurity",
  "API Development",
  "Frontend"
]
