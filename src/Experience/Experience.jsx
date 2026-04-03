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

function Experience() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmall = useMediaQuery('(max-width: 480px)');
    const [hoveredExp, setHoveredExp] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        const el = document.getElementById('Experience');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const experienceData = [
        {
            period: 'Jan 2026 – Present',
            company: 'Amdocs',
            position: 'Software Engineer Intern',
            description: 'Working on backend operations, system monitoring, and automation using Unix scripting tools.',
            achievements: [
                'Wrote and executed Unix shell scripts using MobaXTerm to monitor HBase system health, storage capacity, and stress levels',
                'Supported backend operations by automating routine diagnostic tasks, reducing the need for repetitive manual checks',
                'Assisted in backend ticket automation by applying scripting solutions to streamline issue identification and workflows'
            ],
            technologies: ['Unix/Linux', 'MobaXTerm', 'HBase', 'Shell Scripting', 'SQL'],
            icon: '⚡',
            accentColor: '#22c55e'
        },
        {
            period: 'Jul – Nov 2025',
            company: 'Directorate for Personnel and Records Management',
            position: 'IT Support & Systems Intern',
            description: 'Provided hardware and network support in a fast-paced government office environment.',
            achievements: [
                'Diagnosed and resolved complex hardware and software issues across 50+ desktops and laptops, ensuring uninterrupted daily operations',
                'Configured and maintained network infrastructure, including Ethernet setups, to guarantee stable and secure internet access for all users',
                'Delivered comprehensive IT support to staff members, optimizing technical workflows within a fast-paced government office environment'
            ],
            technologies: ['Hardware Support', 'Networking', 'Troubleshooting', 'IT Systems'],
            icon: '🖥️',
            accentColor: '#3b82f6'
        },
        {
            period: 'Jun – Aug 2024',
            company: 'Fildev',
            position: 'Full Stack Developer Intern',
            description: 'Contributed to full-stack development with focus on RESTful APIs, server deployment, and database optimization.',
            achievements: [
                'Engineered and integrated RESTful APIs to facilitate seamless and secure data exchange between frontend interfaces and backend architectures',
                'Managed the deployment of applications on Linux servers utilizing SSH and Putty, ensuring high availability and stable remote access',
                'Optimized system performance by refining MongoDB database queries and implementing responsive UI/UX enhancements'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'SSH', 'APIs', 'Jira'],
            icon: '💼',
            accentColor: '#6366f1'
        }
    ];

    return (
        <section id="Experience" style={{
            padding: isMobile ? '80px 20px' : '120px 32px',
            background: '#0a0a0f',
            position: 'relative', overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute', top: '40%', left: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
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
                        Professional Journey
                    </div>

                    <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: isSmall ? '32px' : isMobile ? '40px' : '52px',
                        fontWeight: 700, color: '#f1f5f9',
                        letterSpacing: '-0.02em', marginBottom: '8px'
                    }}>
                        Experience
                    </h2>

                    <p style={{
                        color: '#64748b', fontSize: '16px',
                        fontFamily: "'Inter', sans-serif", marginBottom: '16px'
                    }}>
                        My professional development journey
                    </p>

                    <div style={{
                        width: '60px', height: '3px',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        margin: '0 auto', borderRadius: '2px'
                    }} />
                </div>

                {/* Timeline */}
                <div style={{ position: 'relative' }}>
                    {/* Vertical line */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '20px', top: '0', bottom: '0',
                            width: '2px',
                            background: 'linear-gradient(180deg, #22c55e, #3b82f6, #6366f1, transparent)',
                            opacity: 0.3, zIndex: 0
                        }} />
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {experienceData.map((exp, index) => {
                            const isHovered = hoveredExp === index;
                            return (
                                <div key={index} style={{
                                    display: 'flex', gap: isMobile ? '0' : '40px',
                                    position: 'relative'
                                }}>
                                    {/* Timeline dot */}
                                    {!isMobile && (
                                        <div style={{
                                            width: '42px', flexShrink: 0,
                                            display: 'flex', justifyContent: 'center',
                                            paddingTop: '24px', position: 'relative', zIndex: 1
                                        }}>
                                            <div style={{
                                                width: '14px', height: '14px',
                                                borderRadius: '50%',
                                                background: exp.accentColor,
                                                boxShadow: `0 0 12px ${exp.accentColor}60`,
                                                border: '3px solid #0a0a0f'
                                            }} />
                                        </div>
                                    )}

                                    {/* Card */}
                                    <div
                                        style={{
                                            flex: 1,
                                            background: isHovered
                                                ? 'rgba(255, 255, 255, 0.04)'
                                                : 'rgba(255, 255, 255, 0.02)',
                                            border: `1px solid ${isHovered ? `${exp.accentColor}30` : 'rgba(255, 255, 255, 0.06)'}`,
                                            borderRadius: '20px',
                                            padding: isSmall ? '24px 20px' : '32px 28px',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                                            cursor: 'default',
                                            opacity: isVisible ? 1 : 0,
                                            animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.2}s forwards` : 'none'
                                        }}
                                        onMouseEnter={() => setHoveredExp(index)}
                                        onMouseLeave={() => setHoveredExp(null)}
                                    >
                                        {/* Period + Title */}
                                        <div style={{
                                            display: 'flex', alignItems: 'flex-start',
                                            gap: '12px', marginBottom: '16px', flexWrap: 'wrap'
                                        }}>
                                            <div style={{
                                                background: `${exp.accentColor}15`,
                                                border: `1px solid ${exp.accentColor}25`,
                                                color: exp.accentColor,
                                                padding: '6px 14px', borderRadius: '8px',
                                                fontSize: '13px', fontWeight: 600,
                                                fontFamily: "'Inter', sans-serif",
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                <span>{exp.icon}</span>
                                                {exp.period}
                                            </div>

                                            <div style={{ flex: 1, minWidth: '200px' }}>
                                                <h3 style={{
                                                    fontFamily: "'Space Grotesk', sans-serif",
                                                    fontSize: isSmall ? '17px' : '20px',
                                                    fontWeight: 700, color: '#f1f5f9', margin: 0
                                                }}>
                                                    {exp.company}
                                                </h3>
                                                <p style={{
                                                    fontSize: '14px', color: exp.accentColor,
                                                    fontWeight: 600, margin: '4px 0 0 0',
                                                    fontFamily: "'Inter', sans-serif"
                                                }}>
                                                    {exp.position}
                                                </p>
                                            </div>
                                        </div>

                                        <p style={{
                                            color: '#94a3b8', fontSize: '14px',
                                            lineHeight: 1.6, marginBottom: '20px',
                                            fontFamily: "'Inter', sans-serif", fontStyle: 'italic'
                                        }}>
                                            {exp.description}
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} style={{
                                                    display: 'flex', alignItems: 'flex-start',
                                                    marginBottom: '8px', fontSize: '13px',
                                                    color: '#94a3b8', lineHeight: 1.6,
                                                    fontFamily: "'Inter', sans-serif"
                                                }}>
                                                    <span style={{
                                                        width: '5px', height: '5px', borderRadius: '50%',
                                                        background: exp.accentColor,
                                                        marginRight: '12px', marginTop: '8px', flexShrink: 0,
                                                        boxShadow: `0 0 6px ${exp.accentColor}40`
                                                    }} />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                            {exp.technologies.map((tech, i) => (
                                                <span key={i} style={{
                                                    padding: '5px 12px',
                                                    background: `${exp.accentColor}10`,
                                                    color: exp.accentColor,
                                                    borderRadius: '6px', fontSize: '11px',
                                                    fontWeight: 600,
                                                    border: `1px solid ${exp.accentColor}20`,
                                                    fontFamily: "'Inter', sans-serif"
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;