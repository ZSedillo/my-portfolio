import React, { useState, useEffect } from 'react';
import './Experience.css';
import { height } from '@mui/system';
import zIndex from '@mui/material/styles/zIndex';

function Experience() {
    const title = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '100px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const box = {
        backgroundColor: '#001011',
        color: '#ffff',
        display: 'flex',
        width: '60px',
        justifyContent: 'center',
        marginLeft:'20px',
        marginRight:'20px',
    };

    const year = {
        color: '#ffff',
        fontSize: '15px',
        lineHeight: '37px',
        zIndex:'2',
    };


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
        handleScroll(); // Initial check in case the elements are already in view

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);      

    return (
        <>
            <div>
                <h1 style={title} className='section-load-left'>Experience</h1>
            </div>
            <div style={{ backgroundColor: '#FFFF', padding: '100px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className="experience-item section-load-left">
                    <div className='shape-container'>
                        <div style={box}><h5 style={year}>2024</h5></div>
                        {/* <div className='triangle'></div>
                        <div className='circle'></div>
                        <div className='vertical-line'></div> */}
                    </div>
                    <div className="experience-content">
                        <h2>Full Stack Developer Intern</h2>
                        <h3>Fildev</h3>
                        <br />
                        <ul>
                            <li>Developed and managed APIs, contributing to both front-end and back-end</li>
                            <li>Assisted with UI/UX design and implemented features.</li>
                            <li>Worked on server management using Putty and SSH.</li>
                            <li>Utilized MongoDB Compass for database management.</li>
                            <li>Gained proficiency in version control with GitHub.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
