import React, { useState, useEffect } from 'react';

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

function Education() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(max-width: 480px)');
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        const el = document.getElementById('Education');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const educationData = {
        period: 'Aug 2022 – Jun 2026',
        institution: 'University of Santo Tomas',
        degree: 'Bachelor of Science in Computer Science',
        description: 'Graduated with a degree in Computer Science, focusing on full-stack development and database management systems.',
        achievements: [
            'Learned fundamentals of web development with HTML and CSS',
            'Gained proficiency in Java programming and object-oriented concepts',
            'Explored server-side development with PHP and XAMPP environment',
            'Mastered database management using MySQL and Derby databases',
            'Developed comprehensive website projects integrating multiple technologies',
            'Built projects with dual database connectivity and SQL operations'
        ],
        graduation: 'Graduated: June 29, 2026',
        technologies: ['HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Derby', 'SQL', 'XAMPP']
    };

    return (
        <section id="Education" style={{
            padding: isMobile ? '80px 20px' : '120px 32px',
            background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 100%)',
            position: 'relative', overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute', top: '30%', right: '-5%',
                width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(80px)', zIndex: 0
            }} />

            <div style={{
                maxWidth: '900px', margin: '0 auto',
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
                        Academic Background
                    </div>

                    <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '32px' : isMobile ? '40px' : '52px',
                        fontWeight: 700, color: '#f1f5f9',
                        letterSpacing: '-0.02em', marginBottom: '8px'
                    }}>
                        Education
                    </h2>

                    <p style={{
                        color: '#64748b', fontSize: '16px',
                        fontFamily: "'Inter', sans-serif", marginBottom: '16px'
                    }}>
                        My academic journey
                    </p>

                    <div style={{
                        width: '60px', height: '3px',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        margin: '0 auto', borderRadius: '2px'
                    }} />
                </div>

                {/* Education Card */}
                <div
                    style={{
                        background: isHovered
                            ? 'rgba(255, 255, 255, 0.04)'
                            : 'rgba(255, 255, 255, 0.02)',
                        border: `1px solid ${isHovered ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.06)'}`,
                        borderRadius: '20px',
                        padding: isSmall ? '28px 20px' : isMobile ? '36px 28px' : '44px 36px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                        cursor: 'default',
                        position: 'relative', overflow: 'hidden',
                        opacity: isVisible ? 1 : 0,
                        animation: isVisible ? 'fadeInUp 0.6s ease-out 0.15s forwards' : 'none'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Header */}
                    <div style={{
                        display: 'flex', alignItems: 'flex-start',
                        gap: '16px', marginBottom: '20px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Icon + Period */}
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.12)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: '#3b82f6',
                            padding: '6px 14px', borderRadius: '8px',
                            fontSize: '13px', fontWeight: 600,
                            fontFamily: "'Inter', sans-serif",
                            display: 'flex', alignItems: 'center', gap: '6px'
                        }}>
                            <span>🎓</span>
                            {educationData.period}
                        </div>

                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <h3 style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: isSmall ? '20px' : '24px',
                                fontWeight: 700, color: '#f1f5f9',
                                margin: 0
                            }}>
                                {educationData.institution}
                            </h3>
                            <p style={{
                                fontSize: isSmall ? '14px' : '16px',
                                color: '#3b82f6', fontWeight: 600,
                                margin: '4px 0 0 0',
                                fontFamily: "'Inter', sans-serif"
                            }}>
                                {educationData.degree}
                            </p>
                        </div>

                        {/* Status dot */}
                        <div style={{
                            width: '12px', height: '12px', borderRadius: '50%',
                            background: '#22c55e',
                            boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)',
                            animation: 'pulse 2s infinite'
                        }} />
                    </div>

                    {/* Graduation date highlight */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.08))',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        marginBottom: '24px',
                        display: 'flex', alignItems: 'center', gap: '10px'
                    }}>
                        <span style={{ fontSize: '20px' }}>📅</span>
                        <span style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '14px', fontWeight: 600,
                            color: '#cbd5e1'
                        }}>
                            {educationData.graduation}
                        </span>
                    </div>

                    {/* Description */}
                    <p style={{
                        color: '#94a3b8', fontSize: '15px',
                        lineHeight: '1.7', marginBottom: '24px',
                        fontFamily: "'Inter', sans-serif", fontStyle: 'italic'
                    }}>
                        {educationData.description}
                    </p>

                    {/* Achievements */}
                    <ul style={{
                        listStyle: 'none', padding: 0, margin: '0 0 24px 0',
                        display: 'flex', flexDirection: 'column', gap: '12px'
                    }}>
                        {educationData.achievements.map((achievement, i) => (
                            <li key={i} style={{
                                color: '#cbd5e1', fontSize: '14px',
                                display: 'flex', alignItems: 'flex-start', gap: '12px',
                                fontFamily: "'Inter', sans-serif", lineHeight: '1.6'
                            }}>
                                <span style={{
                                    color: '#3b82f6', fontSize: '16px',
                                    marginTop: '2px'
                                }}>•</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Technologies Learned */}
                    <div>
                        <p style={{
                            fontSize: '12px', fontWeight: 600,
                            color: '#94a3b8', textTransform: 'uppercase',
                            letterSpacing: '1px', marginBottom: '10px',
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            Technologies Learned
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {educationData.technologies.map((tech, i) => (
                                <span key={i} style={{
                                    padding: '5px 12px',
                                    background: 'rgba(59, 130, 246, 0.08)',
                                    color: '#3b82f6',
                                    borderRadius: '6px', fontSize: '11px',
                                    fontWeight: 600,
                                    border: '1px solid rgba(59, 130, 246, 0.15)',
                                    fontFamily: "'Inter', sans-serif",
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
                                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)';
                                }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;