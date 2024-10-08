import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navStyle = {
    padding: '21px 20.5px 0',
    fontSize: '20px',
    fontFamily: 'Inter, sans-serif',
    display: 'inline-block',
    fontWeight: 600, // Semi-bold weight
};

const navLinkStyle = {
    padding: '0 10px',
    textDecoration: 'none',
    color: 'black',
};

const navCollapseStyle = {
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center',
};

const navStyleMobile = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
};

// Define styles for the navbar when scrolling up or down
const fixedNavbarStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    transition: 'top 0.3s ease',
    zIndex: 1000,
    backgroundColor: '#fff', // Set background color here
};

const hiddenNavbarStyle = {
    ...fixedNavbarStyle,
    top: '-60px', // Adjust based on your navbar height
};

function Header() {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Track navbar toggle state

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                setIsScrollingUp(false);
                if (isNavbarOpen) {
                    setIsScrollingUp(true); // Keep navbar visible if it's open
                }
            } else {
                // Scrolling up
                setIsScrollingUp(true);
            }

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, isNavbarOpen]); // Dependency array includes isNavbarOpen

    const handleToggle = () => {
        setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar open/close state
    };

    return (
        <>
            <Navbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary" style={isScrollingUp ? fixedNavbarStyle : hiddenNavbarStyle}>
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav"
                        onClick={handleToggle} // Handle toggle button click
                    />
                    <Navbar.Collapse id="basic-navbar-nav" style={navCollapseStyle} className={isNavbarOpen ? 'show' : ''}>
                        <Nav className="me-auto d-flex flex-lg-row flex-column align-items-center" style={navStyleMobile}>
                            <Nav.Link href="#About" style={{ ...navStyle, ...navLinkStyle }}>About</Nav.Link>
                            <Nav.Link href="#Skill" style={{ ...navStyle, ...navLinkStyle }}>Skill</Nav.Link>
                            <Nav.Link href="#Projects" style={{ ...navStyle, ...navLinkStyle }}>Projects</Nav.Link>
                            <Nav.Link href="#Contacts" style={{ ...navStyle, ...navLinkStyle }}>Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
