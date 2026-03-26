import { useEffect, useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills')
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    {
      name: 'Python',
      icon: '🐍',
      level: 85,
      category: 'Programming',
      description: 'Core programming language for backend development'
    },
    {
      name: 'Django',
      icon: '🌐',
      level: 80,
      category: 'Framework',
      description: 'Web framework for building robust applications'
    },
    {
      name: 'HTML',
      icon: '📝',
      level: 90,
      category: 'Frontend',
      description: 'Markup language for web structure'
    },
    {
      name: 'CSS',
      icon: '🎨',
      level: 85,
      category: 'Frontend',
      description: 'Styling language for web design'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      level: 75,
      category: 'Frontend',
      description: 'Programming language for web interactivity'
    },
    {
      name: 'Git & GitHub',
      icon: '📚',
      level: 80,
      category: 'Tools',
      description: 'Version control and collaboration platform'
    },
    {
      name: 'Networking Basics',
      icon: '🌍',
      level: 70,
      category: 'Infrastructure',
      description: 'Network configuration and troubleshooting'
    },
    {
      name: 'Cybersecurity',
      icon: '🔒',
      level: 60,
      category: 'Security',
      description: 'Security principles and ethical hacking basics'
    }
  ]

  return (
    <section id="skills" className="skills">
      <style jsx>{`
        .skills {
          background: var(--primary-bg);
          position: relative;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .skills-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .skill-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          position: relative;
          overflow: hidden;
        }

        .skill-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.25);
          border-color: var(--accent-color);
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-2);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .skill-category {
          font-size: 0.85rem;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .skill-level {
          margin-top: 1rem;
        }

        .skill-level-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-level-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .skill-level-percentage {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-color);
        }

        .skill-progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress-fill {
          height: 100%;
          background: var(--gradient-2);
          border-radius: 4px;
          width: 0;
          transition: width 1.5s ease-out;
          position: relative;
          overflow: hidden;
        }

        .skill-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skills-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out 0.2s;
        }

        .skills-categories.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .category-badge {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-badge:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .skill-icon {
            width: 50px;
            height: 50px;
            font-size: 2rem;
          }

          .skill-name {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="skills-container">
        {/* Header */}
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="skills-title">Skills & Expertise</h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Categories */}
        <div className={`skills-categories ${isVisible ? 'visible' : ''}`}>
          <div className="category-badge">Programming</div>
          <div className="category-badge">Framework</div>
          <div className="category-badge">Frontend</div>
          <div className="category-badge">Tools</div>
          <div className="category-badge">Infrastructure</div>
          <div className="category-badge">Security</div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`skill-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              {/* Skill Header */}
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-category">{skill.category}</div>
                </div>
              </div>

              {/* Skill Description */}
              <p className="skill-description">
                {skill.description}
              </p>

              {/* Skill Level */}
              <div className="skill-level">
                <div className="skill-level-header">
                  <span className="skill-level-text">Proficiency</span>
                  <span className="skill-level-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className={`skill-progress-fill ${isVisible ? 'visible' : ''}`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${0.1 * index + 0.5}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
