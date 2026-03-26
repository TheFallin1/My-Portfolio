import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          z-index: -1;
        }

        .hero-content {
          max-width: 800px;
          z-index: 1;
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .hero-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.8;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }

        .hero-button {
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 2px solid transparent;
        }

        .hero-button-primary {
          background: var(--gradient-2);
          color: white;
        }

        .hero-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
        }

        .hero-button-secondary {
          background: transparent;
          color: var(--accent-color);
          border-color: var(--accent-color);
        }

        .hero-button-secondary:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1s forwards, bounce 2s infinite 2s;
        }

        .scroll-indicator-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .scroll-indicator-icon {
          font-size: 1.5rem;
          color: var(--accent-color);
          animation: bounce 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 0 15px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-button {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>

      <div className="hero-content">
        {/* Greeting */}
        <div className="hero-greeting">
          Hello, I'm
        </div>

        {/* Name */}
        <h1 className="hero-name">
          Balogun Nathanael
        </h1>

        {/* Title/Tagline */}
        <div className="hero-title">
          Python & Django Developer | Backend Enthusiast
        </div>

        {/* Description */}
        <p className="hero-description">
          Passionate junior software developer focused on building robust backend applications with Python and Django. 
          Currently expanding my skills in web development and cybersecurity to create impactful real-world solutions.
        </p>

        {/* Call-to-action buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="hero-button hero-button-primary">
            <span>🚀</span>
            View Projects
          </a>
          <a 
            href="#" 
            className="hero-button hero-button-secondary"
            onClick={(e) => {
              e.preventDefault()
              // Create a simple CV download functionality
              alert('CV download functionality would be implemented here. You could link to a PDF file or generate one dynamically.')
            }}
          >
            <span>📄</span>
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-text">Scroll down</div>
        <div className="scroll-indicator-icon">↓</div>
      </div>
    </section>
  )
}

export default Hero
