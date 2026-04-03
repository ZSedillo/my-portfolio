import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.jpg';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(() => {
        const mql = window.matchMedia(query);
        const handler = () => setMatches(mql.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, [query]);
    return matches;
};

const Home = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(max-width: 480px)');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const SocialIcon = ({ href, onClick, children, ariaLabel }) => (
        <a
            href={href}
            onClick={onClick}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            aria-label={ariaLabel}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#94a3b8', textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.2)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {children}
        </a>
    );

    return (
        <div id="Home" style={{
            minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0d0d14 100%)',
        }}>
            {/* Grid pattern background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                zIndex: 0
            }} />

            {/* Gradient orbs */}
            <div style={{
                position: 'absolute', top: '10%', right: isMobile ? '-10%' : '15%',
                width: isMobile ? '300px' : '500px', height: isMobile ? '300px' : '500px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', left: isMobile ? '-10%' : '5%',
                width: isMobile ? '250px' : '400px', height: isMobile ? '250px' : '400px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
            }} />

            <div style={{
                maxWidth: '1200px', margin: '0 auto', width: '100%',
                padding: isMobile ? '120px 20px 60px' : '100px 32px',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '48px' : '80px',
                alignItems: 'center',
                position: 'relative', zIndex: 1
            }}>
                {/* Text Content */}
                <div style={{
                    order: isMobile ? 2 : 1,
                    textAlign: isMobile ? 'center' : 'left',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        padding: '8px 16px', borderRadius: '50px',
                        fontSize: '13px', fontWeight: 500, color: '#3b82f6',
                        marginBottom: '28px',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            backgroundColor: '#22c55e', animation: 'pulse 2s infinite'
                        }} />
                        Available for opportunities
                    </div>

                    {/* Name */}
                    <h1 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '36px' : isMobile ? '44px' : '60px',
                        fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em',
                        marginBottom: '16px', color: '#f1f5f9'
                    }}>
                        Zandro
                        <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Sedillo
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        color: '#94a3b8',
                        fontSize: isSmall ? '16px' : '18px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400, lineHeight: 1.6,
                        marginBottom: '36px',
                        maxWidth: isMobile ? '100%' : '480px'
                    }}>
                        Full Stack Developer & Game Developer
                        <br />
                        <span style={{ color: '#64748b', fontSize: '15px' }}>
                            Building digital experiences that matter.
                        </span>
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isSmall ? 'column' : 'row',
                        gap: '12px',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        marginBottom: '40px'
                    }}>
                        <a href="#Contacts" style={{ textDecoration: 'none', width: isSmall ? '100%' : 'auto' }}>
                            <button style={{
                                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                border: 'none', borderRadius: '12px',
                                color: '#ffffff', fontSize: '15px',
                                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                                padding: '14px 28px', cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                                width: isSmall ? '100%' : 'auto',
                                letterSpacing: '0.3px'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                            }}
                            >
                                Contact Me
                            </button>
                        </a>

                        <a href="#Projects" style={{ textDecoration: 'none', width: isSmall ? '100%' : 'auto' }}>
                            <button style={{
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '12px',
                                color: '#e2e8f0', fontSize: '15px',
                                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                                padding: '14px 28px', cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                width: isSmall ? '100%' : 'auto',
                                letterSpacing: '0.3px'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.06)';
                                e.currentTarget.style.color = '#3b82f6';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#e2e8f0';
                            }}
                            >
                                View Projects
                            </button>
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div style={{
                        display: 'flex', gap: '12px',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        <SocialIcon href="https://www.linkedin.com/in/zandro-sedillo-1bbb52279/" ariaLabel="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://github.com/ZSedillo" ariaLabel="GitHub">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </SocialIcon>
                        <SocialIcon
                            onClick={(e) => { e.preventDefault(); document.getElementById('Contacts')?.scrollIntoView({ behavior: 'smooth' }); }}
                            ariaLabel="Email"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </SocialIcon>
                    </div>
                </div>

                {/* Profile Image */}
                <div style={{
                    order: isMobile ? 1 : 2,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}>
                    <div style={{ position: 'relative' }}>
                        {/* Gradient ring */}
                        <div style={{
                            width: isSmall ? '260px' : isMobile ? '320px' : '420px',
                            height: isSmall ? '260px' : isMobile ? '320px' : '420px',
                            borderRadius: '24px',
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
                            padding: '3px',
                            position: 'relative'
                        }}>
                            <div
                                onContextMenu={(e) => e.preventDefault()}
                                style={{
                                    width: '100%', height: '100%',
                                    borderRadius: '22px',
                                    backgroundImage: `url(${ProfilePicture})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    userSelect: 'none',
                                }}
                            />
                        </div>

                        {/* Floating accent */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-16px', right: '-16px',
                            width: '60px', height: '60px',
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            borderRadius: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '24px',
                            boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
                            animation: 'float 3s ease-in-out infinite'
                        }}>
                            💻
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;