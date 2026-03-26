import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="about">
      <style jsx>{`
        .about {
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
          position: relative;
        }

        .about-container {
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .about-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 0.2s;
        }

        .about-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-placeholder {
          width: 100%;
          max-width: 300px;
          height: 300px;
          background: var(--gradient-2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          margin: 0 auto;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .image-placeholder::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
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

        .about-text {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out 0.4s;
        }

        .about-text.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .highlight-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .highlight-card:nth-child(1) {
          animation-delay: 0.6s;
        }

        .highlight-card:nth-child(2) {
          animation-delay: 0.8s;
        }

        .highlight-card:nth-child(3) {
          animation-delay: 1s;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
          border-color: var(--accent-color);
        }

        .highlight-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .highlight-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .highlight-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-stats {
          display: flex;
          justify-content: space-around;
          margin: 3rem 0;
          padding: 2rem;
          background: var(--card-bg);
          border-radius: 15px;
          border: 1px solid var(--border-color);
        }

        .stat-item {
          text-align: center;
          opacity: 0;
          transform: scale(0.8);
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stat-item:nth-child(1) {
          animation-delay: 1.2s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 1.4s;
        }

        .stat-item:nth-child(3) {
          animation-delay: 1.6s;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-color);
          display: block;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .about-image {
            order: 2;
          }

          .about-text {
            order: 1;
          }

          .image-placeholder {
            margin: 0 auto;
          }

          .about-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .stat-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="about-container">
        {/* Header */}
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            Passionate developer focused on creating meaningful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Profile Image */}
          <div className={`about-image ${isVisible ? 'visible' : ''}`}>
            <div className="image-placeholder">
              👨‍💻
            </div>
          </div>

          {/* About Text */}
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <p className="about-description">
              I'm a Junior Software Developer with a strong passion for backend development and creating robust, scalable applications. 
              My journey in tech started with Python and Django, and I've been expanding my skills ever since.
            </p>
            
            <p className="about-description">
              During my SIWES internship, I gained valuable hands-on experience in networking, which sparked my interest in cybersecurity and ethical hacking. 
              I'm constantly learning and improving my problem-solving skills to tackle real-world challenges.
            </p>

            <p className="about-description">
              My goal is to build innovative applications that make a difference and work with clients globally to bring their ideas to life.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Year Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="about-highlights">
          <div className="highlight-card">
            <span className="highlight-icon">🐍</span>
            <h3 className="highlight-title">Django Development</h3>
            <p className="highlight-description">
              Building robust web applications using Django framework with clean, maintainable code and best practices.
            </p>
          </div>

          <div className="highlight-card">
            <span className="highlight-icon">🌐</span>
            <h3 className="highlight-title">Networking Experience</h3>
            <p className="highlight-description">
              Hands-on experience from SIWES internship in network configuration, troubleshooting, and security.
            </p>
          </div>

          <div className="highlight-card">
            <span className="highlight-icon">🔒</span>
            <h3 className="highlight-title">Cybersecurity Interest</h3>
            <p className="highlight-description">
              Exploring ethical hacking and security best practices to build more secure and resilient applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
