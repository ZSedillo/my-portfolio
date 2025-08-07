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

function Education() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [hoveredEducation, setHoveredEducation] = useState(null);

    const educationData = [
        {
            period: 'Present',
            institution: 'University of Santo Tomas',
            degree: 'Computer Science Student',
            description: 'Currently pursuing Computer Science with focus on full-stack development and database management systems.',
            achievements: [
                'Learned fundamentals of web development with HTML and CSS',
                'Gained proficiency in Java programming and object-oriented concepts',
                'Explored server-side development with PHP and XAMPP environment',
                'Mastered database management using MySQL and Derby databases',
                'Developed comprehensive website projects integrating multiple technologies',
                'Built projects with dual database connectivity and SQL operations'
            ],
            technologies: ['HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Derby', 'SQL', 'XAMPP'],
            status: 'Ongoing',
            icon: '🎓',
            cardGradient: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
            statusColor: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
            institutionColor: '#7c3aed'
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
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif'
    };

    const underlineStyle = {
        width: '120px',
        height: '4px',
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        margin: '0 auto',
        borderRadius: '2px'
    };

    const educationContainerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: isSmallScreen ? '0 20px' : '0 40px',
        position: 'relative'
    };

    const educationCardStyle = (education, isHovered) => ({
        position: 'relative',
        background: education.cardGradient,
        borderRadius: '24px',
        padding: isSmallScreen ? '32px 24px' : '40px 32px',
        marginBottom: '32px',
        boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(124, 58, 237, 0.25), 0 0 0 1px rgba(124, 58, 237, 0.1)' 
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        cursor: 'pointer',
        overflow: 'hidden'
    });

    const educationHeaderStyle = {
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
        boxShadow: isHovered ? '0 8px 25px -8px rgba(124, 58, 237, 0.6)' : '0 4px 15px -4px rgba(124, 58, 237, 0.3)'
    });

    const titleSectionStyle = {
        flex: 1
    };

    const institutionStyle = {
        fontSize: isSmallScreen ? '24px' : '32px',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: '0 0 8px 0',
        fontFamily: 'Poppins, sans-serif'
    };

    const degreeStyle = {
        fontSize: isSmallScreen ? '16px' : '20px',
        color: '#7c3aed',
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
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        marginRight: '16px',
        marginTop: '8px',
        flexShrink: 0,
        boxShadow: '0 0 8px rgba(124, 58, 237, 0.3)'
    };

    const technologiesStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '20px'
    };

    const techTagStyle = {
        background: 'rgba(124, 58, 237, 0.1)',
        color: '#7c3aed',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '600',
        border: '1px solid rgba(124, 58, 237, 0.2)',
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
        boxShadow: '0 0 0 4px rgba(124, 58, 237, 0.2)',
        animation: 'pulse 2s infinite'
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
        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
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
        background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
        opacity: '0.05',
        zIndex: 0
    };

    return (
        <div style={containerStyle}>
            {/* Background Decorations */}
            <div style={backgroundDecorationStyle}></div>
            <div style={backgroundDecoration2Style}></div>
            
            {/* Header */}
            <div style={headerStyle}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    marginBottom: '30px',
                    border: '1px solid rgba(124, 58, 237, 0.2)'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                        animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{
                        fontSize: '14px',
                        color: '#7c3aed',
                        fontWeight: '600',
                        fontFamily: 'Poppins, sans-serif'
                    }}>Academic Background</span>
                </div>
                <h1 style={titleStyle}>Education</h1>
                <div style={underlineStyle}></div>
            </div>

            {/* Education Timeline */}
            <div style={educationContainerStyle}>
                {educationData.map((education, index) => (
                    <div
                        key={index}
                        style={educationCardStyle(education, hoveredEducation === index)}
                        onMouseEnter={() => setHoveredEducation(index)}
                        onMouseLeave={() => setHoveredEducation(null)}
                    >
                        {/* Decorative background elements */}
                        <div style={decorativeCircleStyle('140px', education.statusColor, { top: '-70px', right: '-70px' })}></div>
                        <div style={decorativeCircleStyle('100px', 'linear-gradient(135deg, #3b82f6, #7c3aed)', { bottom: '-50px', left: '-50px' })}></div>
                        
                        {/* Education Header */}
                        <div style={educationHeaderStyle}>
                            <div style={periodBadgeStyle(education.statusColor, hoveredEducation === index)}>
                                <span style={{ fontSize: '20px' }}>{education.icon}</span>
                                {education.period}
                            </div>
                            <div style={titleSectionStyle}>
                                <h2 style={institutionStyle}>{education.institution}</h2>
                                <h3 style={degreeStyle}>{education.degree}</h3>
                            </div>
                        </div>

                        {/* Education Description */}
                        <p style={descriptionStyle}>{education.description}</p>

                        {/* Achievements */}
                        <ul style={achievementsListStyle}>
                            {education.achievements.map((achievement, i) => (
                                <li key={i} style={achievementItemStyle}>
                                    <div style={bulletStyle}></div>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <div style={technologiesStyle}>
                            {education.technologies.map((tech, i) => (
                                <span key={i} style={techTagStyle}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Status Indicator */}
                        <div style={statusIndicatorStyle(education.statusColor)}></div>
                    </div>
                ))}
            </div>

            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                
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

export default Education;