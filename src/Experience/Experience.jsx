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

function Experience() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [hoveredExperience, setHoveredExperience] = useState(null);

    const experienceData = [
        {
            period: '2024',
            company: 'Fildev',
            position: 'Full Stack Developer Intern',
            description: 'Contributed to full-stack development projects with focus on API development, UI/UX implementation, and database management.',
            achievements: [
                'Developed and managed APIs, contributing to both front-end and back-end',
                'Assisted with UI/UX design and implemented features',
                'Worked on server management using Putty and SSH',
                'Utilized MongoDB Compass for database management',
                'Gained proficiency in version control with GitHub'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'SSH', 'API Development'],
            status: 'Completed',
            icon: '💼',
            cardGradient: 'linear-gradient(135deg, #fef7ff, #f3e8ff)',
            statusColor: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            companyColor: '#8b5cf6'
        }
    ];

    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc, #e0e7ff)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '80px',
        position: 'relative'
    };

    const titleStyle = {
        fontSize: isSmallScreen ? '48px' : '64px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif'
    };

    const underlineStyle = {
        width: '120px',
        height: '4px',
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        margin: '0 auto',
        borderRadius: '2px'
    };

    const experienceContainerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: isSmallScreen ? '0 20px' : '0 40px',
        position: 'relative'
    };

    const experienceCardStyle = (experience, isHovered) => ({
        position: 'relative',
        background: experience.cardGradient,
        borderRadius: '24px',
        padding: isSmallScreen ? '32px 24px' : '40px 32px',
        marginBottom: '32px',
        boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1)' 
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        cursor: 'pointer',
        overflow: 'hidden'
    });

    const experienceHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
    };

    const periodBadgeStyle = (statusColor, isHovered) => ({
        background: statusColor,
        color: 'white',
        padding: '10px 20px',
        borderRadius: '25px',
        fontSize: '16px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
        boxShadow: isHovered ? '0 8px 25px -8px rgba(139, 92, 246, 0.6)' : '0 4px 15px -4px rgba(139, 92, 246, 0.3)'
    });

    const titleSectionStyle = {
        flex: 1
    };

    const companyStyle = {
        fontSize: isSmallScreen ? '24px' : '32px',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: '0 0 8px 0',
        fontFamily: 'Poppins, sans-serif'
    };

    const positionStyle = {
        fontSize: isSmallScreen ? '16px' : '20px',
        color: '#8b5cf6',
        fontWeight: '600',
        margin: 0,
        fontFamily: 'Poppins, sans-serif'
    };

    const descriptionStyle = {
        fontSize: '16px',
        color: '#6b7280',
        marginBottom: '28px',
        lineHeight: '1.7',
        fontStyle: 'italic',
        fontFamily: 'Poppins, sans-serif'
    };

    const achievementsListStyle = {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 28px 0'
    };

    const achievementItemStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '14px',
        fontSize: '15px',
        color: '#374151',
        lineHeight: '1.6',
        fontFamily: 'Poppins, sans-serif'
    };

    const bulletStyle = {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        marginRight: '16px',
        marginTop: '8px',
        flexShrink: 0,
        boxShadow: '0 0 8px rgba(139, 92, 246, 0.3)'
    };

    const technologiesStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '20px'
    };

    const techTagStyle = {
        background: 'rgba(139, 92, 246, 0.1)',
        color: '#8b5cf6',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '600',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        fontFamily: 'Poppins, sans-serif',
        transition: 'all 0.3s ease'
    };

    const statusIndicatorStyle = (statusColor) => ({
        position: 'absolute',
        top: '24px',
        right: '24px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: statusColor,
        boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)'
    });

    const decorativeCircleStyle = (size, color, position) => ({
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity: '0.08',
        ...position
    });

    const backgroundDecorationStyle = {
        position: 'absolute',
        top: '15%',
        right: '8%',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        opacity: '0.05',
        zIndex: 0
    };

    const backgroundDecoration2Style = {
        position: 'absolute',
        bottom: '25%',
        left: '10%',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        opacity: '0.05',
        zIndex: 0
    };

    return (
        <div style={containerStyle} id="Experience">
            {/* Background Decorations */}
            <div style={backgroundDecorationStyle}></div>
            <div style={backgroundDecoration2Style}></div>
            
            {/* Header */}
            <div style={headerStyle}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    marginBottom: '30px',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10B981'
                    }}></div>
                    <span style={{
                        fontSize: '14px',
                        color: '#8b5cf6',
                        fontWeight: '600',
                        fontFamily: 'Poppins, sans-serif'
                    }}>Available for new opportunities</span>
                </div>
                <h1 style={titleStyle}>Experience</h1>
                <div style={underlineStyle}></div>
            </div>

            {/* Experience Timeline */}
            <div style={experienceContainerStyle}>
                {experienceData.map((experience, index) => (
                    <div
                        key={index}
                        style={experienceCardStyle(experience, hoveredExperience === index)}
                        onMouseEnter={() => setHoveredExperience(index)}
                        onMouseLeave={() => setHoveredExperience(null)}
                    >
                        {/* Decorative background elements */}
                        <div style={decorativeCircleStyle('140px', experience.statusColor, { top: '-70px', right: '-70px' })}></div>
                        <div style={decorativeCircleStyle('100px', 'linear-gradient(135deg, #3b82f6, #8b5cf6)', { bottom: '-50px', left: '-50px' })}></div>
                        
                        {/* Experience Header */}
                        <div style={experienceHeaderStyle}>
                            <div style={periodBadgeStyle(experience.statusColor, hoveredExperience === index)}>
                                <span style={{ fontSize: '20px' }}>{experience.icon}</span>
                                {experience.period}
                            </div>
                            <div style={titleSectionStyle}>
                                <h2 style={companyStyle}>{experience.company}</h2>
                                <h3 style={positionStyle}>{experience.position}</h3>
                            </div>
                        </div>

                        {/* Experience Description */}
                        <p style={descriptionStyle}>{experience.description}</p>

                        {/* Achievements */}
                        <ul style={achievementsListStyle}>
                            {experience.achievements.map((achievement, i) => (
                                <li key={i} style={achievementItemStyle}>
                                    <div style={bulletStyle}></div>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <div style={technologiesStyle}>
                            {experience.technologies.map((tech, i) => (
                                <span key={i} style={techTagStyle}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Status Indicator */}
                        <div style={statusIndicatorStyle(experience.statusColor)}></div>
                    </div>
                ))}
            </div>

            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                `}
            </style>
        </div>
    );
}

export default Experience;