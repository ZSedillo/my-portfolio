import React, { useState, useEffect } from 'react';
import Laptop from '../assets/images/laptop.png';
import DownloadLogo from '../assets/images/download.png';
import Resume from '../assets/resume/Sedillo_CV.pdf';

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

const About = () => {
    const isSmallScreen = useMediaQuery('(max-width: 1000px)');

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-up").forEach((element) => {
                if (isInView(element)) {
                    element.classList.add("section-load-up--visible");
                } else {
                    element.classList.remove("section-load-up--visible");
                }
            });
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight - 120;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="" className="section-load-up" style={{ marginBottom: '120px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '60px', marginTop: '150px', color: '#333' }}>
                About Me
            </h1>   
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isSmallScreen ? '1fr' : '450px 480px',
                    gap: '16px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '120px',
                }}
            >
                <img
                    src={Laptop}
                    alt="Laptop"
                    style={{ width: '100%', maxWidth: '700px', height: 'auto', borderRadius: '8px' }}
                />
                <div
                    style={{
                        backgroundColor: '#FFF',
                        padding: '25px',
                        borderRadius: '10px',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                        textAlign: 'left'
                    }}
                >
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                        Hi, I am Zandro, a passionate developer specializing in front-end and back-end development.
                        My expertise lies in program debugging, optimization, and continuous learning. I actively
                        embrace new technologies, strategies, and tools to stay ahead in the industry. With strong
                        analytical skills and attention to detail, I am committed to delivering high-quality solutions.
                    </p>
                    <button
                        style={{
                            backgroundColor: '#971A8B',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#FFF',
                            padding: '12px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            margin: 'auto',
                            cursor: 'pointer',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            transition: 'background-color 0.3s ease-in-out'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7C1471'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#971A8B'}
                    >
                        <a
                            href={Resume}
                            download="Sedillo_CV"
                            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                        >
                            Download CV
                            <img
                                src={DownloadLogo}
                                alt="Download Logo"
                                style={{ width: '20px', height: '20px', marginLeft: '8px' }}
                            />
                        </a>
                    </button>
                </div>
            </div>
            <hr style={{ margin: '50px auto', width: '80%', border: '1px solid rgba(0, 0, 0, 0.1)' }} />
        </section>
    );
};

export default About;
