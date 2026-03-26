import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS - Replace these with your actual EmailJS credentials
const EMAILJS_PUBLIC_KEY = 'demo_public_key' // Replace with your EmailJS public key
const EMAILJS_SERVICE_ID = 'demo_service' // Replace with your EmailJS service ID  
const EMAILJS_TEMPLATE_ID = 'demo_template' // Replace with your EmailJS template ID

emailjs.init(EMAILJS_PUBLIC_KEY)

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'balogunmotolani16@gmail.com' // Your email where messages will be sent
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      
      // Check if it's an EmailJS configuration error
      if (error.text && error.text.includes('public key')) {
        setSubmitStatus('error-config')
      } else if (error.text && error.text.includes('service')) {
        setSubmitStatus('error-service')
      } else {
        setSubmitStatus('error')
      }
      
      setTimeout(() => setSubmitStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'balogunmotolani16@gmail.com',
      action: 'mailto:balogunmotolani16@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone/WhatsApp',
      value: '+2349014580163',
      action: 'tel:+2349014580163'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Available for remote work globally',
      action: null
    }
  ]

  return (
    <section id="contact" className="contact">
      <style jsx>{`
        .contact {
          background: var(--primary-bg);
          position: relative;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .contact-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 0.2s;
        }

        .contact-info.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-form-wrapper {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out 0.4s;
        }

        .contact-form-wrapper.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-info-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .contact-info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .contact-info-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateX(5px);
        }

        .contact-info-icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          flex-shrink: 0;
        }

        .contact-info-details {
          flex: 1;
        }

        .contact-info-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .contact-info-value {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .contact-info-link {
          color: var(--accent-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info-link:hover {
          color: var(--accent-hover);
        }

        .contact-form {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-label .required {
          color: var(--accent-color);
          margin-left: 0.25rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 1rem 2rem;
          background: var(--gradient-2);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-submit.loading {
          color: transparent;
        }

        .form-submit.loading::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .form-message {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-align: center;
          font-size: 0.9rem;
          animation: fadeInUp 0.3s ease-out;
        }

        .form-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success-color);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            order: 2;
          }

          .contact-form-wrapper {
            order: 1;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .contact-info-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="contact-container">
        {/* Header */}
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out if you'd like to collaborate on a project or just have a chat!
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-description">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Contact Items */}
              <div className="contact-info-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">
                      {item.icon}
                    </div>
                    <div className="contact-info-details">
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">
                        {item.action ? (
                          <a 
                            href={item.action} 
                            className="contact-info-link"
                            onClick={(e) => {
                              if (item.action.startsWith('mailto:') || item.action.startsWith('tel:')) {
                                // Allow default behavior for email and phone links
                                return
                              }
                              e.preventDefault()
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a 
                  href="https://github.com/balogunnathanael" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📚
                </a>
                <a 
                  href="https://linkedin.com/in/balogunnathanael" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼
                </a>
                <a 
                  href="https://twitter.com/balogunnathanael" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`form-submit ${isSubmitting ? 'loading' : ''}`}
              >
                {isSubmitting ? '' : 'Send Message'}
              </button>

              {/* Status Message */}
              {submitStatus && (
                <div className={`form-message ${submitStatus}`}>
                  {submitStatus === 'success' 
                    ? '✅ Message sent successfully! I\'ll get back to you soon.'
                    : submitStatus === 'error-config'
                    ? '⚙️ EmailJS not configured. Please check EMAILJS_SETUP.md for instructions.'
                    : submitStatus === 'error-service'
                    ? '📧 Email service not configured. Please check EmailJS dashboard.'
                    : '❌ Something went wrong. Please try again.'
                  }
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
