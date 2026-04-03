import React, { useState, useEffect } from 'react';
import Resume from '../assets/resume/Sedillo_Resume.pdf';

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

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(max-width: 480px)');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.15 }
        );
        const el = document.getElementById('About');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const stats = [
        { number: '3+', label: 'Projects Built' },
        { number: '3', label: 'Internships' },
        { number: '∞', label: 'Dedication' }
    ];

    return (
        <section id="About" style={{
            padding: isMobile ? '80px 20px' : '120px 32px',
            background: 'linear-gradient(180deg, #0d0d14 0%, #0a0a0f 100%)',
            position: 'relative', overflow: 'hidden'
        }}>
            {/* Subtle accent glow */}
            <div style={{
                position: 'absolute', top: '50%', right: '-10%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(80px)', zIndex: 0
            }} />

            <div style={{
                maxWidth: '1000px', margin: '0 auto',
                position: 'relative', zIndex: 1
            }}>
                {/* Section Header */}
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
                        Get to know me
                    </div>

                    <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '32px' : isMobile ? '40px' : '52px',
                        fontWeight: 700, color: '#f1f5f9',
                        letterSpacing: '-0.02em', marginBottom: '8px'
                    }}>
                        About Me
                    </h2>

                    <div style={{
                        width: '60px', height: '3px',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        margin: '16px auto 0', borderRadius: '2px'
                    }} />
                </div>

                {/* Content Card */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '20px',
                    padding: isSmall ? '28px 20px' : isMobile ? '36px 28px' : '48px 40px',
                    backdropFilter: 'blur(10px)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out 0.2s'
                }}>
                    <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '22px' : '28px',
                        fontWeight: 700, color: '#f1f5f9',
                        marginBottom: '24px'
                    }}>
                        Hi, I'm Zandro! 👋
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <p style={{
                            fontSize: isSmall ? '15px' : '17px',
                            color: '#cbd5e1', lineHeight: 1.7,
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            A passionate <span style={{ color: '#3b82f6', fontWeight: 600 }}>Full Stack Developer</span> and{' '}
                            <span style={{ color: '#6366f1', fontWeight: 600 }}>Game Developer</span> who thrives on
                            turning complex problems into elegant solutions.
                        </p>

                        <p style={{
                            fontSize: isSmall ? '14px' : '15px',
                            color: '#94a3b8', lineHeight: 1.7,
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            My expertise spans across front-end and back-end development, networking infrastructure,
                            and system administration, with a special focus on program debugging, optimization, and
                            performance enhancement. I'm constantly exploring new technologies to stay at the forefront
                            of the industry.
                        </p>

                        <p style={{
                            fontSize: isSmall ? '14px' : '15px',
                            color: '#94a3b8', lineHeight: 1.7,
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            With strong analytical skills and meticulous attention to detail, I'm committed to
                            delivering high-quality solutions that not only meet requirements but exceed expectations.
                        </p>
                    </div>

                    {/* Resume Button */}
                    <a
                        href={Resume}
                        download="Sedillo_Resume"
                        style={{ textDecoration: 'none', display: 'inline-block', marginTop: '32px' }}
                    >
                        <button style={{
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            border: 'none', borderRadius: '12px',
                            color: '#ffffff',
                            padding: isSmall ? '12px 24px' : '14px 28px',
                            display: 'flex', alignItems: 'center', gap: '10px',
                            fontWeight: 600, fontSize: isSmall ? '14px' : '15px',
                            cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                            transition: 'all 0.3s ease',
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
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download Resume
                        </button>
                    </a>
                </div>

                {/* Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: isSmall ? '12px' : '20px',
                    marginTop: '32px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out 0.4s'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: '16px',
                            padding: isSmall ? '20px 12px' : '28px 20px',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.04)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                        }}
                        >
                            <div style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: isSmall ? '24px' : '36px',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '4px'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: isSmall ? '11px' : '14px',
                                color: '#64748b', fontWeight: 500,
                                fontFamily: "'Inter', sans-serif"
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;