import React, { useState } from 'react';
import './Contacts.css';

function Contacts() {
    const [isHovered, setIsHovered] = useState(false);
    const title = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '100px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const contactContainer = {
        backgroundColor: '#F4EBE8',
        padding: '100px 0',
    }

    const breakPoint = {
        width: '90%',
        margin: '0 auto',
    }

    const subTitle = {
        fontSize: '32.5px',
        color: '#747274'
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '80%',
        margin: '0 auto'
    };

    const buttonContainer = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    };

    const buttonStyle = {
        backgroundColor: isHovered ? '#F0F0F0' : '#EAEAEA',
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

    return (
        <>
            <div>
                <h6 style={title}>Contacts</h6>
            </div>
            <div style={contactContainer}>
                <div style={breakPoint}>
                <h1 style={subTitle}>Got a Vision? Let’s Bring it to Life!</h1>
                <p style={{ color: '#0A090C' }}>Get in touch in the way that suits you best, and we'll explore your project in depth.</p>                 
                </div>
                <hr style={breakPoint} />
                <div>

                <div>
                    
                </div>


                <br />
                <form action="#" style={formStyle}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label>Subject</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" required></textarea>
                            <div className="underline"></div>
                            <label>Write your message</label>
                        </div>
                    </div>
                    <div style={buttonContainer}>
                        <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Contact Me</button>
                    </div>
                </form>

                </div>
            </div>
        </>
    )
}

export default Contacts;
