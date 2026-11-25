import { useMediaQuery } from '../hooks/useMediaQuery';

const skillGroups = [
  {
    code: '01',
    title: 'Languages',
    items: ['C#', 'Java', 'Python', 'JavaScript', 'GDScript', 'SQL'],
  },
  {
    code: '02',
    title: 'Frameworks & Web',
    items: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'RESTful APIs', 'JSON'],
  },
  {
    code: '03',
    title: 'Databases & Cloud',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'HBase', 'AWS S3', 'Unix/Linux'],
  },
  {
    code: '04',
    title: 'Engines & Tools',
    items: [
      'Unity',
      'Godot',
      'Insomnia',
      'Postman',
      'Git/GitHub',
      'GitHub Copilot',
      'MobaXTerm',
      'SSH/PuTTY',
      'Jira',
      'Figma',
    ],
  },
];

const Skills = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="Skills" className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-kicker">04 / Skills</span>
          <h2 className="section-title">Tech Stack &amp; Tools</h2>
          <p className="section-subtitle">
            Languages, backend infrastructure, databases, and game engines I work with.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '18px',
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.title} className="card" style={{ padding: isMobile ? '20px' : '24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--accent)',
                  }}
                >
                  [{group.code}]
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {group.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
