import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.png';
import Nav from 'react-bootstrap/Nav';

// Function to determine if the screen width is below 900px
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

    // Define grid areas based on screen size
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)',
        gridTemplateAreas: isSmallScreen ? 
            `"profile" "text"` : 
            `"text profile"`,
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
        backgroundColor: isHovered ? '#EFDECD' : '#F0F0F0',
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
        gridArea: 'profile', // Assign to the grid area
    };

    const profileIMG = {
        width: '100%', 
        height: 'auto', 
        maxWidth: '700px', 
        marginTop: '200px',
    };

    const textContainer = {
        paddingLeft: isSmallScreen ? '0%' : '10%',
        gridArea: 'text', // Assign to the grid area
    };

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-down").forEach(dataLoad => {
                if (isInView(dataLoad)) {
                    dataLoad.classList.add("section-load-down--visible");
                } else {
                    dataLoad.classList.remove("section-load-down--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
            );
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check in case the elements are already in view

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="section-load-down" style={gridStyle}>
                <div style={textContainer}>
                    <p style={introStyle}>
                        I'm <span style={nameStyle}>Zandro Sedillo</span><br/>
                        Full Stack Developer &<br/>Game Developer
                    </p>
                    <Nav.Link href="#Contacts-Section">
                        <button 
                            style={buttonStyle} 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Contact Me
                        </button>
                    </Nav.Link>
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
