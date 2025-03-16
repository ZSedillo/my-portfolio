import React, { useState, useEffect } from 'react';
import ProfilePicture from '../assets/images/sideface.png';
import Nav from 'react-bootstrap/Nav';

// Custom hook for media query
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
};

const StartingPage = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-down").forEach(element => {
                if (isInView(element)) {
                    element.classList.add("section-load-down--visible");
                } else {
                    element.classList.remove("section-load-down--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight - 150;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check for elements in view

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="section-load-down"
            style={{
                display: 'grid',
                gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)',
                gridTemplateAreas: isSmallScreen ? '"profile" "text"' : '"text profile"',
                gap: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isSmallScreen ? '50px 20px' : '100px 80px',
                textAlign: isSmallScreen ? 'center' : 'left',
                backgroundColor: '#F9F9F9'
            }}
        >
            <div style={{ gridArea: 'text', paddingLeft: isSmallScreen ? '0%' : '10%' }}>
                <p style={{
                    color: '#0A090C',
                    fontSize: isSmallScreen ? '26px' : '34px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.4',
                    marginBottom: '20px'
                }}>
                    I'm <span style={{
                        color: '#2A2B2A',
                        fontSize: isSmallScreen ? '36px' : '48px',
                        fontFamily: 'Anton, sans-serif',
                        fontWeight: 900
                    }}>Zandro Sedillo</span><br />
                    Full Stack Developer &<br />Game Developer
                </p>
                <Nav.Link href="#Contacts">
                    <button
                        style={{
                            backgroundColor: isHovered ? '#2A2B2A' : '#0A090C',
                            border: 'none',
                            borderRadius: '12px',
                            color: '#FFFFFF',
                            fontSize: '18px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            width: '160px',
                            height: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: isHovered ? '0px 8px 20px rgba(0, 0, 0, 0.3)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Contact Me
                    </button>
                </Nav.Link>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                gridArea: 'profile'
            }}>
                <img
                    src={ProfilePicture}
                    alt="Profile Picture"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: isSmallScreen ? '80%' : '600px',
                        borderRadius: '10px',
                        filter: 'drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.2))'
                    }}
                />
            </div>
        </div>
        <hr style={{ margin: '50px auto', width: '80%', border: '1px solid rgba(0, 0, 0, 0.1)' }} />
        </>
    );
};

export default StartingPage;
