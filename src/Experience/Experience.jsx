import React, { useEffect } from 'react';

function Experience() {
    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll(".section-load-left").forEach(dataLoad => {
                if (isInView(dataLoad)) {
                    dataLoad.classList.add("section-load-left--visible");
                } else {
                    dataLoad.classList.remove("section-load-left--visible");
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
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{  }}>
            <h1 className="section-load-left" style={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                marginTop: '100px',
                marginBottom: '25px',
                textAlign: 'center',
                color: '#001011'
            }}>Experience</h1>

            <div className="experience-item section-load-left" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                margin: '20px auto',
                maxWidth: '800px'
            }}>
                <div style={{
                    backgroundColor: '#001011',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80px',
                    height: '40px',
                    borderRadius: '5px',
                    fontSize: '15px',
                    fontWeight: 'bold'
                }}>2024</div>
                <div className="experience-content" style={{ marginLeft: '20px' }}>
                    <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Full Stack Developer Intern</h2>
                    <h3 style={{ margin: '5px 0', fontSize: '18px', color: '#747274' }}>Fildev</h3>
                    <ul style={{ padding: 0, marginTop: '10px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '5px' }}>Developed and managed APIs, contributing to both front-end and back-end</li>
                        <li style={{ marginBottom: '5px' }}>Assisted with UI/UX design and implemented features</li>
                        <li style={{ marginBottom: '5px' }}>Worked on server management using Putty and SSH</li>
                        <li style={{ marginBottom: '5px' }}>Utilized MongoDB Compass for database management</li>
                        <li>Gained proficiency in version control with GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
