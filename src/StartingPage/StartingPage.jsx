import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.png';

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

const StartingPage = () => {
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

    return (
        <>
            {/* Spacer for fixed header */}
            <div style={{ height: isSmallScreen ? '80px' : '100px' }} />
            
            <div className="section-load-down" id="StartingPage"
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
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
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
                        width: '100%'
                    }}>
                        <a href="#Contacts" style={{ textDecoration: 'none', width: isSmallScreen ? '100%' : 'auto' }}>
                            <button
                                style={{
                                    background: isHovered ? 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                                    e.target.style.borderColor = '#667eea';
                                    e.target.style.color = '#667eea';
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

            {/* Modern divider */}
            <div style={{
                margin: '0 auto',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                }}>
                    ✦
                </div>
            </div>
        </>
    );
};

export default StartingPage;