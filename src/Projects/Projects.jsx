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
    const [hoveredProject, setHoveredProject] = useState(null);

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
            statusColor: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
            cardGradient: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
            icon: '🏫'
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
            statusColor: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
            cardGradient: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
            icon: '📚'
        }
    ];

    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc, #e0e7ff)',
        padding: '80px 0'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '80px'
    };

    const titleStyle = {
        fontSize: isSmallScreen ? '48px' : '64px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif'
    };

    const underlineStyle = {
        width: '96px',
        height: '4px',
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        margin: '0 auto',
        borderRadius: '2px'
    };

    const projectsContainerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: isSmallScreen ? '0 20px' : '0 40px'
    };

    const projectCardStyle = (project, isHovered) => ({
        position: 'relative',
        background: project.cardGradient,
        borderRadius: '24px',
        padding: isSmallScreen ? '24px' : '32px',
        marginBottom: '32px',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        cursor: 'pointer',
        overflow: 'hidden'
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
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        fontFamily: 'Poppins, sans-serif'
    });

    const projectTitleStyle = {
        fontSize: isSmallScreen ? '20px' : '28px',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: 0,
        fontFamily: 'Poppins, sans-serif',
        flex: 1
    };

    const descriptionStyle = {
        fontSize: '16px',
        color: '#6b7280',
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
        fontSize: '14px',
        color: '#374151',
        lineHeight: '1.6',
        fontFamily: 'Poppins, sans-serif'
    };

    const bulletStyle = {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
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

    const techTagStyle = {
        background: 'rgba(124, 58, 237, 0.1)',
        color: '#7c3aed',
        padding: '6px 12px',
        borderRadius: '16px',
        fontSize: '12px',
        fontWeight: '500',
        border: '1px solid rgba(124, 58, 237, 0.2)',
        fontFamily: 'Poppins, sans-serif'
    };

    const decorativeCircleStyle = (size, color, position) => ({
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity: '0.1',
        ...position
    });

    return (
        <div style={containerStyle} id="Projects">
            {/* Projects Header */}
            <div style={headerStyle}>
                <h1 style={titleStyle}>Projects</h1>
                <div style={underlineStyle}></div>
            </div>

            {/* Projects List */}
            <div style={projectsContainerStyle}>
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        style={projectCardStyle(project, hoveredProject === index)}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* Decorative background elements */}
                        <div style={decorativeCircleStyle('120px', project.statusColor, { top: '-60px', right: '-60px' })}></div>
                        <div style={decorativeCircleStyle('80px', 'linear-gradient(135deg, #3b82f6, #7c3aed)', { bottom: '-40px', left: '-40px' })}></div>
                        
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
                                <span key={i} style={techTagStyle}>
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
                            boxShadow: '0 0 0 4px rgba(124, 58, 237, 0.2)',
                            animation: project.status === '2025' ? 'pulse 2s infinite' : 'none'
                        }}></div>
                    </div>
                ))}
            </div>

            <style>
                {`
                @keyframes pulse {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% { 
                        transform: scale(1.1);
                        opacity: 0.8;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Projects;