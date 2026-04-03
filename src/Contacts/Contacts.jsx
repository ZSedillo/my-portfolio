import React, { useState, useEffect } from "react";

const FloatingInput = ({ label, type, name, value, onChange, onBlur }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative", marginBottom: "1.25rem" }}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        style={{
          width: "100%",
          padding: "1.1rem 0.75rem 0.5rem",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          fontSize: "0.95rem",
          outline: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          color: "#f1f5f9",
          fontFamily: "'Inter', sans-serif",
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.target.style.borderColor = "#3b82f6";
          e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
          e.target.style.boxShadow = "none";
          if (onBlur) onBlur(e);
        }}
      />
      <label
        style={{
          position: "absolute",
          left: "12px",
          top: isFocused || value ? "-8px" : "50%",
          transform: isFocused || value ? "none" : "translateY(-50%)",
          fontSize: isFocused || value ? "0.7rem" : "0.95rem",
          color: isFocused ? "#3b82f6" : "#64748b",
          pointerEvents: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: isFocused || value ? "#0d0d14" : "transparent",
          padding: "0 6px",
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
};

const Contacts = () => {
  const [formData, setFormData] = useState({ subject: "", email: "", message: "" });
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmall = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('Contacts');
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return { isValid: false, message: 'Email is required' };
    if (!emailRegex.test(email)) return { isValid: false, message: 'Please enter a valid email address' };
    return { isValid: true, message: '' };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email' && emailTouched && value.length > 0) {
      const validation = validateEmail(value);
      setEmailError(validation.isValid ? '' : validation.message);
    } else if (name === 'email' && value.length === 0) {
      setEmailError('');
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (formData.email.length > 0) {
      const validation = validateEmail(formData.email);
      setEmailError(validation.isValid ? '' : validation.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.message);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'a0376732-b681-486f-9884-5cee5fddcf28');
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: formDataToSend
      });
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ subject: '', email: '', message: '' });
        setEmailError('');
        setEmailTouched(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "Email",
      info: "sedillozandro720@gmail.com"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Phone",
      info: "(63+) 09770311641"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      info: "zandro-sedillo",
      link: "https://www.linkedin.com/in/zandro-miguel-sedillo-1bbb52279/"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#6366f1">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      info: "ZSedillo",
      link: "https://github.com/ZSedillo"
    }
  ];

  return (
    <section id="Contacts" style={{
      padding: isMobile ? '80px 20px' : '120px 32px',
      background: '#0a0a0f',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '500px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
        filter: 'blur(80px)', zIndex: 0
      }} />

      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        position: 'relative', zIndex: 1
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: '64px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            padding: '6px 14px', borderRadius: '50px',
            fontSize: '13px', fontWeight: 500, color: '#3b82f6',
            marginBottom: '20px',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            fontFamily: "'Inter', sans-serif"
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: '#22c55e', animation: 'pulse 2s infinite'
            }} />
            Let's Connect
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: isSmall ? '32px' : isMobile ? '40px' : '52px',
            fontWeight: 700, color: '#f1f5f9',
            letterSpacing: '-0.02em', marginBottom: '12px'
          }}>
            Contact
          </h2>

          <p style={{
            color: '#64748b', fontSize: '16px',
            fontFamily: "'Inter', sans-serif",
            maxWidth: '500px', margin: '0 auto 16px'
          }}>
            Got a vision? Let's bring it to life!
          </p>

          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            margin: '0 auto', borderRadius: '2px'
          }} />
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '40px', alignItems: 'start'
        }}>
          {/* Contact Cards */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '20px', fontWeight: 700,
              color: '#f1f5f9', marginBottom: '24px'
            }}>
              Get in Touch
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '14px'
            }}>
              {contactOptions.map((contact, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '20px 16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: contact.link ? 'pointer' : 'default'
                  }}
                  onClick={() => contact.link && window.open(contact.link, '_blank')}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.04)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}>
                    {contact.icon}
                  </div>
                  <h4 style={{
                    fontSize: '14px', fontWeight: 600,
                    color: '#f1f5f9', marginBottom: '4px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {contact.title}
                  </h4>
                  <p style={{
                    fontSize: '12px', color: '#64748b',
                    fontFamily: "'Inter', sans-serif",
                    margin: 0, wordBreak: 'break-all'
                  }}>
                    {contact.info}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: isSmall ? '28px 20px' : '36px 28px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.3s'
          }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '20px', fontWeight: 700,
              color: '#f1f5f9', marginBottom: '24px',
              textAlign: 'center'
            }}>
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                color: '#22c55e',
                padding: '12px 16px', borderRadius: '10px',
                marginBottom: '1.25rem', textAlign: 'center',
                fontSize: '14px', fontFamily: "'Inter', sans-serif"
              }}>
                ✅ Message sent successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#ef4444',
                padding: '12px 16px', borderRadius: '10px',
                marginBottom: '1.25rem', textAlign: 'center',
                fontSize: '14px', fontFamily: "'Inter', sans-serif"
              }}>
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <div>
              <FloatingInput label="Subject" type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
              <FloatingInput label="Your Email" type="email" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleEmailBlur} />

              {emailError && (
                <div style={{
                  color: '#ef4444', fontSize: '0.8rem',
                  marginTop: '-0.75rem', marginBottom: '0.75rem',
                  paddingLeft: '12px', fontFamily: "'Inter', sans-serif",
                  display: 'flex', alignItems: 'center', gap: '6px'
                }}>
                  <span>⚠️</span>{emailError}
                </div>
              )}

              {/* Textarea */}
              <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setIsMessageFocused(true)}
                  onBlur={() => setIsMessageFocused(false)}
                  style={{
                    width: "100%",
                    padding: "1.1rem 0.75rem 0.5rem",
                    border: `1px solid ${isMessageFocused ? '#3b82f6' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    minHeight: "120px",
                    outline: "none",
                    transition: "all 0.3s",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    color: "#f1f5f9",
                    fontFamily: "'Inter', sans-serif",
                    resize: 'vertical',
                    boxShadow: isMessageFocused ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none'
                  }}
                />
                <label style={{
                  position: "absolute", left: "12px",
                  top: isMessageFocused || formData.message ? "-8px" : "16px",
                  fontSize: isMessageFocused || formData.message ? "0.7rem" : "0.95rem",
                  color: isMessageFocused ? "#3b82f6" : "#64748b",
                  pointerEvents: "none",
                  transition: "all 0.3s",
                  backgroundColor: isMessageFocused || formData.message ? "#0d0d14" : "transparent",
                  padding: "0 6px", fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Your Message
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.subject || !formData.email || !formData.message || emailError}
                style={{
                  width: "100%", padding: "14px",
                  background: (isSubmitting || !formData.subject || !formData.email || !formData.message || emailError)
                    ? 'rgba(255, 255, 255, 0.1)'
                    : isSubmitHovered
                      ? 'linear-gradient(135deg, #2563eb, #4f46e5)'
                      : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  color: "#ffffff", border: "none",
                  borderRadius: "12px", fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: (isSubmitting || !formData.subject || !formData.email || !formData.message || emailError)
                    ? 'not-allowed' : 'pointer',
                  transition: "all 0.3s",
                  boxShadow: isSubmitHovered && !isSubmitting
                    ? '0 12px 30px rgba(59, 130, 246, 0.35)'
                    : '0 6px 20px rgba(59, 130, 246, 0.2)',
                  transform: isSubmitHovered && !isSubmitting ? 'translateY(-2px)' : 'translateY(0)',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={() => setIsSubmitHovered(true)}
                onMouseLeave={() => setIsSubmitHovered(false)}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;