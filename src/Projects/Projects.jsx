import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const projectsData = [
  {
    title: 'SilkSling',
    category: 'Games',
    period: 'Oct 2026 – Present',
    role: 'Solo Game Developer',
    status: { label: 'In Development', tone: 'dev' },
    description:
      'A 2D endless climber in Unity (C#) centered on grappling-hook momentum, swinging physics, and fast-paced vertical traversal.',
    points: [
      'Coded the core grappling-hook and swinging mechanics in Unity (C#), focusing on momentum, rope physics, and smooth camera tracking.',
      'Created pixel art sprites, UI elements, and layered crimson-toned pillar backgrounds to give the climb depth and atmosphere.',
      'Implemented dynamic anchor points on moving crates and breakable objects to keep the vertical climbing fast-paced.',
    ],
    tech: ['Unity', 'C#', '2D Physics', 'Pixel Art', 'Game UI'],
    note: 'Currently in active development — not yet published.',
  },
  {
    title: 'StaticPhone',
    category: 'Games',
    period: '2026 · First Public Release',
    role: 'Solo Game Developer (zanduro)',
    status: { label: 'Playable on itch.io', tone: 'live' },
    description:
      'A short game about texting and making choices. Swipe on a dating app, chat with your matches, and see how your decisions change the story.',
    points: [
      'Built solo in Unity Engine as my first public release under zanduro.',
      'Handled all game design decisions, implementation, Unity integration, and final creative direction.',
      'Sourced audio & music from Pixabay, with AI-assisted programming and dialogue drafting.',
    ],
    tech: ['Unity', 'C#', 'Branching Dialogue', 'UI/UX'],
    link: { label: 'Play on itch.io', url: 'https://zanduro.itch.io/staticphone' },
  },
  {
    title: 'Worshippers of The Deep',
    category: 'Games',
    period: 'Jul – Nov 2025',
    role: 'Game Developer & Researcher (Thesis)',
    status: { label: 'Thesis', tone: 'neutral' },
    description:
      'A turn-based roguelike featuring an adaptive Reinforcement Learning enemy agent trained to respond to player strategies.',
    points: [
      'Programmed core gameplay systems in Godot and GDScript, including potion, card, and turn-based combat mechanics.',
      'Trained a Reinforcement Learning enemy agent in Python (PPO) that adapts to how the player fights.',
    ],
    tech: ['Godot', 'GDScript', 'Python', 'PPO / RL'],
  },
  {
    title: 'TeamianWeb',
    category: 'Web',
    period: 'Jan 2025 – Apr 2026',
    role: 'System Analyst & Full Stack Developer',
    status: { label: 'Web App', tone: 'neutral' },
    description:
      'A school management website built to support 300+ students and 20+ teachers with pre-registration and administrative workflows.',
    points: [
      'Architected system workflows designed to reliably support 300+ students and 20+ teachers.',
      'Built backend APIs for student pre-registration, data management, and client-server communication.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'],
    link: { label: 'View GitHub', url: 'https://github.com/ZSedillo' },
  },
];

const statusStyles = {
  live: {
    color: 'var(--status-live)',
    backgroundColor: 'var(--status-live-tint)',
    borderColor: 'rgba(63, 185, 80, 0.3)',
  },
  dev: {
    color: 'var(--status-dev)',
    backgroundColor: 'var(--status-dev-tint)',
    borderColor: 'rgba(210, 153, 34, 0.3)',
  },
  neutral: {
    color: 'var(--text-secondary)',
    backgroundColor: 'var(--bg-elevated)',
    borderColor: 'var(--border-subtle)',
  },
};

const Projects = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [filter, setFilter] = useState('All');

  const visibleProjects =
    filter === 'All' ? projectsData : projectsData.filter((p) => p.category === filter);

    const projectsData = [
        {
            period: 'Jan 2025 – Apr 2026',
            role: 'System Analyst & Full Stack Developer',
            title: 'TeamWeb',
            description: 'A comprehensive school management website built to handle 300+ students and 20+ teachers with robust backend systems.',
            points: [
                'Architected and structured comprehensive system frameworks, prioritizing scalability to reliably support a user base of 300+ students and 20+ teachers',
                'Developed robust backend systems supporting student pre-registration workflows and complex administrative management features',
                'Integrated API endpoints to establish seamless and efficient communication protocols between client applications and servers'
            ],
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'],
            icon: '🏫',
            accentColor: '#3b82f6',
            github: 'https://github.com/ZSedillo'
        },
        {
            period: 'Jul – Nov 2025',
            role: 'Game Developer & Researcher',
            title: 'Worshippers of The Deep (Thesis)',
            description: 'A roguelike game featuring adaptive AI enemy using PPO-based Reinforcement Learning, achieving 100% user win rate during research testing.',
            points: [
                'Programmed core gameplay systems utilizing Godot and GDScript, successfully implementing dynamic potion, card, and combat mechanics',
                'Designed and trained a PPO-based Reinforcement Learning enemy agent using Python that dynamically adapts to player behavior, achieving a 100% user win rate during research testing'
            ],
            tech: ['Godot', 'GDScript', 'Python', 'RL / PPO', 'AI Development'],
            icon: '🎮',
            accentColor: '#6366f1'
        },
        {
            period: '2024',
            role: 'Developer',
            title: 'Active Learning Portal',
            description: 'An innovative web-based learning platform focused on interactive education and student engagement.',
            points: [
                'Implemented server-side logic on a GlassFish Server to handle form submissions and authentication',
                'Designed SQL queries to ensure proper data retrieval and storage for system reliability',
                'Integrated authentication features to ensure secure access for students and instructors',
                'Incorporated learning materials, basic enrollment tracking, and meeting scheduling'
            ],
            tech: ['HTML', 'SQL', 'MySQL', 'GlassFish'],
            icon: '📚',
            accentColor: '#8b5cf6'
        }
    ];

          <div
            style={{
              display: 'inline-flex',
              gap: '4px',
              padding: '4px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            {['All', 'Games', 'Web'].map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: active ? 'var(--accent)' : 'transparent',
                    color: active ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'background-color 0.15s ease, color 0.15s ease',
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {visibleProjects.map((project) => {
            const badge = statusStyles[project.status.tone];
            return (
              <article
                key={project.title}
                className="card"
                style={{
                  padding: isMobile ? '22px' : '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '18px',
                }}
              >
                <div>
                  {/* Top row: status + period */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      flexWrap: 'wrap',
                      marginBottom: '14px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        padding: '3px 9px',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${badge.borderColor}`,
                        backgroundColor: badge.backgroundColor,
                        color: badge.color,
                      }}
                    >
                      {project.status.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--accent)',
                      marginTop: '3px',
                      marginBottom: '12px',
                    }}
                  >
                    {project.role}
                  </p>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '14px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {project.points.map((point, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--accent)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            marginTop: '2px',
                            flexShrink: 0,
                          }}
                        >
                          &gt;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech tags + link/note */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '6px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '8px' }}>
                    {project.tech.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div>
                      <a
                        href={project.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: '8px 14px', fontSize: '13px' }}
                      >
                        {project.link.label} ↗
                      </a>
                    </div>
                  )}

                  {project.note && (
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.note}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
