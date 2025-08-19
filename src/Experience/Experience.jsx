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
    const isMobile = useMediaQuery('(max-width: 480px)');
    const [hoveredExperience, setHoveredExperience] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const experienceData = [
        {
            period: 'Present',
            company: 'Directorate for Personnel and Records Management',
            position: 'IT Support & Systems Intern',
            description: 'Assisted with hardware troubleshooting, networking setup, and IT support in a government office environment.',
            achievements: [
                'Provided hardware support by diagnosing and troubleshooting computers',
                'Assisted in networking tasks such as setting up Ethernet connections',
                'Supported staff with IT needs, improving workplace efficiency',
                'Gained hands-on exposure to IT systems within a professional environment'
            ],
            technologies: ['Hardware Support', 'Networking Basics', 'Troubleshooting', 'IT Systems'],
            status: 'Present',
            icon: '🖥️',
            cardGradient: 'rgba(255, 255, 255, 0.9)',
            statusColor: 'linear-gradient(135deg, #334155, #455973)',
            companyColor: '#334155'
        },
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
            cardGradient: 'rgba(255, 255, 255, 0.9)',
            statusColor: 'linear-gradient(135deg, #334155, #455973)',
            companyColor: '#334155'
        }
    ];


    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Poppins, sans-serif'
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
        width: '120px',
        height: '4px',
        background: 'linear-gradient(135deg, #334155, #6681a4)',
        margin: '0 auto',
        borderRadius: '2px',
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 1s ease-out 0.4s'
    };

    const experienceContainerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: isMobile ? '0 12px' : isSmallScreen ? '0 20px' : '0 40px',
        position: 'relative'
    };

    const experienceCardStyle = (experience, isHovered) => ({
        position: 'relative',
        background: experience.cardGradient,
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: isMobile ? '24px 20px' : isSmallScreen ? '32px 24px' : '40px 32px',
        marginBottom: '32px',
        boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(51, 65, 85, 0.25), 0 0 0 1px rgba(51, 65, 85, 0.1)' 
            : '0 10px 25px rgba(51, 65, 85, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(51, 65, 85, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        cursor: 'pointer',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
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
        padding: isMobile ? '8px 16px' : '10px 20px',
        borderRadius: '25px',
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
        boxShadow: isHovered ? '0 8px 25px -8px rgba(51, 65, 85, 0.6)' : '0 4px 15px -4px rgba(51, 65, 85, 0.3)'
    });

    const titleSectionStyle = {
        flex: 1
    };

    const companyStyle = {
        fontSize: isMobile ? '20px' : isSmallScreen ? '24px' : '32px',
        fontWeight: 'bold',
        color: '#334155',
        margin: '0 0 8px 0',
        fontFamily: 'Poppins, sans-serif'
    };

    const positionStyle = {
        fontSize: isMobile ? '14px' : isSmallScreen ? '16px' : '20px',
        color: '#455973',
        fontWeight: '600',
        margin: 0,
        fontFamily: 'Poppins, sans-serif'
    };

    const descriptionStyle = {
        fontSize: isMobile ? '14px' : '16px',
        color: '#6681a4',
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
        fontSize: isMobile ? '13px' : '15px',
        color: '#455973',
        lineHeight: '1.6',
        fontFamily: 'Poppins, sans-serif'
    };

    const bulletStyle = {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #334155, #6681a4)',
        marginRight: '16px',
        marginTop: '8px',
        flexShrink: 0,
        boxShadow: '0 0 8px rgba(51, 65, 85, 0.3)'
    };

    const technologiesStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '20px'
    };

    const techTagStyle = {
        background: 'rgba(51, 65, 85, 0.1)',
        color: '#334155',
        padding: isMobile ? '6px 12px' : '8px 16px',
        borderRadius: '20px',
        fontSize: isMobile ? '11px' : '13px',
        fontWeight: '600',
        border: '1px solid rgba(51, 65, 85, 0.2)',
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
        boxShadow: '0 0 0 4px rgba(51, 65, 85, 0.2)'
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

    const backgroundDecorationStyle = {
        position: 'absolute',
        top: '15%',
        right: '8%',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #334155, #455973)',
        opacity: '0.1',
        zIndex: 0,
        animation: 'pulse 4s infinite'
    };

    const backgroundDecoration2Style = {
        position: 'absolute',
        bottom: '25%',
        left: '10%',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #6681a4, #3f5169)',
        opacity: '0.1',
        zIndex: 0,
        animation: 'pulse 4s infinite 1s'
    };

    return (
        <div style={containerStyle} id="Experience">
            <style>
                {`
                @keyframes pulse {
                    0%, 100% { 
                        opacity: 0.1; 
                        transform: scale(1); 
                    }
                    50% { 
                        opacity: 0.2; 
                        transform: scale(1.05); 
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

            {/* Background Decorations */}
            <div style={backgroundDecorationStyle}></div>
            <div style={backgroundDecoration2Style}></div>
            
            {/* Additional floating elements */}
            <div style={decorativeCircleStyle('100px', '#334155', { top: '10%', left: '5%' }, '0s')}></div>
            <div style={decorativeCircleStyle('60px', '#6681a4', { bottom: '15%', right: '15%' }, '2s')}></div>
            
            {/* Header */}
            <div style={headerStyle}>
                {/* Status Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: isMobile ? '6px 12px' : '8px 20px',
                    borderRadius: '25px',
                    marginBottom: '30px',
                    border: '1px solid rgba(51, 65, 85, 0.2)',
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1s ease-out 0.1s'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10B981',
                        animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{
                        fontSize: isMobile ? '12px' : '14px',
                        color: '#334155',
                        fontWeight: '600',
                        fontFamily: 'Poppins, sans-serif'
                    }}>Professional Journey</span>
                </div>

                <h1 style={titleStyle}>Experience</h1>
                <p style={subtitleStyle}>My professional development journey</p>
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
                        {/* Card Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '150px',
                            height: '150px',
                            background: `linear-gradient(45deg, ${experience.companyColor}10, transparent)`,
                            borderRadius: '0 24px 0 150px',
                            opacity: hoveredExperience === index ? 0.3 : 0.1,
                            transition: 'opacity 0.3s ease'
                        }}></div>

                        {/* Decorative background elements */}
                        <div style={decorativeCircleStyle('80px', experience.statusColor, { top: '-40px', right: '-40px' }, '0s')}></div>
                        <div style={decorativeCircleStyle('60px', 'linear-gradient(135deg, #6681a4, #3f5169)', { bottom: '-30px', left: '-30px' }, '1s')}></div>
                        
                        {/* Experience Header */}
                        <div style={experienceHeaderStyle}>
                            <div style={periodBadgeStyle(experience.statusColor, hoveredExperience === index)}>
                                <span style={{ fontSize: isMobile ? '16px' : '20px' }}>{experience.icon}</span>
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
                                <span 
                                    key={i} 
                                    style={techTagStyle}
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

                        {/* Status Indicator */}
                        <div style={statusIndicatorStyle(experience.statusColor)}></div>
                    </div>
                ))}

                {/* Timeline Connector */}
                <div style={{
                    position: 'absolute',
                    left: isMobile ? '20px' : '40px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #334155, #6681a4)',
                    opacity: '0.2',
                    zIndex: -1
                }}></div>
            </div>
        </div>
    );
}

export default Experience;