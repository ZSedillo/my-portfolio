import React, { useState, useEffect } from "react";

const FloatingInput = ({ label, type, name, value, onChange, onBlur }) => {
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
          fontFamily: 'Poppins, sans-serif',
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.target.style.borderColor = "#334155";
          e.target.style.boxShadow = "0 0 0 3px rgba(51, 65, 85, 0.1)";
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.target.style.borderColor = "#e2e8f0";
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
          fontSize: isFocused || value ? "0.75rem" : "1rem",
          color: isFocused || value ? "#334155" : "#64748b",
          pointerEvents: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#ffffff",
          padding: "0 8px",
          fontWeight: 500,
          fontFamily: 'Poppins, sans-serif',
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
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Enhanced responsive breakpoints
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isMediumScreen = useMediaQuery('(max-width: 1024px)');
  const isProblemSize = useMediaQuery('(max-width: 1000px)');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    // More comprehensive email regex that ensures proper email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Common email providers for additional validation
    const commonProviders = [
      'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 
      'icloud.com', 'aol.com', 'protonmail.com', 'yandex.com',
      'live.com', 'msn.com', 'mail.com', 'zoho.com'
    ];
    
    if (!email) {
      return { isValid: false, message: 'Email is required' };
    }
    
    if (!emailRegex.test(email)) {
      return { 
        isValid: false, 
        message: 'Please enter a valid email address (e.g., name@gmail.com)' 
      };
    }
    
    // Check if it's just plain text without @ symbol
    if (!email.includes('@')) {
      return { 
        isValid: false, 
        message: 'Email must contain @ symbol (e.g., name@gmail.com)' 
      };
    }
    
    // Extract domain
    const domain = email.split('@')[1];
    if (!domain || !domain.includes('.')) {
      return { 
        isValid: false, 
        message: 'Please use a valid email provider (e.g., @gmail.com, @yahoo.com)' 
      };
    }
    
    return { isValid: true, message: '' };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Real-time email validation - but only set error when field is touched and left
    if (name === 'email') {
      if (emailTouched && value.length > 0) {
        const validation = validateEmail(value);
        setEmailError(validation.isValid ? '' : validation.message);
      } else if (value.length === 0) {
        // If field is empty, clear any existing error
        setEmailError('');
      }
    }
  };

  // Handle email field blur (when user leaves the field)
  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (formData.email.length > 0) {
      const validation = validateEmail(formData.email);
      setEmailError(validation.isValid ? '' : validation.message);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate email before submission
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
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ subject: '', email: '', message: '' });
        setEmailError('');
        setEmailTouched(false); // Reset email touched state
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

  // Icon placeholders with slate theme
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
        background: 'linear-gradient(135deg, #334155, #455973)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        margin: '0 auto 16px auto',
        boxShadow: '0 8px 25px rgba(51, 65, 85, 0.3)',
        transition: 'all 0.3s ease'
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
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
      padding: isSmallScreen ? "3rem 1rem" : "5rem 2rem",
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif'
    }} id="Contacts">
      
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: isSmallScreen ? '150px' : '250px',
        height: isSmallScreen ? '150px' : '250px',
        background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.1) 0%, rgba(69, 89, 115, 0.1) 100%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'pulse 4s infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: isSmallScreen ? '120px' : '200px',
        height: isSmallScreen ? '120px' : '200px',
        background: 'linear-gradient(135deg, rgba(102, 129, 164, 0.1) 0%, rgba(51, 65, 85, 0.1) 100%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0,
        animation: 'pulse 4s infinite 1s'
      }} />

      {/* Additional floating elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '8%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #334155, #6681a4)',
        borderRadius: '50%',
        opacity: '0.1',
        animation: 'pulse 3s infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '12%',
        width: '60px',
        height: '60px',
        background: 'linear-gradient(135deg, #6681a4, #334155)',
        borderRadius: '50%',
        opacity: '0.15',
        animation: 'pulse 3s infinite 2s'
      }}></div>

      {/* Container */}
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        position: 'relative',
        zIndex: 1
      }}>

        {/* Heading */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: isSmallScreen ? "3rem" : "4rem",
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: isMobile ? '6px 12px' : '8px 20px',
            borderRadius: '25px',
            marginBottom: '30px',
            border: '1px solid rgba(51, 65, 85, 0.2)',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.1s'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10B981',
              animation: 'pulse 2s infinite'
            }}></div>
            <span style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#334155',
              fontWeight: '600',
              fontFamily: 'Poppins, sans-serif'
            }}>Let's Connect</span>
          </div>

          <h2 style={{ 
            fontSize: isMobile ? "36px" : isSmallScreen ? "48px" : "72px",
            fontWeight: 'bold',
            marginBottom: "20px",
            background: 'linear-gradient(135deg, #334155, #455973, #6681a4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Poppins, sans-serif',
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out'
          }}>
            Contact
          </h2>
          
          <p style={{ 
            fontSize: isSmallScreen ? "18px" : "20px",
            color: "#455973",
            maxWidth: "600px",
            margin: "0 auto 16px",
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.2s'
          }}>
            Got a Vision? Let's Bring it to Life!
          </p>
          
          <p style={{ 
            fontSize: isMobile ? "16px" : "18px",
            color: "#6681a4",
            maxWidth: "700px",
            margin: "0 auto 24px",
            lineHeight: 1.6,
            fontFamily: 'Poppins, sans-serif',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.3s'
          }}>
            Get in touch in the way that suits you best, and we'll explore your project in depth.
          </p>

          {/* Underline */}
          <div style={{
            width: '120px',
            height: '4px',
            background: 'linear-gradient(135deg, #334155, #6681a4)',
            margin: '0 auto',
            borderRadius: '2px',
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1s ease-out 0.4s'
          }}></div>
        </div>

        {/* Responsive Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallScreen || isProblemSize ? "1fr" : "1fr 1fr",
            gap: isSmallScreen ? "2.5rem" : "4rem",
            alignItems: "start",
          }}
        >
          {/* Contact Cards */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.5s'
          }}>
            <h3
              style={{
                fontSize: isSmallScreen ? "1.25rem" : "1.5rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "#334155",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
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
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(51, 65, 85, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    border: '1px solid rgba(51, 65, 85, 0.1)',
                    textAlign: "center",
                    padding: isSmallScreen ? "1.5rem" : isProblemSize ? "1.25rem" : "2rem",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(51, 65, 85, 0.25), 0 0 0 1px rgba(51, 65, 85, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(51, 65, 85, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.1)";
                  }}
                >
                  <IconPlaceholder type={contact.type} />
                  <h4 style={{ 
                    fontSize: isProblemSize ? "0.9rem" : "1rem",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "#334155",
                    fontFamily: 'Poppins, sans-serif',
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
                        color: "#455973",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: isProblemSize ? '0.75rem' : '0.85rem',
                        fontFamily: 'Poppins, sans-serif',
                        transition: 'color 0.2s ease',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        display: 'block',
                        wordBreak: 'break-all',
                        hyphens: 'auto'
                      }}
                      onMouseOver={e => e.target.style.color = "#334155"}
                      onMouseOut={e => e.target.style.color = "#455973"}
                    >
                      {contact.info}
                    </a>
                  ) : (
                    <p style={{ 
                      color: "#6681a4",
                      fontSize: isProblemSize ? '0.75rem' : '0.85rem',
                      fontFamily: 'Poppins, sans-serif',
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

          {/* Contact Form */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: 'blur(10px)',
              borderRadius: "24px",
              boxShadow: "0 25px 50px -12px rgba(51, 65, 85, 0.25), 0 0 0 1px rgba(51, 65, 85, 0.1)",
              border: '1px solid rgba(51, 65, 85, 0.1)',
              padding: isSmallScreen ? "2rem" : "3rem",
              width: "100%",
              maxWidth: isProblemSize ? "none" : "600px",
              margin: "0 auto",
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.6s'
            }}
          >
            <h3 style={{ 
              textAlign: "center",
              fontSize: isSmallScreen ? "1.5rem" : "1.75rem",
              marginBottom: "2rem",
              color: "#334155",
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
            }}>
              Send me a Message
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div style={{
                backgroundColor: '#d1fae5',
                color: '#065f46',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                border: '1px solid #a7f3d0',
                textAlign: 'center',
                fontFamily: 'Poppins, sans-serif',
              }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                border: '1px solid #fecaca',
                textAlign: 'center',
                fontFamily: 'Poppins, sans-serif',
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
                onBlur={handleEmailBlur}
              />
              
              {/* Email Error Message */}
              {emailError && (
                <div style={{
                  color: '#dc2626',
                  fontSize: '0.875rem',
                  marginTop: '-1rem',
                  marginBottom: '1rem',
                  paddingLeft: '12px',
                  fontFamily: 'Poppins, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>⚠️</span>
                  {emailError}
                </div>
              )}

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
                    borderColor: isMessageFocused ? "#334155" : "#e2e8f0",
                    boxShadow: isMessageFocused ? "0 0 0 3px rgba(51, 65, 85, 0.1)" : "none",
                    fontFamily: 'Poppins, sans-serif',
                    resize: 'vertical'
                  }}
                ></textarea>
                <label
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: isMessageFocused || formData.message ? "-8px" : "16px",
                    fontSize: isMessageFocused || formData.message ? "0.75rem" : "1rem",
                    color: isMessageFocused || formData.message ? "#334155" : "#64748b",
                    pointerEvents: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    backgroundColor: "#ffffff",
                    padding: "0 8px",
                    fontWeight: 500,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.subject || !formData.email || !formData.message || emailError}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: isSubmitting || (!formData.subject || !formData.email || !formData.message || emailError) ? 
                            '#9ca3af' : 
                            isSubmitHovered ? 'linear-gradient(135deg, #1e293b 0%, #475569 100%)' : 'linear-gradient(135deg, #334155, #455973)',
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: isSubmitting || (!formData.subject || !formData.email || !formData.message || emailError) ? 'not-allowed' : 'pointer',
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: isSubmitHovered && !isSubmitting && !emailError ? '0 20px 25px -5px rgba(51, 65, 85, 0.4)' : '0 10px 15px -3px rgba(51, 65, 85, 0.3)',
                  transform: isSubmitHovered && !isSubmitting && !emailError ? 'translateY(-2px)' : 'translateY(0)',
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={() => setIsSubmitHovered(true)}
                onMouseLeave={() => setIsSubmitHovered(false)}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Email Format Helper */}
              {emailError && formData.email.length > 0 && emailError !== 'Email is required' && (
                <div style={{
                  marginTop: '1rem',
                  padding: '12px 16px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  color: '#991b1b',
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span>💡</span>
                    <strong style={{ color: '#7f1d1d' }}>Email Format Required:</strong>
                  </div>
                  <div style={{ paddingLeft: '20px', color: '#7f1d1d' }}>
                    Please use a valid email format like:<br/>
                    • yourname@gmail.com<br/>
                    • yourname@yahoo.com<br/>
                    • example@outlook.com
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1.05); 
          }
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
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -8px, 0); }
          70% { transform: translate3d(0, -4px, 0); }
          90% { transform: translate3d(0, -2px, 0); }
        }
        `}
      </style>
    </div>
  );
};

export default Contacts;