import React, { useState, useEffect } from 'react';
import Laptop from '../assets/images/laptop.jpg'

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
        gridTemplateColumns: isSmallScreen ? '500px' : '450px 480px',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:'150px',
    };
    
    const laptopStyle = {
        borderRadius:'50%',
        width:'300px',
        height:'300px',
    }

    const aboutParagraph = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '13px',
        textAlign: 'center',
    };

    return(
        <>
            <div style={{marginBottom:'100px'}}>
                <h1 style={title}>About Me</h1>
                <div style={gridStyle}>
                    <div>
                        <img style={laptopStyle} src={Laptop} alt="Laptop" />
                    </div>
                    <div style={{backgroundColor: '#F4EBE8', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
                        <p style={aboutParagraph}>Hi I am Zandro, a dedicated and skilled developer who is keen on front-end and back-end parts. 
                            Among the special skills that I have include program debugging as well as program optimization. 
                            In other words, self-education and embracing the new advancements in the industry, its strategies, 
                            and tools are not passive but are practiced actively by me. I have good technical skills and I am analytical 
                            in my work and also detail oriented, which is a very good combination for high performance.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About