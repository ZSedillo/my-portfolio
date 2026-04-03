import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeSection, setActiveSection] = useState('Home');

    const navLinks = [
        { name: 'Home', href: '#Home' },
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
            setIsScrolled(scrollTop > 50);
            setIsScrollingUp(scrollTop < lastScrollTop || isNavbarOpen);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionMap = {
                        'Home': 'Home', 'About': 'About', 'Skills': 'Skills',
                        'Projects': 'Projects', 'Experience': 'Experience',
                        'Education': 'Education', 'Contacts': 'Contact'
                    };
                    const sectionName = sectionMap[entry.target.id];
                    if (sectionName) setActiveSection(sectionName);
                }
            });
        }, observerOptions);

        const sectionIds = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contacts'];
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('scroll', handleScroll);
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [lastScrollTop, isNavbarOpen]);

    const toggleNavbar = () => setIsNavbarOpen(prev => !prev);
    const closeNavbar = () => setIsNavbarOpen(false);

    const handleNavClick = (sectionName) => {
        setActiveSection(sectionName);
        closeNavbar();
    };

    return (
        <>
            {/* Mobile overlay */}
            {isNavbarOpen && (
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0,
                        width: '100%', height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 1050
                    }}
                    onClick={closeNavbar}
                />
            )}

            <nav style={{
                position: 'fixed',
                top: isScrollingUp ? '0' : '-80px',
                left: '0', width: '100%',
                backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
                zIndex: 1000,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
            }}>
                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    padding: isMobile ? '14px 20px' : '16px 32px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    {/* Logo */}
                    <a href="#Home" style={{ textDecoration: 'none' }} onClick={() => handleNavClick('Home')}>
                        <div style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700, fontSize: '1.5rem',
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-0.5px'
                        }}>
                            ZS
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    {!isMobile ? (
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderRadius: '50px',
                            padding: '4px',
                            gap: '2px',
                            border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}>
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    style={{
                                        textDecoration: 'none',
                                        color: activeSection === link.name ? '#ffffff' : '#94a3b8',
                                        padding: '10px 18px',
                                        borderRadius: '25px',
                                        fontWeight: 500,
                                        fontSize: '13px',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        background: activeSection === link.name
                                            ? 'linear-gradient(135deg, #3b82f6, #6366f1)'
                                            : 'transparent',
                                        fontFamily: "'Inter', sans-serif"
                                    }}
                                    onMouseOver={e => {
                                        if (activeSection !== link.name) {
                                            e.currentTarget.style.color = '#f1f5f9';
                                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                                        }
                                    }}
                                    onMouseOut={e => {
                                        if (activeSection !== link.name) {
                                            e.currentTarget.style.color = '#94a3b8';
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    ) : (
                        <button
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                border: 'none', borderRadius: '12px',
                                width: '42px', height: '42px', cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: isNavbarOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                            }}
                            onClick={toggleNavbar}
                        >
                            <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                                {isNavbarOpen ? '✕' : '☰'}
                            </span>
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile sidebar */}
            {isMobile && (
                <div style={{
                    position: 'fixed', top: 0,
                    right: isNavbarOpen ? '0' : '-320px',
                    width: '300px', height: '100vh',
                    backgroundColor: '#111118',
                    zIndex: 1100,
                    transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '-10px 0 60px rgba(0,0,0,0.5)',
                    display: 'flex', flexDirection: 'column',
                    borderLeft: '1px solid rgba(255,255,255,0.06)'
                }}>
                    <div style={{
                        padding: '20px 24px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <div style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700, fontSize: '1.25rem',
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            ZS
                        </div>
                        <button
                            style={{
                                background: 'none', border: 'none',
                                fontSize: '22px', cursor: 'pointer',
                                color: '#64748b', width: '40px', height: '40px',
                                borderRadius: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}
                            onClick={closeNavbar}
                            onMouseOver={e => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.color = '#f1f5f9';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#64748b';
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    <div style={{ padding: '16px 0', flex: 1 }}>
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => handleNavClick(link.name)}
                                style={{
                                    textDecoration: 'none',
                                    color: activeSection === link.name ? '#3b82f6' : '#94a3b8',
                                    padding: '14px 24px',
                                    display: 'flex', alignItems: 'center',
                                    fontWeight: activeSection === link.name ? 600 : 400,
                                    fontSize: '15px',
                                    borderLeft: activeSection === link.name
                                        ? '3px solid #3b82f6'
                                        : '3px solid transparent',
                                    backgroundColor: activeSection === link.name
                                        ? 'rgba(59, 130, 246, 0.08)'
                                        : 'transparent',
                                    transition: 'all 0.2s ease',
                                    fontFamily: "'Inter', sans-serif"
                                }}
                                onMouseOver={e => {
                                    if (activeSection !== link.name) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                                        e.currentTarget.style.color = '#f1f5f9';
                                    }
                                }}
                                onMouseOut={e => {
                                    if (activeSection !== link.name) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = '#94a3b8';
                                    }
                                }}
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