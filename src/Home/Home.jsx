import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.jpg';

// Custom hook for media query
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
};

const Home = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isMediumScreen = useMediaQuery('(max-width: 1024px)');
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        const handleScroll = () => {
            document.querySelectorAll(".section-load-down").forEach(element => {
                if (isInView(element)) {
                    element.classList.add("section-load-down--visible");
                } else {
                    element.classList.remove("section-load-down--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight - 150;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    // Profile image component
    const ProfileImage = () => (
        <img
            src={ProfilePicture}
            alt="Zandro Sedillo - Profile Picture"
            style={{
                width: '100%',
                height: 'auto',
                maxWidth: isSmallScreen ? '280px' : isMediumScreen ? '400px' : '500px',
                borderRadius: isSmallScreen ? '20px' : '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'saturate(1.1) contrast(1.05)',
                objectFit: 'cover'
            }}
        />
    );

    // Social Media Icons Component
    const SocialIcon = ({ href, onClick, children, ariaLabel }) => (
        <a
            href={href}
            onClick={onClick}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            aria-label={ariaLabel}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isSmallScreen ? '40px' : '44px',
                height: isSmallScreen ? '40px' : '44px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: '#64748b',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#6681a4ff';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#6681a4ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(102, 129, 164, 0.3)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.color = '#64748b';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {children}
        </a>
    );

    return (
        <>
            {/* Spacer for fixed header */}
            <div style={{ height: isSmallScreen ? '80px' : '100px' }} />
            
            <div className="section-load-down" id="Home"
                style={{
                    display: 'grid',
                    gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)',
                    gridTemplateAreas: isSmallScreen ? '"profile" "text"' : '"text profile"',
                    gap: isSmallScreen ? '40px' : isMediumScreen ? '60px' : '80px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isSmallScreen ? '40px 16px' : isMediumScreen ? '60px 40px' : '80px 60px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    minHeight: isSmallScreen ? 'auto' : '90vh',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}
            >
                {/* Background decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: isSmallScreen ? '5%' : '10%',
                    width: isSmallScreen ? '120px' : '200px',
                    height: isSmallScreen ? '120px' : '200px',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0
                }} />
                
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: isSmallScreen ? '5%' : '10%',
                    width: isSmallScreen ? '100px' : '150px',
                    height: isSmallScreen ? '100px' : '150px',
                    background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                }} />

                {/* Text Content */}
                <div style={{ 
                    gridArea: 'text', 
                    paddingLeft: 0,
                    paddingRight: 0,
                    position: 'relative',
                    zIndex: 1,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    maxWidth: '100%'
                }}>
                    {/* Greeting badge */}
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
                        border: '1px solid #e2e8f0'
                    }}>
                        <span style={{ fontSize: isSmallScreen ? '14px' : '16px' }}>👋</span>
                        Hello, I'm
                    </div>

                    {/* Main heading */}
                    <h1 style={{
                        color: '#0f172a',
                        fontSize: isSmallScreen ? '24px' : isMediumScreen ? '36px' : '42px',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: isSmallScreen ? '8px' : '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        <span style={{
                            color: '#334155',
                            fontSize: isSmallScreen ? '36px' : isMediumScreen ? '48px' : '64px',
                            fontWeight: 800,
                            display: 'block',
                            marginBottom: isSmallScreen ? '4px' : '8px'
                        }}>
                            Zandro Sedillo
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        color: '#64748b',
                        fontSize: isSmallScreen ? '16px' : isMediumScreen ? '18px' : '22px',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        marginBottom: isSmallScreen ? '32px' : '48px',
                        maxWidth: isSmallScreen ? '100%' : '600px',
                        margin: `0 auto ${isSmallScreen ? '32px' : '48px'} auto`
                    }}>
                        Full Stack Developer &<br />
                        Game Developer
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        gap: isSmallScreen ? '12px' : '16px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        marginBottom: isSmallScreen ? '32px' : '40px'
                    }}>
                        <a href="#Contacts" style={{ textDecoration: 'none', width: isSmallScreen ? '100%' : 'auto' }}>
                            <button
                                style={{
                                    background: isHovered ? 'linear-gradient(135deg, #6681a4ff 0%, #3f5169ff 100%)' : 'linear-gradient(135deg, #455973ff 0%, #334155 100%)',
                                    border: 'none',
                                    borderRadius: '50px',
                                    color: '#ffffff',
                                    fontSize: isSmallScreen ? '14px' : '16px',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontWeight: 600,
                                    padding: isSmallScreen ? '14px 28px' : '16px 32px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: isHovered ? '0 20px 25px -5px rgba(102, 126, 234, 0.4)' : '0 10px 15px -3px rgba(102, 126, 234, 0.3)',
                                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                                    minWidth: isSmallScreen ? '100%' : '160px',
                                    letterSpacing: '0.3px',
                                    width: isSmallScreen ? '100%' : 'auto'
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Contact Me
                            </button>
                        </a>
                        
                        <a href="#Projects" style={{ textDecoration: 'none', width: isSmallScreen ? '100%' : 'auto' }}>
                            <button
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '50px',
                                    color: '#334155',
                                    fontSize: isSmallScreen ? '14px' : '16px',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontWeight: 600,
                                    padding: isSmallScreen ? '12px 28px' : '14px 32px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    minWidth: isSmallScreen ? '100%' : '160px',
                                    letterSpacing: '0.3px',
                                    width: isSmallScreen ? '100%' : 'auto'
                                }}
                                onMouseOver={e => {
                                    e.target.style.borderColor = '#6681a4ff';
                                    e.target.style.color = '#6681a4ff';
                                    e.target.style.backgroundColor = '#f8fafc';
                                }}
                                onMouseOut={e => {
                                    e.target.style.borderColor = '#e2e8f0';
                                    e.target.style.color = '#334155';
                                    e.target.style.backgroundColor = 'transparent';
                                }}
                            >
                                View Projects
                            </button>
                        </a>
                    </div>

                    {/* Follow Me Section */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: isSmallScreen ? '16px' : '20px'
                    }}>
                        <p style={{
                            color: '#64748b',
                            fontSize: isSmallScreen ? '14px' : '16px',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 500,
                            margin: 0
                        }}>
                            Follow and Contact me
                        </p>
                        
                        <div style={{
                            display: 'flex',
                            gap: isSmallScreen ? '12px' : '16px',
                            alignItems: 'center'
                        }}>
                            {/* LinkedIn */}
                            <SocialIcon 
                                href="https://www.linkedin.com/in/zandro-sedillo-1bbb52279/" 
                                ariaLabel="LinkedIn Profile"
                            >
                                <svg width={isSmallScreen ? "18" : "20"} height={isSmallScreen ? "18" : "20"} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </SocialIcon>

                            {/* GitHub */}
                            <SocialIcon 
                                href="https://github.com/ZSedillo" 
                                ariaLabel="GitHub Profile"
                            >
                                <svg width={isSmallScreen ? "18" : "20"} height={isSmallScreen ? "18" : "20"} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </SocialIcon>

                            {/* Email */}
                            <SocialIcon 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('Contacts')?.scrollIntoView({ behavior: 'smooth' });
                                }} 
                                ariaLabel="Email Contact"
                            >
                                <svg width={isSmallScreen ? "18" : "20"} height={isSmallScreen ? "18" : "20"} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </SocialIcon>

                            {/* Phone */}
                            <SocialIcon 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('Contacts')?.scrollIntoView({ behavior: 'smooth' });
                                }} 
                                ariaLabel="Phone Contact"
                            >
                                <svg width={isSmallScreen ? "18" : "20"} height={isSmallScreen ? "18" : "20"} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    gridArea: 'profile',
                    zIndex: 1,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}>
                    <ProfileImage />
                </div>
            </div>
        </>
    );
};

export default Home;