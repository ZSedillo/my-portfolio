import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.png';

// Function to determine if the screen width is below 768px
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

const StartingPage = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const [isHovered, setIsHovered] = useState(false);

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const introStyle = {
        color: '#0A090C',
        fontSize: '30px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        padding: '195.5px 0 0'
    };

    const nameStyle = {
        color: '#2A2B2A',
        fontSize: '40px',
        fontFamily: 'Anton", sans-serif',
        fontWeight: '900',
        fontStyle: 'normal',
    };

    const buttonStyle = {
        backgroundColor: isHovered ? '#EFDECD' : '#F4EBE8',
        border: 'none',
        borderRadius: '10px',
        color: '#0A090C',
        fontSize: '20px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        width: '139.5px',
        height: '48px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    
    const profileContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '300px', // Ensure there's enough space for the image
    };

    const profileIMG = {
        width: '100%', 
        height: 'auto', 
        maxWidth: '700px', 
        marginTop: '200px',
    };
    

    return (
        <>
            <div style={gridStyle}>
                <div style={{ paddingLeft: isSmallScreen? '0%' :'10%' }}>
                    <p style={introStyle}>I'm <span style={nameStyle}>Zandro Sedillo</span><br/>Full Stack Developer & <br/>Game Developer</p>
                    <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Contact Me</button>
                </div>
                <div style={profileContainer}>
                    <div>
                        <img style={profileIMG} src={ProfilePicture} alt="ProfilePicture" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartingPage;
