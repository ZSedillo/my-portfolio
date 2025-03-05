import React, { useState } from 'react';
import MailIcon from '../assets/images/mail.png';
import PhoneIcon from '../assets/images/iphone.png';
import LinkedInIcon from '../assets/images/linkedIn.png';
import GithubIcon from '../assets/images/github.png';

const contactCardStyle = {
  borderRadius: '15px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  padding: '20px',
  transition: 'transform 0.3s ease',
};

const contactIconStyle = {
  width: '50px',
  height: '50px',
  marginBottom: '10px',
};

const ContactCard = ({ icon, title, info, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = isHovered ? { 
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)' 
  } : {};

  return (
    <div 
      style={{
        ...contactCardStyle,
        ...hoverStyle
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <img 
    src={icon} 
    alt={`${title} Icon`} 
    style={contactIconStyle}
    />

      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        marginBottom: '0.5rem' 
      }}>
        {title}
      </h3>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            color: '#2563eb', 
            textDecoration: 'none',
            ':hover': { textDecoration: 'underline' }
          }}
        >
          {info}
        </a>
      ) : (
        <p style={{ color: '#6b7280' }}>{info}</p>
      )}
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactOptions = [
    { 
      icon: MailIcon, 
      title: 'Email Address', 
      info: 'sedillozandro720@gmail.com' 
    },
    { 
      icon: PhoneIcon, 
      title: 'Phone Number', 
      info: '(63+) 09770311641' 
    },
    { 
      icon: LinkedInIcon, 
      title: 'LinkedIn', 
      info: 'linkedin.com/in/zandro-sedillo',
      link: 'https://www.linkedin.com/in/zandro-sedillo-1bbb52279/' 
    },
    { 
      icon: GithubIcon, 
      title: 'GitHub', 
      info: 'github.com/ZSedillo',
      link: 'https://github.com/ZSedillo' 
    }
  ];

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 1rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3.5rem',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',  // Softer shadow
    padding: '2.5rem',  // More padding for better spacing
    maxWidth: '500px',
    margin: '0 auto',
    overflow: 'hidden',  // Prevents content overflow
  };
  

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          Contact
        </h2>
        <p style={{ 
        fontSize: '1.25rem', 
        color: '#6b7280',
        maxWidth: '600px',
        margin: '0 auto',
        fontWeight: 'bold'
        }}>
        <strong>Got a Vision? Let's Bring it to Life!</strong>
        </p>

        <p style={{ 
          fontSize: '1.10rem', 
          color: '#6b7280',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Get in touch in the way that suits you best, and we'll explore your project in depth.
        </p>
      </div>

      <div style={gridContainerStyle}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {contactOptions.map((contact, index) => (
            <ContactCard 
              key={index}
              icon={contact.icon}
              title={contact.title}
              info={contact.info}
              link={contact.link}
            />
          ))}
        </div>

        <div style={formContainerStyle}>
          <h3 style={{ 
            textAlign: 'center', 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            color: '#1f2937'
          }}>
            Contact Me
          </h3>
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
          >
            <input 
              type="hidden" 
              name="access_key" 
              value="a0376732-b681-486f-9884-5cee5fddcf28" 
            />
            
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              style={{
                ...inputStyle,
                resize: 'vertical'
              }}
            ></textarea>

            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;