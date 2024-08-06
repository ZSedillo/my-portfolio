import React, { useState, useEffect } from 'react';
import FrontEndLogo from '../assets/images/web-development.png'
import BackEndLogo from '../assets/images/servers.png'
import GameLogo from '../assets/images/console.png'

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

function Skills() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    const title = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '200px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const skillTitle = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '25px',
        textAlign: 'center',
    };

    const skillSubTitle = {
        color: '#662E9B',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '15px',
        textAlign: 'center',
    };

    const skillParagraph = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '13px',
        textAlign: 'center',
    };

    const skillList = {
        textAlign: 'center',
        padding: 0,
        fontWeight: 600,
        fontSize: '15px',
        listStyleType: 'none',
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


    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '470px',
        display: 'flex',
        flexDirection: 'column',
    }));
      

    return (
        <>
            <div>
                <h1 style={title}>My Skills</h1>
            </div>
            <div style={{backgroundColor:'#F4EBE8', padding:'100px 0'}}>
            <Box sx={{ flexGrow: 1 }} style={{margin:isSmallScreen ?'0 10px':'0 100px'}}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} sm={12}>
                <Item style={colStyle}>
                <div style={imageWrapper}>
                        <img style={Logo} src={FrontEndLogo} alt="Frontend Logo" />
                </div>
                <h4 style={skillTitle}>Frontend Development</h4>
                <p style={skillParagraph}>
                    I like to code things from scratch, and enjoy bringing ideas to life in the browser
                </p>
                <h4 style={skillSubTitle}>Programming Languages:</h4>
                <div>
                    <ul style={skillList}>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                        <li>Vite + React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <h5 style={skillSubTitle}>Frontend Tools:</h5>
                <ul style={skillList}>
                    <li>VSCode</li>
                    <li>Netbeans</li>
                </ul>
                </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item style={colStyle}>
                <div style={imageWrapper}>
                    <img style={Logo} src={BackEndLogo} alt="Backend Logo" />
                </div>
                <h4 style={skillTitle}>Backend Development</h4>
                <p style={skillParagraph}>
                    I enjoy building robust and scalable backend systems to support dynamic and interactive web applications
                </p>
                <h4 style={skillSubTitle}>Programming Languages:</h4>
                <div>
                    <ul style={skillList}>
                        <li>Java</li>
                        <li>Node.JS</li>
                        <li>Python</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <h5 style={skillSubTitle}>Backend Tools:</h5>
                <ul style={skillList}>
                    <li>MongoDBCompass</li>
                    <li>Glassfish</li>
                    <li>Postman</li>
                    <li>Putty</li>
                </ul>            
                </Item>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                <Item style={colStyle}>
                    <div style={imageWrapper}>
                        <img style={Logo} src={GameLogo} alt="Game Logo" />
                    </div>
                    <h4 style={skillTitle}>Game Development</h4>
                    <p style={skillParagraph}>
                        I have experience in creating interactive games and simulations, bringing virtual worlds to life.
                    </p>
                    <h4 style={skillSubTitle}>Programming Languages:</h4>
                    <div>
                        <ul style={skillList}>
                            <li>C#</li>
                            <li>Lua</li>
                        </ul>
                    </div>
                    <h5 style={skillSubTitle}>Game Engines:</h5>
                    <ul style={skillList}>
                        <li>Unity</li>
                        <li>Roblox Studio</li>
                    </ul>
                </Item>
                </Grid>
            </Grid>
            </Box>
            </div>
            
        </>
    );
}

export default Skills;
