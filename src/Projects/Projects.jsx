import React, { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addListener(handleChange);
        return () => mediaQueryList.removeListener(handleChange);
    }, [query]);

    return matches;
};

function Projects() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 480px)');
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const projectsData = [
        {
            status: '2025',
            title: 'TeamWeb - School Management Website',
            description: 'A comprehensive full-stack web application designed to streamline school operations with modern technology and cloud storage.',
            points: [
                'Currently developing a full-stack web app for pre-registration and appointment booking',
                'Implemented API integration for smooth data handling using Express.js',
                'Using React, Node.js, Express.js, and MongoDB with user authentication',
                'Utilized AWS S3 for secure and scalable image storage and management',
                'Designed for use by students, faculty, and parents within a school setting'
            ],
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Authentication'],
            statusColor: 'linear-gradient(135deg, #334155, #455973)',
            cardGradient: 'rgba(255, 255, 255, 0.9)',
            icon: '🏫',
            accentColor: '#334155'
        },
        {
            status: '2024',
            title: 'Active Learning Portal',
            description: 'An innovative web-based learning platform focused on interactive education and student engagement.',
            points: [
                'Developed a web-based learning platform with interactive modules',
                'Focused on enhancing student engagement and self-paced learning',
                'Incorporated learning materials, basic enrollment tracking, and meeting scheduling',
                'Built using HTML for the front-end and Firebase for backend/database'
            ],
            tech: ['HTML', 'SQL', 'MySQL', 'Glassfish'],
            statusColor: 'linear-gradient(135deg, #455973, #6681a4)',
            cardGradient: 'rgba(255, 255, 255, 0.9)',
            icon: '📚',
            accentColor: '#455973'
        }
    ];

    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
        padding: '80px 0',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        overflow: 'hidden'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '80px',
        position: 'relative',
        zIndex: 1
    };

    const titleStyle = {
        fontSize: isMobile ? '36px' : isSmallScreen ? '48px' : '72px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #334155, #455973, #6681a4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s ease-out'
    };

    const subtitleStyle = {
        fontSize: isMobile ? '16px' : '18px',
        color: '#455973',
        marginBottom: '24px',
        fontWeight: '500',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s ease-out 0.2s'
    };

    const underlineStyle = {
        width: '96px',
        height: '4px',
        background: 'linear-gradient(135deg, #334155, #6681a4)',
        margin: '0 auto',
        borderRadius: '2px',
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 1s ease-out 0.4s'
    };

    const projectsContainerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: isMobile ? '0 12px' : isSmallScreen ? '0 20px' : '0 40px',
        position: 'relative'
    };

    const projectCardStyle = (project, isHovered, index) => ({
        position: 'relative',
        background: project.cardGradient,
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: isMobile ? '20px' : isSmallScreen ? '24px' : '32px',
        marginBottom: '32px',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(51, 65, 85, 0.25)' : '0 10px 25px rgba(51, 65, 85, 0.1)',
        border: '1px solid rgba(51, 65, 85, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        cursor: 'pointer',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        animationDelay: `${index * 0.2}s`,
        animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
    });

    const projectHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '16px'
    };

    const statusBadgeStyle = (statusColor, isHovered) => ({
        background: statusColor,
        color: 'white',
        padding: isMobile ? '6px 12px' : '8px 16px',
        borderRadius: '20px',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
        boxShadow: '0 4px 12px rgba(51, 65, 85, 0.2)'
    });

    const projectTitleStyle = {
        fontSize: isMobile ? '18px' : isSmallScreen ? '20px' : '28px',
        fontWeight: 'bold',
        color: '#334155',
        margin: 0,
        fontFamily: 'Poppins, sans-serif',
        flex: 1
    };

    const descriptionStyle = {
        fontSize: isMobile ? '14px' : '16px',
        color: '#6681a4',
        marginBottom: '24px',
        lineHeight: '1.6',
        fontStyle: 'italic',
        fontFamily: 'Poppins, sans-serif'
    };

    const pointsListStyle = {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 24px 0'
    };

    const pointItemStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '12px',
        fontSize: isMobile ? '13px' : '14px',
        color: '#455973',
        lineHeight: '1.6',
        fontFamily: 'Poppins, sans-serif'
    };

    const bulletStyle = {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #334155, #6681a4)',
        marginRight: '12px',
        marginTop: '8px',
        flexShrink: 0
    };

    const techStackStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '16px'
    };

    const techTagStyle = (accentColor) => ({
        background: `rgba(51, 65, 85, 0.1)`,
        color: accentColor,
        padding: isMobile ? '4px 10px' : '6px 12px',
        borderRadius: '16px',
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '500',
        border: `1px solid rgba(51, 65, 85, 0.2)`,
        fontFamily: 'Poppins, sans-serif',
        transition: 'all 0.3s ease'
    });

    const decorativeCircleStyle = (size, color, position, animationDelay) => ({
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity: '0.15',
        animation: `pulse 3s infinite ${animationDelay}`,
        ...position
    });

    return (
        <div style={containerStyle} id="Projects">
            <style>
                {`
                @keyframes pulse {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 0.15;
                    }
                    50% { 
                        transform: scale(1.05);
                        opacity: 0.25;
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
                    40%, 43% { transform: translate3d(0, -8px, 0); }
                    70% { transform: translate3d(0, -4px, 0); }
                    90% { transform: translate3d(0, -2px, 0); }
                }
                `}
            </style>

            {/* Background Decorative Elements */}
            <div style={decorativeCircleStyle('120px', '#334155', { top: '100px', left: '5%' }, '0s')}></div>
            <div style={decorativeCircleStyle('80px', '#455973', { top: '300px', right: '8%' }, '1s')}></div>
            <div style={decorativeCircleStyle('100px', '#6681a4', { bottom: '200px', left: '10%' }, '2s')}></div>

            {/* Projects Header */}
            <div style={headerStyle}>
                {/* Status Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '25px',
                    border: '1px solid rgba(51, 65, 85, 0.2)',
                    marginBottom: '32px',
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1s ease-out 0.1s'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#10B981',
                        borderRadius: '50%',
                        marginRight: '12px',
                        animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{ 
                        color: '#334155', 
                        fontWeight: 600, 
                        fontSize: isMobile ? '12px' : '14px' 
                    }}>
                        Featured Projects
                    </span>
                </div>

                <h1 style={titleStyle}>Projects</h1>
                <p style={subtitleStyle}>Showcasing my latest work and innovations</p>
                <div style={underlineStyle}></div>
            </div>

            {/* Projects List */}
            <div style={projectsContainerStyle}>
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        style={projectCardStyle(project, hoveredProject === index, index)}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* Card Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '150px',
                            height: '150px',
                            background: `linear-gradient(45deg, ${project.accentColor}10, transparent)`,
                            borderRadius: '0 24px 0 150px',
                            opacity: hoveredProject === index ? 0.3 : 0.1,
                            transition: 'opacity 0.3s ease'
                        }}></div>

                        {/* Decorative background elements */}
                        <div style={decorativeCircleStyle('60px', project.statusColor, { top: '-30px', right: '-30px' }, '0s')}></div>
                        <div style={decorativeCircleStyle('40px', `linear-gradient(135deg, ${project.accentColor}, #6681a4)`, { bottom: '-20px', left: '-20px' }, '1s')}></div>
                        
                        {/* Project Header */}
                        <div style={projectHeaderStyle}>
                            <div style={statusBadgeStyle(project.statusColor, hoveredProject === index)}>
                                <span>{project.icon}</span>
                                {project.status}
                            </div>
                            <h2 style={projectTitleStyle}>{project.title}</h2>
                        </div>

                        {/* Project Description */}
                        <p style={descriptionStyle}>{project.description}</p>

                        {/* Project Points */}
                        <ul style={pointsListStyle}>
                            {project.points.map((point, i) => (
                                <li key={i} style={pointItemStyle}>
                                    <div style={bulletStyle}></div>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech Stack */}
                        <div style={techStackStyle}>
                            {project.tech.map((tech, i) => (
                                <span 
                                    key={i} 
                                    style={techTagStyle(project.accentColor)}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(51, 65, 85, 0.2)';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 4px 12px rgba(51, 65, 85, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'rgba(51, 65, 85, 0.1)';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project Status Indicator */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: project.statusColor,
                            boxShadow: `0 0 0 4px rgba(51, 65, 85, 0.2)`,
                            animation: project.status === '2025' ? 'bounce 2s infinite' : 'none'
                        }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;