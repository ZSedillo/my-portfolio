import React, { useEffect } from 'react';

function Projects() {
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

    const projectStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        margin: '40px auto', // Increased spacing
        maxWidth: '800px'
    };

    return (
        <div id='Projects'>
            <h1 className="section-load-left" style={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                marginTop: '100px',
                marginBottom: '25px',
                textAlign: 'center',
                color: '#001011'
            }}>Projects</h1>

            {/* TeamWeb Project */}
            <div className="experience-item section-load-left" style={projectStyle}>
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
                }}>Present</div>
                <div className="experience-content" style={{ marginLeft: '20px' }}>
                    <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>TeamWeb - School Management Website</h2>
                    <ul style={{ padding: 0, marginTop: '10px', listStyleType: 'none' }}>
                        <li>Currently developing a full-stack web app for pre-registration and appointment booking</li>
                        <li>Implemented API integration for smooth data handling</li>
                        <li>Using React, Node.js, and MongoDB with user authentication</li>
                        <li>Designed for use by students, faculty, and parents within a school setting</li>
                    </ul>
                </div>
            </div>

            {/* Active Learning Portal */}
            <div className="experience-item section-load-left" style={projectStyle}>
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
                    <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Active Learning Portal</h2>
                    <ul style={{ padding: 0, marginTop: '10px', listStyleType: 'none' }}>
                        <li>Developed a web-based learning platform with interactive modules</li>
                        <li>Focused on enhancing student engagement and self-paced learning</li>
                        <li>Incorporated quizzes, learning materials, and basic progress tracking</li>
                        <li>Built using React for the front-end and Firebase for backend/database</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
