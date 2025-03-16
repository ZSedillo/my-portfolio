import React, { useState } from "react";
import MailIcon from "../assets/images/mail.png";
import PhoneIcon from "../assets/images/iphone.png";
import LinkedInIcon from "../assets/images/linkedIn.png";
import GithubIcon from "../assets/images/github.png";

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
          border: "2px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "1rem",
          outline: "none",
          transition: "border-color 0.3s ease",
          backgroundColor: "white",
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.target.style.borderColor = "#2563eb";
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.target.style.borderColor = "#d1d5db";
        }}
      />
      <label
        style={{
          position: "absolute",
          left: "12px",
          top: isFocused || value ? "-8px" : "50%",
          transform: isFocused || value ? "none" : "translateY(-50%)",
          fontSize: isFocused || value ? "0.75rem" : "1rem",
          color: isFocused || value ? "#2563eb" : "#6b7280",
          pointerEvents: "none",
          transition: "all 0.3s ease",
          backgroundColor: "white",
          padding: "0 5px",
        }}
      >
        {label}
      </label>
    </div>
  );
};


const Contacts = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

const [isMessageFocused, setIsMessageFocused] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactOptions = [
    { icon: MailIcon, title: "Email Address", info: "sedillozandro720@gmail.com" },
    { icon: PhoneIcon, title: "Phone Number", info: "(63+) 09770311641" },
    {
      icon: LinkedInIcon,
      title: "LinkedIn",
      info: "linkedin.com/in/zandro-sedillo",
      link: "https://www.linkedin.com/in/zandro-miguel-sedillo-1bbb52279/",
    },
    { icon: GithubIcon, title: "GitHub", info: "github.com/ZSedillo", link: "https://github.com/ZSedillo" },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1rem" }} id="Contacts">
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Contact</h2>
        <p style={{ fontSize: "1.25rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto", fontWeight: "bold" }}>
          <strong>Got a Vision? Let's Bring it to Life!</strong>
        </p>
        <p style={{ fontSize: "1.10rem", color: "#6b7280", maxWidth: "700px", margin: "0 auto" }}>
          Get in touch in the way that suits you best, and we'll explore your project in depth.
        </p>
      </div>

      {/* Responsive Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Contact Cards */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
        {contactOptions.map((contact, index) => (
          <div 
            key={index}
            style={{
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              padding: "20px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            <img src={contact.icon} alt={`${contact.title} Icon`} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{contact.title}</h3>
            {contact.link ? (
              <a href={contact.link} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "none" }}>
                {contact.info}
              </a>
            ) : (
              <p style={{ color: "#6b7280" }}>{contact.info}</p>
            )}
          </div>
        ))}

          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
            padding: "2.5rem",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "1.5rem", color: "#1f2937" }}>Contact Me</h3>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a0376732-b681-486f-9884-5cee5fddcf28" />

            {/* Floating Labels */}
            <FloatingInput label="Subject" type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
            <FloatingInput label="Your Email" type="email" name="email" value={formData.email} onChange={handleInputChange} />

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
              padding: "1rem 0.75rem 0.5rem",
              border: "2px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "1rem",
              minHeight: "120px",
              outline: "none",
              transition: "border-color 0.3s ease",
              backgroundColor: "white",
              borderColor: isMessageFocused ? "#2563eb" : "#d1d5db",
            }}
          ></textarea>
          <label
            style={{
              position: "absolute",
              left: "12px",
              top: isMessageFocused || formData.message ? "-8px" : "10px",
              fontSize: isMessageFocused || formData.message ? "0.75rem" : "1rem",
              color: isMessageFocused || formData.message ? "#2563eb" : "#6b7280",
              pointerEvents: "none",
              transition: "all 0.3s ease",
              backgroundColor: "white",
              padding: "0 5px",
            }}
          >
            Your Message
          </label>
        </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
