import { useMediaQuery } from '../hooks/useMediaQuery';

const coursework = [
  'Game Programming (Unity/C#)',
  'Artificial Intelligence',
  'Data Structures',
  'Algorithms',
];

const Education = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="Education" className="section-wrap alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-kicker">05 / Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="card" style={{ padding: isMobile ? '22px' : '28px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '18px',
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                University of Santo Tomas
              </h3>
              <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--accent)', marginTop: '4px' }}>
                B.S. in Computer Science (Specialization in Game Development)
              </p>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              Aug 2022 – Jun 2026
            </span>
          </div>

          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                marginBottom: '10px',
              }}
            >
              Relevant Coursework
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {coursework.map((course) => (
                <span key={course} className="tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
