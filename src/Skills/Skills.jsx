import React, { useState, useEffect } from 'react';
import FrontEndLogo from '../assets/images/web-development.png';
import BackEndLogo from '../assets/images/servers.png';
import GameLogo from '../assets/images/console.png';

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

const title = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: '62.5px',
    marginTop: '150px',
    marginBottom: '25px',
    textAlign: 'center',
};

const skillTitle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '25px',
    textAlign: 'center',
};

const skillSubTitle = {
    color: '#662E9B',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '15px',
    textAlign: 'center',
};

const skillParagraph = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: '14px',
    textAlign: 'center',
};

const skillList = {
    textAlign: 'center',
    padding: 0,
    fontWeight: 500,
    fontSize: '15px',
    listStyleType: 'none',
};

const imageWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
};

const Logo = {
    width: '50px',
    height: '50px',
};

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '550px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
}));

const Skills = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <div id="Skill">
                <h1 className="section-load-left" style={title}>My Skills</h1>
            </div>
            <div style={{ backgroundColor: 'white', padding: '100px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Box className="section-load-left" sx={{ flexGrow: 1 }} style={{ margin: isSmallScreen ? '0 10px' : '0 100px' }}>
                    <Grid container spacing={4}>
                        {[{
                            logo: FrontEndLogo,
                            title: 'Frontend Development',
                            description: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
                            skills: ['HTML & CSS', 'JavaScript', 'Vite + React', 'Bootstrap'],
                            tools: ['VSCode', 'NetBeans']
                        }, {
                            logo: BackEndLogo,
                            title: 'Backend Development',
                            description: 'I enjoy building robust and scalable backend systems to support dynamic web applications.',
                            skills: ['Java', 'Node.JS', 'Python', 'MongoDB'],
                            tools: ['MongoDB Compass', 'Glassfish', 'Postman', 'Putty']
                        }, {
                            logo: GameLogo,
                            title: 'Game Development',
                            description: 'I have experience in creating interactive games and simulations, bringing virtual worlds to life.',
                            skills: ['C#', 'Lua'],
                            tools: ['Unity', 'Roblox Studio']
                        }].map((skill, index) => (
                            <Grid key={index} item lg={4} md={6} sm={12}>
                                <Item>
                                    <div style={imageWrapper}>
                                        <img style={Logo} src={skill.logo} alt={`${skill.title} Logo`} />
                                    </div>
                                    <h4 style={skillTitle}>{skill.title}</h4>
                                    <p style={skillParagraph}>{skill.description}</p>
                                    <h4 style={skillSubTitle}>Programming Languages:</h4>
                                    <ul style={skillList}>{skill.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
                                    <h5 style={skillSubTitle}>Tools:</h5>
                                    <ul style={skillList}>{skill.tools.map((t, i) => <li key={i}>{t}</li>)}</ul>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default Skills;