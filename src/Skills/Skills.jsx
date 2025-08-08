import zIndex from '@mui/material/styles/zIndex';
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

const Skills = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isMediumScreen = useMediaQuery('(max-width: 1024px)');

    const skillsData = [
        {
            icon: '💻',
            title: 'Frontend Development',
            description: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
            skills: ['HTML & CSS', 'JavaScript', 'Vite + React', 'Bootstrap'],
            tools: ['VSCode', 'NetBeans'],
            gradient: 'linear-gradient(135deg, #334155, #455973)'
        },
        {
            icon: '⚙️',
            title: 'Backend Development', 
            description: 'I enjoy building robust and scalable backend systems to support dynamic web applications.',
            skills: ['Java', 'Node.JS', 'Express.JS', 'AWS S3', 'Python', 'MongoDB'],
            tools: ['MongoDB Compass','Amazon Web Services', 'Glassfish', 'Postman', 'Putty'],
            gradient: 'linear-gradient(135deg, #455973, #6681a4)'
        },
        {
            icon: '🎮',
            title: 'Game Development',
            description: 'I have experience in creating interactive games and simulations, bringing virtual worlds to life.',
            skills: ['C#', 'Lua','GDScript'],
            tools: ['Unity', 'Roblox Studio','Godot Engine'],
            gradient: 'linear-gradient(135deg, #3f5169, #6681a4)'
        }
    ];

    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
        padding: '80px 0',
        fontFamily: 'Poppins, sans-serif'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '80px',
        position: 'relative'
    };

    const titleStyle = {
        fontSize: isSmallScreen ? '48px' : '64px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #334155, #455973, #6681a4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans-serif'
    };

    const subtitleStyle = {
        fontSize: isSmallScreen ? '16px' : '18px',
        color: '#455973',
        marginBottom: '24px',
        fontWeight: '500'
    };

    const underlineStyle = {
        width: '96px',
        height: '4px',
        background: 'linear-gradient(135deg, #334155, #6681a4)',
        margin: '0 auto',
        borderRadius: '2px'
    };

    const gridContainerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isSmallScreen ? '0 24px' : '0 32px',
        position: 'relative'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : isMediumScreen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '32px'
    };

    const cardStyle = (gradient, isHovered) => ({
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(51, 65, 85, 0.25)' : '0 10px 25px rgba(51, 65, 85, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        border: '1px solid rgba(51, 65, 85, 0.1)',
        cursor: 'pointer',
        overflow: 'hidden'
    });

    const iconContainerStyle = (gradient, isHovered) => ({
        width: '80px',
        height: '80px',
        borderRadius: '16px',
        background: gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px',
        fontSize: '32px',
        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 8px 25px rgba(51, 65, 85, 0.15)'
    });

    const cardTitleStyle = (isHovered) => ({
        fontSize: '24px',
        fontWeight: 'bold',
        color: isHovered ? '#334155' : '#455973',
        textAlign: 'center',
        marginBottom: '16px',
        transition: 'color 0.3s ease',
        fontFamily: 'Poppins, sans-serif'
    });

    const descriptionStyle = {
        color: '#6681a4',
        textAlign: 'center',
        marginBottom: '24px',
        lineHeight: '1.6',
        fontSize: '14px',
        fontFamily: 'Poppins, sans-serif'
    };

    const sectionTitleStyle = {
        fontSize: '16px',
        fontWeight: '600',
        color: '#334155',
        textAlign: 'center',
        marginBottom: '12px',
        fontFamily: 'Poppins, sans-serif'
    };

    const tagContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '24px'
    };

    const skillTagStyle = {
        padding: '8px 16px',
        background: 'rgba(51, 65, 85, 0.1)',
        color: '#334155',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
        border: '1px solid rgba(51, 65, 85, 0.2)'
    };

    const toolTagStyle = {
        padding: '8px 16px',
        background: 'rgba(102, 129, 164, 0.1)',
        color: '#3f5169',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
        border: '1px solid rgba(102, 129, 164, 0.2)'
    };

    const decorativeElementStyle = (size, color, position, animationDelay) => ({
        position: 'absolute',
        ...position,
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
        opacity: '0.2',
        animation: `pulse 3s infinite ${animationDelay}`
    });

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={containerStyle} id="Skills">
            <style>
                {`
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.05); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
                    40%, 43% { transform: translate3d(0, -8px, 0); }
                    70% { transform: translate3d(0, -4px, 0); }
                    90% { transform: translate3d(0, -2px, 0); }
                }
                `}
            </style>
            
            {/* Skills Header */}
            <div style={headerStyle}>
                {/* Status Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '25px',
                    border: '1px solid rgba(51, 65, 85, 0.2)',
                    marginBottom: '32px'
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
                        fontSize: '14px' 
                    }}>
                        Continuously Learning & Growing
                    </span>
                </div>

                <h1 style={titleStyle}>My Skills</h1>
                <p style={subtitleStyle}>Technologies and tools I work with</p>
                <div style={underlineStyle}></div>
            </div>

            {/* Skills Grid */}
            <div style={gridContainerStyle}>
                <div style={gridStyle}>
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            style={cardStyle(skill.gradient, hoveredIndex === index)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Card Background Pattern */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px',
                                height: '100px',
                                background: `linear-gradient(45deg, ${skill.gradient.match(/#[0-9a-f]{6}/gi)?.[0] || '#334155'}15, transparent)`,
                                borderRadius: '0 24px 0 100px',
                                opacity: hoveredIndex === index ? 0.3 : 0.1,
                                transition: 'opacity 0.3s ease'
                            }}></div>

                            {/* Icon Container */}
                            <div style={iconContainerStyle(skill.gradient, hoveredIndex === index)}>
                                <span>{skill.icon}</span>
                            </div>

                            {/* Title */}
                            <h3 style={cardTitleStyle(hoveredIndex === index)}>
                                {skill.title}
                            </h3>

                            {/* Description */}
                            <p style={descriptionStyle}>
                                {skill.description}
                            </p>

                            {/* Skills Section */}
                            <div style={{marginBottom: '24px'}}>
                                <h4 style={sectionTitleStyle}>
                                    Programming Languages
                                </h4>
                                <div style={tagContainerStyle}>
                                    {skill.skills.map((s, i) => (
                                        <span
                                            key={i}
                                            style={skillTagStyle}
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
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools Section */}
                            <div>
                                <h5 style={sectionTitleStyle}>
                                    Tools & Technologies
                                </h5>
                                <div style={tagContainerStyle}>
                                    {skill.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            style={toolTagStyle}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = 'rgba(102, 129, 164, 0.2)';
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = '0 4px 12px rgba(102, 129, 164, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = 'rgba(102, 129, 164, 0.1)';
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative dots */}
                            <div style={{
                                ...decorativeElementStyle('8px', '#334155', {top: '16px', right: '16px'}, '0s')
                            }}></div>
                            <div style={{
                                ...decorativeElementStyle('12px', '#6681a4', {bottom: '16px', left: '16px'}, '0.5s')
                            }}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Elements */}
                <div style={{position: 'relative', marginTop: '80px'}}>
                    <div style={{...decorativeElementStyle('80px', '#334155', {left: '40px', top: '40px', zIndex:1}, '0s')}}></div>
                    <div style={{...decorativeElementStyle('64px', '#455973', {right: '80px', top: '20px', zIndex:1}, '1s')}}></div>
                    <div style={{...decorativeElementStyle('48px', '#3f5169', {left: '50%', top: '48px', transform: 'translateX(-50%)',zIndex:1}, '2s')}}></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;