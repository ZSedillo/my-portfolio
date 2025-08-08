import React, { useState, useEffect } from "react";

const FloatingInput = ({ label, type, name, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative", marginBottom: "1.5rem" }}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        style={{
          width: "100%",
          padding: "1.25rem 0.75rem 0.5rem",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          fontSize: "1rem",
          outline: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#ffffff",
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.target.style.borderColor = "#667eea";
          e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.target.style.borderColor = "#e2e8f0";
          e.target.style.boxShadow = "none";
        }}
      />
      <label
        style={{
          position: "absolute",
          left: "12px",
          top: isFocused || value ? "-8px" : "50%",
          transform: isFocused || value ? "none" : "translateY(-50%)",
          fontSize: isFocused || value ? "0.75rem" : "1rem",
          color: isFocused || value ? "#667eea" : "#64748b",
          pointerEvents: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#ffffff",
          padding: "0 8px",
          fontWeight: 500,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {label}
      </label>
    </div>
  );
};

// Custom hook for media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQueryList.matches);
    
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

const Contacts = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  // Enhanced responsive breakpoints
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const isMediumScreen = useMediaQuery('(max-width: 1024px)');
  const isProblemSize = useMediaQuery('(max-width: 1000px)');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'a0376732-b681-486f-9884-5cee5fddcf28');
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ subject: '', email: '', message: '' });
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

  // Icon placeholders since we can't access your image assets
  const IconPlaceholder = ({ type }) => {
    const icons = {
      mail: '✉️',
      phone: '📱',
      linkedin: '💼',
      github: '⚡'
    };
    
    return (
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        margin: '0 auto 16px auto',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
      }}>
        <span style={{ color: 'white' }}>{icons[type]}</span>
      </div>
    );
  };

  const contactOptions = [
    { type: "mail", title: "Email Address", info: "sedillozandro720@gmail.com" },
    { type: "phone", title: "Phone Number", info: "(63+) 09770311641" },
    {
      type: "linkedin",
      title: "LinkedIn",
      info: "linkedin.com/in/zandro-sedillo",
      link: "https://www.linkedin.com/in/zandro-miguel-sedillo-1bbb52279/",
    },
    { type: "github", title: "GitHub", info: "github.com/ZSedillo", link: "https://github.com/ZSedillo" },
  ];

  return (
    <div style={{ 
      maxWidth: "1400px", 
      margin: "0 auto", 
      padding: isSmallScreen ? "3rem 1rem" : "5rem 2rem",
      position: 'relative',
      overflow: 'hidden'
    }} id="Contacts">
      
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: isSmallScreen ? '150px' : '250px',
        height: isSmallScreen ? '150px' : '250px',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: isSmallScreen ? '120px' : '200px',
        height: isSmallScreen ? '120px' : '200px',
        background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      {/* Heading */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: isSmallScreen ? "3rem" : "4rem",
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#f1f5f9',
          padding: isSmallScreen ? '6px 12px' : '8px 16px',
          borderRadius: '50px',
          fontSize: isSmallScreen ? '12px' : '14px',
          fontWeight: 500,
          color: '#475569',
          marginBottom: isSmallScreen ? '20px' : '32px',
          border: '1px solid #e2e8f0',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          <span style={{ fontSize: isSmallScreen ? '14px' : '16px' }}>📧</span>
          Let's Connect
        </div>

        <h2 style={{ 
          fontSize: isSmallScreen ? "2rem" : isMediumScreen ? "2.5rem" : "3rem",
          fontWeight: 800,
          marginBottom: "1rem",
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          letterSpacing: '-0.02em'
        }}>
          Contact
        </h2>
        
        <p style={{ 
          fontSize: isSmallScreen ? "1.1rem" : "1.25rem",
          color: "#334155",
          maxWidth: "600px",
          margin: "0 auto 16px",
          fontWeight: 600,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          Got a Vision? Let's Bring it to Life!
        </p>
        
        <p style={{ 
          fontSize: isSmallScreen ? "1rem" : "1.1rem",
          color: "#64748b",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.6,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          Get in touch in the way that suits you best, and we'll explore your project in depth.
        </p>
      </div>

      {/* Responsive Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen || isProblemSize ? "1fr" : "1fr 1fr",
          gap: isSmallScreen ? "2.5rem" : "4rem",
          alignItems: "start",
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Contact Cards */}
        <div>
          <h3 style={{
            fontSize: isSmallScreen ? "1.25rem" : "1.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "#0f172a",
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          }}>
            Get in Touch
          </h3>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isSmallScreen ? "1fr" : 
                                 isProblemSize ? "1fr 1fr" :
                                 "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {contactOptions.map((contact, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: "16px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: '1px solid #f1f5f9',
                  textAlign: "center",
                  padding: isSmallScreen ? "1.5rem" : isProblemSize ? "1.25rem" : "2rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: isProblemSize ? '120px' : '140px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.15)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  e.currentTarget.style.borderColor = "#f1f5f9";
                }}
              >
                <IconPlaceholder type={contact.type} />
                <h4 style={{ 
                  fontSize: isProblemSize ? "0.9rem" : "1rem",
                  fontWeight: 600,
                  marginBottom: "8px",
                  color: "#0f172a",
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: 1.2
                }}>
                  {contact.title}
                </h4>
                {contact.link ? (
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: "#667eea",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: isProblemSize ? '0.75rem' : '0.85rem',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                      transition: 'color 0.2s ease',
                      textAlign: 'center',
                      lineHeight: 1.3,
                      display: 'block',
                      wordBreak: 'break-all',
                      hyphens: 'auto'
                    }}
                    onMouseOver={e => e.target.style.color = "#5a67d8"}
                    onMouseOut={e => e.target.style.color = "#667eea"}
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p style={{ 
                    color: "#64748b",
                    fontSize: isProblemSize ? '0.75rem' : '0.85rem',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.3,
                    textAlign: 'center',
                    wordBreak: contact.type === 'mail' ? 'break-all' : 'normal',
                    hyphens: 'auto'
                  }}>
                    {contact.info}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form - WORKING VERSION */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            border: '1px solid #f1f5f9',
            padding: isSmallScreen ? "2rem" : "3rem",
            width: "100%",
            maxWidth: isProblemSize ? "none" : "600px",
            margin: "0 auto",
            position: 'relative'
          }}
        >
          <h3 style={{ 
            textAlign: "center",
            fontSize: isSmallScreen ? "1.5rem" : "1.75rem",
            marginBottom: "2rem",
            color: "#0f172a",
            fontWeight: 700,
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          }}>
            Send me a Message
          </h3>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              border: '1px solid #c3e6cb',
              textAlign: 'center',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            }}>
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              border: '1px solid #f5c6cb',
              textAlign: 'center',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            }}>
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <div>
            {/* Floating Labels */}
            <FloatingInput 
              label="Subject" 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleInputChange} 
            />
            <FloatingInput 
              label="Your Email" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
            />

            {/* Textarea */}
            <div style={{ position: "relative", marginBottom: "2rem" }}>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                style={{
                  width: "100%",
                  padding: "1.25rem 0.75rem 0.5rem",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  minHeight: "120px",
                  outline: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: "#ffffff",
                  borderColor: isMessageFocused ? "#667eea" : "#e2e8f0",
                  boxShadow: isMessageFocused ? "0 0 0 3px rgba(102, 126, 234, 0.1)" : "none",
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  resize: 'vertical'
                }}
              ></textarea>
              <label
                style={{
                  position: "absolute",
                  left: "12px",
                  top: isMessageFocused || formData.message ? "-8px" : "16px",
                  fontSize: isMessageFocused || formData.message ? "0.75rem" : "1rem",
                  color: isMessageFocused || formData.message ? "#667eea" : "#64748b",
                  pointerEvents: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: "#ffffff",
                  padding: "0 8px",
                  fontWeight: 500,
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.subject || !formData.email || !formData.message}
              style={{
                width: "100%",
                padding: "1rem",
                background: isSubmitting || (!formData.subject || !formData.email || !formData.message) ? 
                          '#9ca3af' : 
                          isSubmitHovered ? 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: isSubmitting || (!formData.subject || !formData.email || !formData.message) ? 'not-allowed' : 'pointer',
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isSubmitHovered && !isSubmitting ? '0 20px 25px -5px rgba(102, 126, 234, 0.4)' : '0 10px 15px -3px rgba(102, 126, 234, 0.3)',
                transform: isSubmitHovered && !isSubmitting ? 'translateY(-2px)' : 'translateY(0)',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
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
  );
};

export default Contacts;