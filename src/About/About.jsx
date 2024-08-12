import React, { useState, useEffect } from 'react';
import Laptop from '../assets/images/laptop.png'
import { colors } from '@mui/material';
import DownloadLogo from '../assets/images/download.png'

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


const About = () => {
    const isSmallScreen = useMediaQuery('(max-width: 1000px)');

    const title = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '300px',
        textAlign: 'center',
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '0.8fr' : '450px 480px',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:'150px',
    };
    
    const laptopStyle = {
        width: '100%',
        height: 'auto',
        maxWidth: '700px',
        zIndex:'1',
    };

    const aboutParagraph = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '13px',
        textAlign: 'center',
        zIndex:'-1',
    };

    const buttonStyle = {
        backgroundColor:'#971A8B',
        border:'none',
        borderRadius:'10px',
        color:'#FFFF',
        padding:'10px 20px',
    }

    const downloadLogo = {
        marginLeft:'10px',
        width:'20px',
        height:'20px',
    }

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-up").forEach(dataLoad => {
                if (isInView(dataLoad)) {
                    dataLoad.classList.add("section-load-up--visible");
                } else {
                    dataLoad.classList.remove("section-load-up--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.top < (window.innerHeight - 120 || document.documentElement.clientHeight - 120)
            );
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check in case the elements are already in view

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);    

    return(
        <>
            <div id="About" className="section-load-up" style={{marginBottom:'100px'}}>
                <h1 style={title}>About Me</h1>
                <div style={gridStyle}>
                    <div>
                        <img style={laptopStyle} src={Laptop} alt="Laptop" />
                    </div>
                    <div style={{backgroundColor: '#FFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
                    <p style={aboutParagraph}>
                        Hi I am Zandro, a dedicated and skilled developer who is keen on front-end and back-end parts. 
                        Among the special skills that I have include program debugging as well as program optimization. 
                        In other words, self-education and embracing the new advancements in the industry, its strategies, 
                        and tools are not passive but are practiced actively by me. I have good technical skills and I am analytical 
                        in my work and also detail oriented, which is a very good combination for high performance.
                    </p>
                    <div style={{display:'absolute'}}>
                        <button style={buttonStyle}>Download CV <img style={downloadLogo} src={DownloadLogo} alt="Download Logo"/></button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About