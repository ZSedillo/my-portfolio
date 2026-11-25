import { useMediaQuery } from '../hooks/useMediaQuery';

const experienceData = [
  {
    period: 'Jun 2026 – Present',
    company: 'Amdocs',
    position: 'Software Engineer Associate',
    current: true,
    achievements: [
      'Query relational databases using SQL to inspect records, trace data discrepancies, and fix broken order states.',
      'Send and test REST API requests (GET, POST, PUT) in Insomnia to retrieve, validate, and update backend data.',
      'Inspect and verify complex JSON payloads across upstream and downstream services to ensure data accuracy, using Unix tunneling for secure server access.',
    ],
    technologies: ['SQL', 'REST APIs', 'Insomnia', 'JSON', 'Unix Tunneling'],
  },
  {
    period: 'Jan 2026 – May 2026',
    company: 'Amdocs',
    position: 'Software Engineer Intern',
    achievements: [
      'Used GitHub Copilot to help write and clean up Unix shell scripts for daily operational tasks.',
      'Wrote Unix shell scripts via MobaXTerm to check HBase server health, storage usage, and system load.',
      'Built simple automation scripts for backend diagnostics and ticket checks, cutting down manual troubleshooting time.',
    ],
    technologies: ['Unix/Linux', 'Shell Scripting', 'MobaXTerm', 'HBase', 'GitHub Copilot'],
  },
  {
    period: 'Jul 2025 – Nov 2025',
    company: 'PNP Directorate for Personnel and Records Management',
    position: 'IT Support & Systems Intern',
    achievements: [
      'Troubleshot and fixed hardware and software problems across 50+ office desktops and laptops.',
      'Set up and maintained local network connections, including Ethernet cabling, for stable office internet access.',
      'Provided hands-on technical support to government staff, helping resolve daily computer and network issues quickly.',
    ],
    technologies: ['Hardware Support', 'Networking', 'Ethernet Cabling', 'Troubleshooting'],
  },
  {
    period: 'Jun 2024 – Aug 2024',
    company: 'Fildev',
    position: 'Full Stack Developer Intern',
    achievements: [
      'Built and connected RESTful APIs using Express and React to pass data cleanly between frontend pages and backend services.',
      'Deployed web applications on Linux servers using SSH and PuTTY, keeping remote access and uptime steady.',
      'Improved page load speeds by cleaning up MongoDB queries and updating responsive UI layouts.',
    ],
    technologies: ['React.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Linux', 'SSH/PuTTY'],
  },
];

const Experience = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="Experience" className="section-wrap alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-kicker">03 / Experience</span>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">
            Backend engineering, systems automation, IT infrastructure, and full-stack internships.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experienceData.map((exp) => (
            <div
              key={`${exp.company}-${exp.position}`}
              className="card"
              style={{
                padding: isMobile ? '20px' : '26px',
                borderLeft: exp.current ? '3px solid var(--accent)' : undefined,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {exp.position}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--accent)', marginTop: '2px' }}>
                    {exp.company}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {exp.current && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--status-live-tint)',
                        color: 'var(--status-live)',
                        border: '1px solid rgba(63, 185, 80, 0.3)',
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '16px',
                }}
              >
                {exp.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        marginTop: '3px',
                        flexShrink: 0,
                      }}
                    >
                      –
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
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

export default Experience;
