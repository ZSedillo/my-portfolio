import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.jpg';

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
        fontSize: '20px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        padding: '195.5px 0 0'
    };

    const nameStyle = {
        color: '#2A2B2A',
        fontSize: '25px',
    };

    const buttonStyle = {
        backgroundColor: '#EAEAEA',
        border: 'none',
        borderRadius: '10px',
        color: '#0A090C',
        fontSize: '20px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        width: '139.5px',
        height: '48px',
    };

    const circle1 = {
        width: '303.5px',
        height: '321px',
        backgroundColor: '#211103',
        borderRadius: '50%',
        position: 'absolute',
        left: isSmallScreen ? '25%': '55%',
        top: isSmallScreen ? '64%':'20%',
        zIndex: -3,
    };

    const circle2 = {
        width: '283px',
        height: '246px',
        backgroundColor: '#F3D34A',
        borderRadius: '50%',
        position: 'absolute',
        left: isSmallScreen ? '31%':'62%',
        top: isSmallScreen ? '63%':'17%',
        zIndex: -1,
    };

    const circle3 = {
        width: '254px',
        height: '208px',
        backgroundColor: '#57737A',
        borderRadius: '50%',
        position: 'absolute',
        left: isSmallScreen ? '29%':'59%',
        top: isSmallScreen ? '90%':'44%',
        zIndex: -2,
    };

    const circle4 = {
        width: '320px',
        height: '260px',
        backgroundColor: '#7B0D1E',
        borderRadius: '50%',
        position: 'absolute',
        left: isSmallScreen ? '31%':'61%',
        top: isSmallScreen ? '80%':'34%',
        zIndex: -3,
    };

    const profileContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '300px', // Ensure there's enough space for the image
    };

    const profileIMG = {
        borderRadius: '100%',
        // position: 'absolute',
        left: isSmallScreen ? '29%':'59%',
        top: isSmallScreen ? '71%':'25%',
        width: '300px',
        height: '300px',
    };

    return (
        <>
            <div style={gridStyle}>
                <div style={{ paddingLeft: isSmallScreen? '0%' :'10%' }}>
                    <p style={introStyle}>
                        I'm <span style={nameStyle}>Zandro Sedillo</span> <br />
                        Full Stack Developer & <br />
                        Game Developer
                    </p>
                    <button style={buttonStyle}>Contact Me</button>
                </div>
                <div style={profileContainer}>
                    {/* <div style={circle1}></div>
                    <div style={circle2}></div>
                    <div style={circle3}></div>
                    <div style={circle4}></div> */}
                    <div>
                        <img style={profileIMG} src={ProfilePicture} alt="ProfilePicture" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartingPage;
