import React from 'react';
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
        width: '35px',
        height:'40px',
        justifyContent: 'center',
        paddingLeft:'15px',
        marginLeft:'20px',
    };

    const year = {
        color: '#ffff',
        fontSize: '15px',
        lineHeight: '37px',
        zIndex:'2',
    };

    return (
        <>
            <div>
                <h1 style={title}>Experience</h1>
            </div>
            <div style={{ backgroundColor: '#F4EBE8', padding: '100px 0' }}>
                <div className="experience-item">
                    <div className='shape-container'>
                        <div style={box}><h5 style={year}>2024</h5></div>
                        <div className='triangle'></div>
                        <div className='circle'></div>
                        <div className='vertical-line'></div>
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
