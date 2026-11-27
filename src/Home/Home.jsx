import ProfilePicture from '../assets/images/frontface.jpg';
import ZanduroLogo from '../assets/images/zanduro.png';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 820px)');

  return (
    <section
      id="Home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '96px 18px 64px' : '112px 24px 80px',
        backgroundColor: 'var(--bg-base)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.25fr 0.85fr',
          gap: isMobile ? '36px' : '56px',
          alignItems: 'center',
        }}
      >
        {/* Left: Intro & Actions */}
        <div style={{ order: isMobile ? 2 : 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '5px 10px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--status-live)',
              }}
            />
            Software Engineer Associate @ Amdocs
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? '34px' : '48px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              color: 'var(--text-primary)',
              marginBottom: '14px',
            }}
          >
            Zandro Miguel Sedillo
          </h1>

          <p
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '18px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Software Engineer &amp; Game Developer
          </p>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              marginBottom: '22px',
            }}
          >
            I am a Software Engineer Associate at Amdocs, supporting backend systems and operations.
            In my spare time, I&apos;m a solo indie game developer under{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>zanduro</span>.
          </p>

          {/* Alias badge introducing zanduro */}
          <a
            href="https://zanduro.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '9px 14px',
              marginBottom: '26px',
              textDecoration: 'none',
            }}
          >
            <img
              src={ZanduroLogo}
              alt="zanduro logo"
              width={32}
              height={32}
              style={{
                display: 'block',
                flexShrink: 0,
                borderRadius: '4px',
                imageRendering: 'pixelated',
              }}
            />
            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                zanduro
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginTop: '2px',
                }}
              >
                Indie Game Alias · zanduro.itch.io ↗
              </div>
            </div>
          </a>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <a href="#Projects" className="btn-primary">
              View Projects
            </a>
            <a href="#Contacts" className="btn-secondary">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/ZSedillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-link"
              title="GitHub"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/zandro-miguel-sedillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-link"
              title="LinkedIn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="mailto:sedillozandro720@gmail.com"
              aria-label="Email"
              className="icon-link"
              title="sedillozandro720@gmail.com"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Clean Dev / Player Profile Card */}
        <div style={{ order: isMobile ? 1 : 2, maxWidth: isMobile ? '360px' : '100%', width: '100%', margin: isMobile ? '0 auto' : 0 }}>
          <div className="card" style={{ overflow: 'hidden' }}>
            {/* Card Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderBottom: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-elevated)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-secondary)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
                DEV_PROFILE
              </span>
              <span style={{ color: 'var(--text-muted)' }}>CUBAO, QC</span>
            </div>

            {/* Profile Photo */}
            <div
              onContextMenu={(e) => e.preventDefault()}
              style={{ padding: '14px 14px 0 14px' }}
            >
              <img
                src={ProfilePicture}
                alt="Zandro Miguel Sedillo"
                draggable={false}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  objectPosition: '50% 20%',
                  display: 'block',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  userSelect: 'none',
                }}
              />
            </div>

            {/* Compact Status Readout */}
            <div
              style={{
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--text-muted)' }}>ROLE</span>
                <span style={{ color: 'var(--text-primary)', textAlign: 'right' }}>SWE Associate @ Amdocs</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--text-muted)' }}>ALIAS</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)' }}>
                  <img
                    src={ZanduroLogo}
                    alt="zanduro logo"
                    width={18}
                    height={18}
                    style={{
                      display: 'block',
                      flexShrink: 0,
                      borderRadius: '3px',
                      imageRendering: 'pixelated',
                    }}
                  />
                  zanduro
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
