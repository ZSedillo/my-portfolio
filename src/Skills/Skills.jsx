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
            gradient: 'linear-gradient(135deg, #9333ea, #3b82f6)'
        },
        {
            icon: '⚙️',
            title: 'Backend Development', 
            description: 'I enjoy building robust and scalable backend systems to support dynamic web applications.',
            skills: ['Java', 'Node.JS', 'Express.JS', 'AWS S3', 'Python', 'MongoDB'],
            tools: ['MongoDB Compass','Amazon Web Services', 'Glassfish', 'Postman', 'Putty'],
            gradient: 'linear-gradient(135deg, #3b82f6, #7c3aed)'
        },
        {
            icon: '🎮',
            title: 'Game Development',
            description: 'I have experience in creating interactive games and simulations, bringing virtual worlds to life.',
            skills: ['C#', 'Lua','GDScript'],
            tools: ['Unity', 'Roblox Studio','Godot Engine'],
            gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)'
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

    const gridContainerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isSmallScreen ? '0 24px' : '0 32px'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : isMediumScreen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '32px'
    };

    const cardStyle = (gradient, isHovered) => ({
        position: 'relative',
        background: 'white',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        border: '1px solid #f1f5f9',
        cursor: 'pointer'
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
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease'
    });

    const cardTitleStyle = (isHovered) => ({
        fontSize: '24px',
        fontWeight: 'bold',
        color: isHovered ? '#7c3aed' : '#1f2937',
        textAlign: 'center',
        marginBottom: '16px',
        transition: 'color 0.3s ease',
        fontFamily: 'Poppins, sans-serif'
    });

    const descriptionStyle = {
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: '24px',
        lineHeight: '1.6',
        fontSize: '14px',
        fontFamily: 'Poppins, sans-serif'
    };

    const sectionTitleStyle = {
        fontSize: '18px',
        fontWeight: '600',
        color: '#7c3aed',
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
        padding: '6px 12px',
        background: '#ede9fe',
        color: '#7c3aed',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        transition: 'background-color 0.2s ease',
        fontFamily: 'Poppins, sans-serif'
    };

    const toolTagStyle = {
        padding: '6px 12px',
        background: '#dbeafe',
        color: '#3b82f6',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        transition: 'background-color 0.2s ease',
        fontFamily: 'Poppins, sans-serif'
    };

    const decorativeElementStyle = (size, color, position, animationDelay) => ({
        position: 'absolute',
        ...position,
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
        opacity: '0.3',
        animation: `pulse 2s infinite ${animationDelay}`
    });

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={containerStyle} id="Skills">
            <style>
                {`
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
                `}
            </style>
            
            {/* Skills Header */}
            <div style={headerStyle}>
                <h1 style={titleStyle}>My Skills</h1>
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
                                    Programming Languages:
                                </h4>
                                <div style={tagContainerStyle}>
                                    {skill.skills.map((s, i) => (
                                        <span
                                            key={i}
                                            style={skillTagStyle}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = '#c4b5fd'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = '#ede9fe'}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools Section */}
                            <div>
                                <h5 style={sectionTitleStyle}>
                                    Tools:
                                </h5>
                                <div style={tagContainerStyle}>
                                    {skill.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            style={toolTagStyle}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = '#bfdbfe'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = '#dbeafe'}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative dots */}
                            <div style={{...decorativeElementStyle('8px', '#c084fc', {top: '16px', right: '16px'}, '0s')}}></div>
                            <div style={{...decorativeElementStyle('12px', '#60a5fa', {bottom: '16px', left: '16px'}, '0.5s')}}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Decorative Elements */}
            <div style={{position: 'relative', marginTop: '80px'}}>
                <div style={{...decorativeElementStyle('80px', '#c084fc', {left: '40px', top: '40px'}, '0s')}}></div>
                <div style={{...decorativeElementStyle('64px', '#60a5fa', {right: '80px', top: '20px'}, '1s')}}></div>
                <div style={{...decorativeElementStyle('48px', '#f472b6', {left: '50%', top: '48px', transform: 'translateX(-50%)'}, '2s')}}></div>
            </div>
        </div>
    );
};

export default Skills;