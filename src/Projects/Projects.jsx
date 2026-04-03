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

function Projects() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(max-width: 480px)');
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        const el = document.getElementById('Projects');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const projectsData = [
        {
            period: 'Jan 2025 – Present',
            role: 'System Analyst & Full Stack Developer',
            title: 'TeamWeb',
            description: 'A comprehensive school management website built to handle 300+ students and 20+ teachers with robust backend systems.',
            points: [
                'Architected and structured comprehensive system frameworks, prioritizing scalability to reliably support a user base of 300+ students and 20+ teachers',
                'Developed robust backend systems supporting student pre-registration workflows and complex administrative management features',
                'Integrated API endpoints to establish seamless and efficient communication protocols between client applications and servers'
            ],
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'],
            icon: '🏫',
            accentColor: '#3b82f6',
            github: 'https://github.com/ZSedillo'
        },
        {
            period: 'Jul – Nov 2025',
            role: 'Game Developer & Researcher',
            title: 'Worshippers of The Deep (Thesis)',
            description: 'A roguelike game featuring adaptive AI enemy using PPO-based Reinforcement Learning, achieving 100% user win rate during research testing.',
            points: [
                'Programmed core gameplay systems utilizing Godot and GDScript, successfully implementing dynamic potion, card, and combat mechanics',
                'Designed and trained a PPO-based Reinforcement Learning enemy agent using Python that dynamically adapts to player behavior, achieving a 100% user win rate during research testing'
            ],
            tech: ['Godot', 'GDScript', 'Python', 'RL / PPO', 'AI Development'],
            icon: '🎮',
            accentColor: '#6366f1'
        },
        {
            period: '2024',
            role: 'Developer',
            title: 'Active Learning Portal',
            description: 'An innovative web-based learning platform focused on interactive education and student engagement.',
            points: [
                'Implemented server-side logic on a GlassFish Server to handle form submissions and authentication',
                'Designed SQL queries to ensure proper data retrieval and storage for system reliability',
                'Integrated authentication features to ensure secure access for students and instructors',
                'Incorporated learning materials, basic enrollment tracking, and meeting scheduling'
            ],
            tech: ['HTML', 'SQL', 'MySQL', 'GlassFish'],
            icon: '📚',
            accentColor: '#8b5cf6'
        }
    ];

    return (
        <section id="Projects" style={{
            padding: isMobile ? '80px 20px' : '120px 32px',
            background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 100%)',
            position: 'relative', overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute', bottom: '20%', right: '-5%',
                width: '400px', height: '400px',
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
                        Featured Work
                    </div>

                    <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '32px' : isMobile ? '40px' : '52px',
                        fontWeight: 700, color: '#f1f5f9',
                        letterSpacing: '-0.02em', marginBottom: '8px'
                    }}>
                        Projects
                    </h2>

                    <p style={{
                        color: '#64748b', fontSize: '16px',
                        fontFamily: "'Inter', sans-serif", marginBottom: '16px'
                    }}>
                        Showcasing my latest work and innovations
                    </p>

                    <div style={{
                        width: '60px', height: '3px',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        margin: '0 auto', borderRadius: '2px'
                    }} />
                </div>

                {/* Project Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {projectsData.map((project, index) => {
                        const isHovered = hoveredProject === index;
                        return (
                            <div
                                key={index}
                                style={{
                                    background: isHovered
                                        ? 'rgba(255, 255, 255, 0.04)'
                                        : 'rgba(255, 255, 255, 0.02)',
                                    border: `1px solid ${isHovered ? `${project.accentColor}30` : 'rgba(255, 255, 255, 0.06)'}`,
                                    borderRadius: '20px',
                                    padding: isSmall ? '24px 20px' : isMobile ? '28px 24px' : '36px 32px',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                                    cursor: 'default',
                                    position: 'relative', overflow: 'hidden',
                                    opacity: isVisible ? 1 : 0,
                                    animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s forwards` : 'none'
                                }}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Header row */}
                                <div style={{
                                    display: 'flex', alignItems: 'flex-start',
                                    gap: '16px', marginBottom: '16px',
                                    flexWrap: 'wrap'
                                }}>
                                    {/* Period badge */}
                                    <div style={{
                                        background: `${project.accentColor}15`,
                                        border: `1px solid ${project.accentColor}25`,
                                        color: project.accentColor,
                                        padding: '6px 14px', borderRadius: '8px',
                                        fontSize: '13px', fontWeight: 600,
                                        fontFamily: "'Inter', sans-serif",
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        <span>{project.icon}</span>
                                        {project.period}
                                    </div>

                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <h3 style={{
                                            fontFamily: "'Space Grotesk', sans-serif",
                                            fontSize: isSmall ? '18px' : '22px',
                                            fontWeight: 700, color: '#f1f5f9',
                                            margin: 0
                                        }}>
                                            {project.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '13px', color: project.accentColor,
                                            fontWeight: 600, margin: '4px 0 0 0',
                                            fontFamily: "'Inter', sans-serif"
                                        }}>
                                            {project.role}
                                        </p>
                                    </div>

                                    {/* GitHub link */}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                color: '#64748b', transition: 'color 0.2s',
                                                display: 'flex', alignItems: 'center'
                                            }}
                                            onMouseOver={e => e.currentTarget.style.color = '#3b82f6'}
                                            onMouseOut={e => e.currentTarget.style.color = '#64748b'}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                {/* Description */}
                                <p style={{
                                    color: '#94a3b8', fontSize: '14px',
                                    lineHeight: 1.6, marginBottom: '20px',
                                    fontFamily: "'Inter', sans-serif", fontStyle: 'italic'
                                }}>
                                    {project.description}
                                </p>

                                {/* Points */}
                                <ul style={{
                                    listStyle: 'none', padding: 0, margin: '0 0 24px 0'
                                }}>
                                    {project.points.map((point, i) => (
                                        <li key={i} style={{
                                            display: 'flex', alignItems: 'flex-start',
                                            marginBottom: '10px', fontSize: '13px',
                                            color: '#94a3b8', lineHeight: 1.6,
                                            fontFamily: "'Inter', sans-serif"
                                        }}>
                                            <span style={{
                                                width: '5px', height: '5px', borderRadius: '50%',
                                                background: project.accentColor,
                                                marginRight: '12px', marginTop: '8px', flexShrink: 0,
                                                boxShadow: `0 0 8px ${project.accentColor}40`
                                            }} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} style={{
                                            padding: '5px 12px',
                                            background: `${project.accentColor}10`,
                                            color: project.accentColor,
                                            borderRadius: '6px', fontSize: '11px',
                                            fontWeight: 600,
                                            border: `1px solid ${project.accentColor}20`,
                                            fontFamily: "'Inter', sans-serif"
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;