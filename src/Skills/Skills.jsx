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

const Skills = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(max-width: 480px)');
    const isMedium = useMediaQuery('(max-width: 1024px)');
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        const el = document.getElementById('Skills');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const skillsData = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" />
                </svg>
            ),
            title: 'Frontend & Web',
            description: 'Building beautiful, responsive interfaces with modern frameworks and tools.',
            skills: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'HTML', 'SQL'],
            tools: ['VS Code', 'Figma', 'Postman'],
            accentColor: '#3b82f6'
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
            title: 'Backend & DevOps',
            description: 'Building robust APIs, managing databases, and deploying to cloud infrastructure.',
            skills: ['Java', 'Python', 'MySQL', 'MongoDB', 'Firebase', 'HBase'],
            tools: ['AWS S3', 'GlassFish', 'MongoDB Compass', 'Git/GitHub', 'SSH/Putty', 'MobaXTerm', 'Jira'],
            accentColor: '#6366f1'
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
                </svg>
            ),
            title: 'Game Development',
            description: 'Creating interactive games and simulations with modern game engines.',
            skills: ['C#', 'GDScript', 'Python'],
            tools: ['Unity', 'Godot'],
            accentColor: '#8b5cf6'
        }
    ];

    return (
        <section id="Skills" style={{
            padding: isMobile ? '80px 20px' : '120px 32px',
            background: '#0a0a0f',
            position: 'relative', overflow: 'hidden'
        }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%',
                transform: 'translateX(-50%)',
                width: '600px', height: '400px',
                background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
                filter: 'blur(80px)', zIndex: 0
            }} />

            <div style={{
                maxWidth: '1200px', margin: '0 auto',
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
                        Continuously Learning
                    </div>

                    <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '32px' : isMobile ? '40px' : '52px',
                        fontWeight: 700, color: '#f1f5f9',
                        letterSpacing: '-0.02em', marginBottom: '8px'
                    }}>
                        My Skills
                    </h2>

                    <p style={{
                        color: '#64748b', fontSize: '16px',
                        fontFamily: "'Inter', sans-serif", marginBottom: '16px'
                    }}>
                        Technologies and tools I work with
                    </p>

                    <div style={{
                        width: '60px', height: '3px',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        margin: '0 auto', borderRadius: '2px'
                    }} />
                </div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isMedium ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: '24px'
                }}>
                    {skillsData.map((skill, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <div
                                key={index}
                                style={{
                                    background: isHovered
                                        ? 'rgba(255, 255, 255, 0.04)'
                                        : 'rgba(255, 255, 255, 0.02)',
                                    border: `1px solid ${isHovered ? `${skill.accentColor}33` : 'rgba(255, 255, 255, 0.06)'}`,
                                    borderRadius: '20px',
                                    padding: isSmall ? '28px 20px' : '36px 28px',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                                    cursor: 'default',
                                    opacity: isVisible ? 1 : 0,
                                    animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s forwards` : 'none',
                                    position: 'relative', overflow: 'hidden'
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Accent glow on hover */}
                                {isHovered && (
                                    <div style={{
                                        position: 'absolute', top: '-50%', right: '-50%',
                                        width: '200px', height: '200px',
                                        background: `radial-gradient(circle, ${skill.accentColor}12 0%, transparent 70%)`,
                                        borderRadius: '50%', zIndex: 0
                                    }} />
                                )}

                                {/* Icon */}
                                <div style={{
                                    width: '56px', height: '56px',
                                    borderRadius: '14px',
                                    background: `${skill.accentColor}15`,
                                    border: `1px solid ${skill.accentColor}25`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '24px',
                                    transition: 'all 0.3s ease',
                                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                    position: 'relative', zIndex: 1
                                }}>
                                    {skill.icon}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: '20px', fontWeight: 700,
                                    color: '#f1f5f9', marginBottom: '12px',
                                    position: 'relative', zIndex: 1
                                }}>
                                    {skill.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    color: '#64748b', fontSize: '14px',
                                    lineHeight: 1.6, marginBottom: '24px',
                                    fontFamily: "'Inter', sans-serif",
                                    position: 'relative', zIndex: 1
                                }}>
                                    {skill.description}
                                </p>

                                {/* Languages & Frameworks */}
                                <div style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                                    <p style={{
                                        fontSize: '12px', fontWeight: 600,
                                        color: '#94a3b8', textTransform: 'uppercase',
                                        letterSpacing: '1px', marginBottom: '10px',
                                        fontFamily: "'Inter', sans-serif"
                                    }}>
                                        Languages & Frameworks
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {skill.skills.map((s, i) => (
                                            <span key={i} style={{
                                                padding: '6px 12px',
                                                background: 'rgba(255, 255, 255, 0.04)',
                                                color: '#cbd5e1',
                                                borderRadius: '8px', fontSize: '12px',
                                                fontWeight: 500,
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                fontFamily: "'Inter', sans-serif",
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseOver={e => {
                                                e.currentTarget.style.borderColor = `${skill.accentColor}40`;
                                                e.currentTarget.style.color = skill.accentColor;
                                            }}
                                            onMouseOut={e => {
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                                e.currentTarget.style.color = '#cbd5e1';
                                            }}
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <p style={{
                                        fontSize: '12px', fontWeight: 600,
                                        color: '#94a3b8', textTransform: 'uppercase',
                                        letterSpacing: '1px', marginBottom: '10px',
                                        fontFamily: "'Inter', sans-serif"
                                    }}>
                                        Tools & Platforms
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {skill.tools.map((tool, i) => (
                                            <span key={i} style={{
                                                padding: '6px 12px',
                                                background: `${skill.accentColor}08`,
                                                color: '#94a3b8',
                                                borderRadius: '8px', fontSize: '12px',
                                                fontWeight: 500,
                                                border: `1px solid ${skill.accentColor}15`,
                                                fontFamily: "'Inter', sans-serif",
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseOver={e => {
                                                e.currentTarget.style.borderColor = `${skill.accentColor}40`;
                                                e.currentTarget.style.color = skill.accentColor;
                                            }}
                                            onMouseOut={e => {
                                                e.currentTarget.style.borderColor = `${skill.accentColor}15`;
                                                e.currentTarget.style.color = '#94a3b8';
                                            }}
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;