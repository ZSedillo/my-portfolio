import Resume from '../assets/resume/Sedillo_Resume.pdf';
import ZanduroLogo from '../assets/images/zanduro.png';
import { useMediaQuery } from '../hooks/useMediaQuery';

const highlights = [
  { label: 'CURRENT ROLE', value: 'Software Engineer Associate', sub: 'Amdocs · Jun 2026 – Present' },
  { label: 'EDUCATION', value: 'B.S. Computer Science', sub: 'UST · Game Development' },
  { label: 'INDIE ALIAS', value: 'zanduro', sub: 'Solo Unity & Godot Projects', hasLogo: true },
];

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="About" className="section-wrap alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-kicker">01 / About</span>
          <h2 className="section-title">Background &amp; Focus</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.4fr 0.9fr',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          <div className="card" style={{ padding: isMobile ? '22px' : '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              <p>
                I&apos;m <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Zandro Miguel B. Sedillo</strong>, a
                Computer Science graduate from the University of Santo Tomas (Game Development specialization) based in
                Cubao, Quezon City.
              </p>
              <p>
                Professionally, I am a Software Engineer Associate at Amdocs, supporting backend systems,
                databases, and operational tooling. Prior to this, I interned in Unix automation, IT systems support,
                and full-stack web development.
              </p>
              <p>
                Outside of work, I design and build solo indie games under{' '}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>zanduro</strong>, taking ideas from
                early gameplay prototypes through to playable builds on itch.io.
              </p>
            </div>

            <div style={{ marginTop: '24px' }}>
              <a href={Resume} download="Sedillo_Resume" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card"
                style={{
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--accent)',
                      letterSpacing: '0.06em',
                      marginBottom: '4px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {item.sub}
                  </div>
                </div>
                {item.hasLogo && (
                  <img
                    src={ZanduroLogo}
                    alt="zanduro logo"
                    width={40}
                    height={40}
                    style={{
                      display: 'block',
                      flexShrink: 0,
                      borderRadius: '4px',
                      imageRendering: 'pixelated',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
