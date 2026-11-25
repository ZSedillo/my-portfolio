import { useState, useEffect } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const navLinks = [
  { name: 'About', href: '#About', id: 'About' },
  { name: 'Projects', href: '#Projects', id: 'Projects' },
  { name: 'Experience', href: '#Experience', id: 'Experience' },
  { name: 'Skills', href: '#Skills', id: 'Skills' },
  { name: 'Education', href: '#Education', id: 'Education' },
  { name: 'Contact', href: '#Contacts', id: 'Contacts' },
];

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    const ids = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education', 'Contacts'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(16, 17, 20, 0.94)' : 'rgba(16, 17, 20, 0.75)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border-subtle)',
          transition: 'background-color 0.2s ease',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: isMobile ? '12px 18px' : '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#Home"
            onClick={() => setIsDrawerOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-strong)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '3px',
                  left: '3px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'var(--accent)',
                }}
              />
              ZS
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              zandro.sedillo
            </span>
          </a>

          {!isMobile ? (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--bg-elevated)' : 'transparent',
                      borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                      transition: 'color 0.15s ease, background-color 0.15s ease',
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          ) : (
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--radius-sm)',
                width: '38px',
                height: '38px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
              }}
            >
              {isDrawerOpen ? '×' : '≡'}
            </button>
          )}
        </div>
      </header>

      {isMobile && isDrawerOpen && (
        <>
          <div
            onClick={() => setIsDrawerOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1050,
            }}
          />
          <aside
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '260px',
              height: '100vh',
              backgroundColor: 'var(--bg-band)',
              borderLeft: '1px solid var(--border-subtle)',
              zIndex: 1100,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '16px',
                marginBottom: '12px',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                }}
              >
                NAVIGATION
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsDrawerOpen(false)}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-secondary)',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                ×
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    style={{
                      textDecoration: 'none',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                      borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;
