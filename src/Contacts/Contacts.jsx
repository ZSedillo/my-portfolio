import React, { useState, useEffect } from 'react';
import './Contacts.css';
import Mail from '../assets/images/mail.png';
import Phone from '../assets/images/iphone.png';
import LinkedIn from '../assets/images/linkedIn.png';
import Github from '../assets/images/github.png'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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


function Contacts() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const [isHovered, setIsHovered] = useState(false);
    const title = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '100px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const contactTitle = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '25px',
        textAlign: 'center',
    };

    const contactInfo = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '13px',
        textAlign: 'center',
    };

    const imageWrapper = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px', // Optional
    };

    const colStyle = {
        backgroundColor: '#F4EDEA',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow here
    };

    const Logo = {
        width: '50px',
        height: '50px',
    };



    const contactContainer = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
        width: '100%',
        margin: '0 auto'
    };

    const buttonContainer = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    };

    const buttonStyle = {
        backgroundColor: isHovered ? '#F0F0F0' : '#EFDECD',
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

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
    }));
    
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

    return (
        <>
        <div className='section-load-up'>
        <div id="Contacts">
                <h6 style={title}>Contacts</h6>
            </div>
            <div style={contactContainer}>

                <div>
                    
                </div>
                <div style={breakPoint}>
                    <h1 id="Contacts-Section" style={subTitle}>Got a Vision? Let’s Bring it to Life!</h1>
                    <p style={{ color: '#0A090C' }}>Get in touch in the way that suits you best, and we'll explore your project in depth.</p>                 
                </div>
                    <hr style={breakPoint} />

                    <br />
                    <Box sx={{ flexGrow: 1 }} style={{ margin: isSmallScreen ? '0 10px' : '0 100px' }}>
                    <Grid container spacing={4}>        
                        <Grid item lg={6} sm={12}>
                            <Grid container spacing={4}>

                                <Grid item lg={6} md={6} xs={12}>
                                {/* <a href="" className="unstyled-link"> */}
                                    <Item style={colStyle}>
                                        <div style={imageWrapper}>
                                            <img style={Logo} src={Mail} alt="Mail Logo" />
                                        </div>
                                        <div>
                                            <h4 style={contactTitle}>Email Address</h4>
                                            <p style={contactInfo}>sedillozandro720@gmail.com</p>
                                        </div>
                                    </Item>
                                    {/* </a> */}
                                </Grid>

                                <Grid item lg={6} md={6} xs={12}>
                                    {/* <a href="" className="unstyled-link"> */}
                                    <Item style={colStyle}>
                                        <div style={imageWrapper}>
                                            <img style={Logo} src={Phone} alt="Phone Logo" />
                                        </div>
                                        <div>
                                            <h4 style={contactTitle}>Phone Number</h4>
                                            <p style={contactInfo}>(63+) 09770311641</p>
                                        </div>
                                    </Item>
                                    {/* </a> */}
                                </Grid>
                                <Grid item lg={6} md={6} xs={12}>
                                    <a href="https://www.linkedin.com/in/zandro-sedillo-1bbb52279/" className="unstyled-link">
                                    <Item style={colStyle}>
                                        <div style={imageWrapper}>
                                            <img style={Logo} src={LinkedIn} alt="LinkedIn Logo" />
                                        </div>
                                        <div>
                                            <h4 style={contactTitle}>LinkedIn</h4>
                                            <p style={contactInfo}>https://www.linkedin.com/in/zandro-sedillo-1bbb52279/</p>
                                        </div>
                                    </Item>
                                    </a>
                                </Grid>
                                <Grid item lg={6} md={6} xs={12}>
                                    <a href="https://github.com/ZSedillo" className="unstyled-link">
                                    <Item style={colStyle}>
                                        <div style={imageWrapper}>
                                            <img style={Logo} src={Github} alt="Github Logo" />
                                        </div>
                                        <div>
                                            <h4 style={contactTitle}>Github</h4>
                                            <p style={contactInfo}>https://github.com/ZSedillo</p>
                                        </div>
                                    </Item>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} sm={12}>
                        <div>
                            <h1 style={{ textAlign: 'center',backgroundColor:'#FFFFF', color:'black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>Email Me</h1>
                        </div>
                        <br />
                        <form action="https://api.web3forms.com/submit" method="POST" style={formStyle}>
                        <input type="hidden" name="access_key" value="a0376732-b681-486f-9884-5cee5fddcf28"></input>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" name="subject" placeholder='...' required />
                                    <div className="underline"></div>
                                    <label>Subject</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="email" name="user-email" placeholder='...' required />
                                    <div className="underline"></div>
                                    <label>Your Email</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data textarea">
                                    <textarea rows="8" cols="80"  required name="user-message" placeholder='...'></textarea>
                                    <div className="underline"></div>
                                    <label>Write your message</label>
                                </div>
                            </div>
                            <div style={buttonContainer}>
                                <button style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Contact Me</button>
                            </div>
                        </form>
                        </Grid>

                    </Grid>
                    </Box>

            </div>
        </div>
        </>
    )
}

export default Contacts;
