import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', checkScreenSize);
        
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrollingUp(scrollTop < lastScrollTop || isNavbarOpen);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, isNavbarOpen]);

    const toggleNavbar = () => setIsNavbarOpen(prev => !prev);
    const closeNavbar = () => setIsNavbarOpen(false);

    const navLinks = [
        { name: 'About', href: '#About' },
        { name: 'Skills', href: '#Skill' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Contacts', href: '#Contacts' }
    ];

    return (
        <>
            <div 
                style={{
                    display: isNavbarOpen ? 'block' : 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1050
                }}
                onClick={closeNavbar}
            />

            <nav style={{
                position: 'fixed',
                top: isScrollingUp ? '0' : '-80px',
                left: '0',
                width: '100%',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                zIndex: 1000,
                transition: 'top 0.3s ease'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '15px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>Zandro</div>

                    {isMobile ? (
                        <button 
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                transform: isNavbarOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                            }}
                            onClick={toggleNavbar}
                        >
                            {isNavbarOpen ? '✖' : '☰'}
                        </button>
                    ) : (
                        <div style={{ display: 'flex' }}>
                            {navLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#333',
                                        margin: '0 10px',
                                        fontWeight: 500,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseOver={e => e.target.style.color = '#007bff'}
                                    onMouseOut={e => e.target.style.color = '#333'}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {isMobile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: isNavbarOpen ? '0' : '-300px',
                    width: '300px',
                    height: '100%',
                    backgroundColor: 'white',
                    zIndex: 1100,
                    transition: 'right 0.3s ease',
                    boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
                    padding: '60px 20px'
                }}>
                    <button 
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            background: 'none',
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            transform: isNavbarOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                        }}
                        onClick={closeNavbar}
                    >
                        ✖
                    </button>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '40px'
                    }}>
                        {navLinks.map(link => (
                            <a 
                                key={link.name}
                                href={link.href}
                                style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    margin: '10px 0',
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                                onClick={closeNavbar}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;