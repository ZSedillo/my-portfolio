import React, { useEffect } from 'react';

function Education() {
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
        <div style={{ padding: '100px 0', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 className="section-load-left" style={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                marginBottom: '25px',
                textAlign: 'center',
                color: '#001011'
            }}>Education</h1>

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
                }}>Present</div>
                <div className="experience-content" style={{ marginLeft: '20px' }}>
                    <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>University of Santo Tomas</h2>
                    <h3 style={{ margin: '5px 0', fontSize: '18px', color: '#747274' }}>Computer Science Student</h3>
                    <ul style={{ padding: 0, marginTop: '10px', listStyleType: 'none' }}>
                        <li style={{ marginBottom: '5px' }}>Learned basics of HTML and CSS</li>
                        <li style={{ marginBottom: '5px' }}>Learned Java, basics of PHP and XAMPP, MySQL</li>
                        <li>Worked on website projects using HTML, CSS, Java, Derby, and SQL with two databases connected</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;