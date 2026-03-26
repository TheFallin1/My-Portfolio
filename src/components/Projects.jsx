import { useState, useEffect } from 'react'
import { projects, categories } from '../data/projects'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])

  const handleProjectClick = (project) => {
    if (project.liveDemo && project.liveDemo !== '#') {
      window.open(project.liveDemo, '_blank')
    } else if (project.githubLink) {
      window.open(project.githubLink, '_blank')
    }
  }

  return (
    <section id="projects" className="projects">
      <style jsx>{`
        .projects {
          background: linear-gradient(135deg, var(--secondary-bg) 0%, var(--primary-bg) 100%);
          position: relative;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .projects-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .projects-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out 0.2s;
        }

        .projects-filters.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-btn {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }

        .filter-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--accent-color);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--gradient-2);
          color: white;
          border-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
          position: relative;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(59, 130, 246, 0.3);
          border-color: var(--accent-color);
        }

        .project-card.featured {
          border-color: var(--accent-color);
        }

        .project-card.featured::before {
          content: '⭐ Featured';
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--gradient-2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 1;
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          position: relative;
          overflow: hidden;
        }

        .project-image::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-category {
          font-size: 0.8rem;
          color: var(--accent-color);
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .project-link-primary {
          background: var(--gradient-2);
          color: white;
        }

        .project-link-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .project-link-secondary {
          background: transparent;
          color: var(--accent-color);
          border: 1px solid var(--accent-color);
        }

        .project-link-secondary:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-2px);
        }

        .project-link.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .no-projects {
          text-align: center;
          padding: 3rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-links {
            flex-direction: column;
          }

          .filter-btn {
            font-size: 0.8rem;
            padding: 0.4rem 1rem;
          }
        }
      `}</style>

      <div className="projects-container">
        {/* Header */}
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Explore my recent work and personal projects showcasing my skills and expertise
          </p>
        </div>

        {/* Category Filters */}
        <div className={`projects-filters ${isVisible ? 'visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''} ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 * index}s` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="project-image">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="project-content">
                  {/* Category */}
                  <div className="project-category">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="project-tech">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      className="project-link project-link-secondary"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubLink, '_blank')
                      }}
                    >
                      <span>📚</span>
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      className={`project-link project-link-primary ${project.liveDemo === '#' ? 'disabled' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (project.liveDemo !== '#') {
                          window.open(project.liveDemo, '_blank')
                        } else {
                          e.preventDefault()
                        }
                      }}
                    >
                      <span>🚀</span>
                      {project.liveDemo === '#' ? 'Demo N/A' : 'Live Demo'}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
