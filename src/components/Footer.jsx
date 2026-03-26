import { useState } from 'react'

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear())

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '📚',
      url: 'https://github.com/balogunnathanael'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/balogunnathanael'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/balogunnathanael'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:balogunnathanael@example.com'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--secondary-bg) 0%, var(--primary-bg) 100%);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 2rem;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gradient-2);
        }

        .footer-container {
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .footer-description {
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 400px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: var(--accent-color);
          transform: translateX(5px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-copyright span {
          color: var(--accent-color);
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-bottom-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: var(--accent-color);
        }

        .footer-heart {
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .footer-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-top: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-brand {
            align-items: center;
          }

          .footer-section {
            align-items: center;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Balogun Nathanael
            </a>
            <p className="footer-description">
              Junior Software Developer passionate about building robust backend applications 
              and exploring the world of cybersecurity. Always eager to learn and take on new challenges.
            </p>
            <div className="footer-badge">
              Available for hire
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} <span>Balogun Nathanael</span>. All rights reserved. Made with <span className="footer-heart">❤️</span> and lots of ☕
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
