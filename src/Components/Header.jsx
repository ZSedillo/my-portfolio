import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeSection, setActiveSection] = useState('Home');

    const navLinks = [
        { name: 'Home', href: '#StartingPage' },
        { name: 'About', href: '#About' },
        { name: 'Skills', href: '#Skills' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Experience', href: '#Experience' },
        { name: 'Education', href: '#Education' },
        { name: 'Contact', href: '#Contacts' }
    ];

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', checkScreenSize);
        
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrollingUp(scrollTop < lastScrollTop || isNavbarOpen);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Intersection Observer for active section detection
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    // Map section IDs to navigation names
                    const sectionMap = {
                        'StartingPage': 'Home',
                        'About': 'About',
                        'Experience': 'Experience',
                        'Skills': 'Skills',
                        'Projects': 'Projects',
                        'Education': 'Education',
                        'Contacts': 'Contact'
                    };
                    
                    const sectionName = sectionMap[sectionId];
                    if (sectionName && sectionName !== activeSection) {
                        setActiveSection(sectionName);
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        const sectionIds = ['StartingPage', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contacts'];
        const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
        
        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [lastScrollTop, isNavbarOpen, activeSection]);

    const toggleNavbar = () => setIsNavbarOpen(prev => !prev);
    const closeNavbar = () => setIsNavbarOpen(false);

    const handleNavClick = (sectionName) => {
        setActiveSection(sectionName);
        closeNavbar();
    };

    return (
        <>
            {/* Mobile overlay */}
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
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
                zIndex: 1000,
                transition: 'top 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '12px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Logo */}
                    <div style={{ 
                        color: '#334155',
                        fontWeight: 700, 
                        fontSize: '1.75rem',
                        backgroundClip: 'text',
                        letterSpacing: '-0.5px'
                    }}>
                        Zandro
                    </div>

                    {/* Desktop Navigation */}
                    {!isMobile ? (
                        <div style={{ 
                            display: 'flex',
                            backgroundColor: '#f8fafc',
                            borderRadius: '50px',
                            padding: '8px',
                            gap: '4px',
                            border: '1px solid #e2e8f0'
                        }}>
                            {navLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    style={{
                                        textDecoration: 'none',
                                        color: activeSection === link.name ? '#ffffff' : '#64748b',
                                        padding: '12px 20px',
                                        borderRadius: '25px',
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        backgroundColor: activeSection === link.name ? '#334155' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseOver={e => {
                                        if (activeSection !== link.name) {
                                            e.target.style.backgroundColor = '#e2e8f0';
                                            e.target.style.color = '#334155';
                                        }
                                    }}
                                    onMouseOut={e => {
                                        if (activeSection !== link.name) {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#64748b';
                                        }
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    ) : (
                        /* Mobile menu button */
                        <button 
                            style={{
                                background: 'linear-gradient(135deg, #455973ff 0%, #334155 100%)',
                                border: 'none',
                                borderRadius: '10px',
                                width: '44px',
                                height: '44px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isNavbarOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                            }}
                            onClick={toggleNavbar}
                        >
                            <span style={{ 
                                color: 'white', 
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}>
                                {isNavbarOpen ? '✕' : '☰'}
                            </span>
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile sidebar */}
            {isMobile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: isNavbarOpen ? '0' : '-320px',
                    width: '320px',
                    height: '100vh',
                    backgroundColor: '#ffffff',
                    zIndex: 1100,
                    transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '-10px 0 50px rgba(0,0,0,0.15)',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Mobile header */}
                    <div style={{
                        padding: '24px',
                        borderBottom: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ 
                            fontWeight: 700, 
                            fontSize: '1.5rem',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Zandro
                        </div>
                        <button 
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#64748b',
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}
                            onClick={closeNavbar}
                            onMouseOver={e => {
                                e.target.style.backgroundColor = '#f1f5f9';
                                e.target.style.color = '#334155';
                            }}
                            onMouseOut={e => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#64748b';
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Mobile navigation links */}
                    <div style={{
                        padding: '24px 0',
                        flex: 1
                    }}>
                        {navLinks.map((link, index) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                onClick={() => handleNavClick(link.name)}
                                style={{
                                    textDecoration: 'none',
                                    color: activeSection === link.name ? '#455973ff' : '#334155',
                                    padding: '16px 24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: activeSection === link.name ? 600 : 500,
                                    fontSize: '16px',
                                    borderLeft: activeSection === link.name ? '3px solid #334155' : '3px solid transparent',
                                    backgroundColor: activeSection === link.name ? '#f8fafc' : 'transparent',
                                    transition: 'all 0.2s ease',
                                    borderBottom: index < navLinks.length - 1 ? '1px solid #f1f5f9' : 'none'
                                }}
                                onMouseOver={e => {
                                    if (activeSection !== link.name) {
                                        e.target.style.backgroundColor = '#f8fafc';
                                        e.target.style.borderLeft = '3px solid #e2e8f0';
                                    }
                                }}
                                onMouseOut={e => {
                                    if (activeSection !== link.name) {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.borderLeft = '3px solid transparent';
                                    }
                                }}
                                >
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;