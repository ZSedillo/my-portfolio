import React, { useState, useEffect } from 'react';
import Resume from '../assets/resume/Sedillo_CV.pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [touchedSkill, setTouchedSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    { icon: "💻", label: "Full Stack Development", color: "linear-gradient(135deg, #3B82F6, #8B5CF6)" },
    { icon: "⚡", label: "Performance Optimization", color: "linear-gradient(135deg, #EAB308, #EA580C)" },
    { icon: "🎯", label: "Problem Solving", color: "linear-gradient(135deg, #10B981, #0D9488)" },
    { icon: "❤️", label: "User Experience", color: "linear-gradient(135deg, #EC4899, #EF4444)" },
    { icon: "☕", label: "Continuous Learning", color: "linear-gradient(135deg, #F59E0B, #EAB308)" },
    { icon: "🎮", label: "Game Development", color: "linear-gradient(135deg, #6366F1, #8B5CF6)" }
  ];

  const stats = [
    { number: "6+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "24/7", label: "Dedication" }
  ];

  const isMobile = windowWidth < 864;
  const isTablet = windowWidth >= 864 && windowWidth < 1024;
  const isSmall = windowWidth < 480;

  const handleSkillInteraction = (index, isTouch = false) => {
    if (isTouch) {
      setTouchedSkill(touchedSkill === index ? null : index);
    } else {
      setHoveredSkill(index);
    }
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #EBF8FF 50%, #E0E7FF 100%)',
      fontFamily: 'Poppins, sans-serif',
      // overflowX: 'hidden'
    }} id="About">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '64px',
        padding: `80px ${isSmall ? '12px' : '16px'} 64px`,
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          {/* Floating elements - adjusted for mobile */}
          <div style={{
            position: 'absolute',
            top: isSmall ? '20px' : '40px',
            left: isSmall ? '10px' : '40px',
            width: isSmall ? '60px' : '80px',
            height: isSmall ? '60px' : '80px',
            background: 'linear-gradient(135deg, #A855F7, #EC4899)',
            borderRadius: '50%',
            opacity: 0.2,
            animation: 'pulse 2s infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: isSmall ? '80px' : '128px',
            right: isSmall ? '10px' : '80px',
            width: isSmall ? '48px' : '64px',
            height: isSmall ? '48px' : '64px',
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
            borderRadius: '50%',
            opacity: 0.2,
            animation: 'bounce 2s infinite'
          }}></div>

          <div style={{
            textAlign: 'center',
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: isSmall ? '6px 12px' : '8px 16px',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              border: '1px solid rgba(147, 51, 234, 0.2)',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10B981',
                borderRadius: '50%',
                marginRight: '12px',
                animation: 'pulse 2s infinite'
              }}></div>
              <span style={{ 
                color: '#7C3AED', 
                fontWeight: 500, 
                fontSize: isSmall ? '12px' : '14px' 
              }}>
                Available for new opportunities
              </span>
            </div>
            
            <h1 style={{
              fontSize: isSmall ? '36px' : isMobile ? '48px' : isTablet ? '56px' : '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #7C3AED, #3B82F6, #06B6D4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              About Me
            </h1>
            
            <p style={{
              fontSize: isSmall ? '16px' : isMobile ? '18px' : '24px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              padding: isSmall ? '0 8px' : '0'
            }}>
              Passionate developer crafting digital experiences that matter
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: `64px ${isSmall ? '12px' : '16px'}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isTablet ? '48px' : '64px',
            alignItems: 'center'
          }}>
            {/* Profile Image with Skills */}
            <div style={{
              position: 'relative',
              order: isMobile ? 2 : 1,
              padding: isMobile ? '0 8px' : '0'
            }}>
              <div style={{
                position: 'relative',
                width: isSmall ? '240px' : isMobile ? '280px' : isTablet ? '320px' : '384px',
                height: isSmall ? '240px' : isMobile ? '280px' : isTablet ? '320px' : '384px',
                margin: '0 auto'
              }}>
                {/* Main image container */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
                  padding: '4px',
                  transform: 'rotate(3deg)',
                  transition: 'transform 0.5s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(3deg)'}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #F1F5F9, #FFFFFF)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '80%',
                      height: '80%',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #EDE9FE, #DBEAFE)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isSmall ? '60px' : isMobile ? '80px' : isTablet ? '100px' : '120px'
                    }}>
                      💻
                    </div>
                  </div>
                </div>

                {/* Skills Grid for Mobile and Tablet */}
                {(isMobile || isTablet) && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: isSmall ? '8px' : '12px',
                    marginTop: '32px',
                    maxWidth: isSmall ? '200px' : '240px',
                    margin: '32px auto 0',
                    position: 'relative'
                  }}>
                    {skills.map((skill, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                        <div 
                          style={{
                            width: isSmall ? '50px' : '60px',
                            height: isSmall ? '50px' : '60px',
                            borderRadius: '16px',
                            background: skill.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            fontSize: isSmall ? '20px' : '24px',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            transform: (hoveredSkill === index || touchedSkill === index) ? 'scale(1.1)' : 'scale(1)'
                          }}
                          onMouseEnter={() => handleSkillInteraction(index)}
                          onMouseLeave={handleSkillLeave}
                          onClick={() => handleSkillInteraction(index, true)}
                          onTouchStart={() => handleSkillInteraction(index, true)}
                        >
                          {skill.icon}
                        </div>
                        
                        {/* Label tooltip for mobile/tablet */}
                        {(hoveredSkill === index || touchedSkill === index) && (
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            marginTop: '8px',
                            zIndex: 20,
                            animation: 'fadeIn 0.2s ease-in'
                          }}>
                            <div style={{
                              background: '#FFFFFF',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                              border: '1px solid #E5E7EB',
                              whiteSpace: 'nowrap',
                              fontSize: isSmall ? '10px' : '12px',
                              fontWeight: 500,
                              color: '#374151'
                            }}>
                              {skill.label}
                            </div>
                            {/* Arrow pointing up */}
                            <div style={{
                              position: 'absolute',
                              top: '-4px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 0,
                              height: 0,
                              borderLeft: '4px solid transparent',
                              borderRight: '4px solid transparent',
                              borderBottom: '4px solid #FFFFFF'
                            }}></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Floating Skills for Desktop - with better positioning */}
                {!isMobile && !isTablet && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                    height: '500px',
                    pointerEvents: 'none'
                  }}>
                    {skills.map((skill, index) => {
                      const angle = (index * 60) - 90;
                      const radius = 150; // Reduced radius to prevent overflow
                      const x = Math.cos(angle * Math.PI / 180) * radius;
                      const y = Math.sin(angle * Math.PI / 180) * radius;
                      
                      return (
                        <div key={index} style={{
                          position: 'absolute',
                          left: `calc(50% + ${x}px - 32px)`,
                          top: `calc(50% + ${y}px - 32px)`,
                          width: '64px',
                          height: '64px',
                          borderRadius: '16px',
                          transform: activeSkill === index ? 'scale(1.1)' : 'scale(0.9)',
                          transition: 'all 0.5s ease',
                          zIndex: activeSkill === index ? 10 : 0,
                          pointerEvents: 'auto'
                        }}>
                          <div style={{
                            width: '100%',
                            height: '100%',
                            background: skill.color,
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            fontSize: '32px'
                          }}>
                            {skill.icon}
                          </div>
                          {activeSkill === index && (
                            <div style={{
                              position: 'absolute',
                              bottom: '-40px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              whiteSpace: 'nowrap'
                            }}>
                              <div style={{
                                background: '#FFFFFF',
                                padding: '4px 12px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #E5E7EB'
                              }}>
                                <span style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                                  {skill.label}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              order: isMobile ? 1 : 2,
              padding: isSmall ? '0 8px' : '0'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                padding: isSmall ? '20px' : isMobile ? '24px' : '32px',
                border: '1px solid rgba(147, 51, 234, 0.1)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{
                  fontSize: isSmall ? '20px' : isMobile ? '24px' : '30px',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  marginBottom: '24px'
                }}>
                  Hi, I'm Zandro! 👋
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{
                    fontSize: isSmall ? '14px' : isMobile ? '16px' : '18px',
                    color: '#6B7280',
                    lineHeight: '1.6'
                  }}>
                    A passionate <span style={{ fontWeight: 600, color: '#7C3AED' }}>Full Stack Developer</span>, 
                    <span style={{ fontWeight: 600, color: '#3B82F6' }}> Game Developer</span>, and 
                    <span style={{ fontWeight: 600, color: '#10B981' }}> IT Support & Systems</span> who thrives on turning 
                    complex problems into elegant solutions.
                  </p>
                  
                  <p style={{
                    fontSize: isSmall ? '12px' : isMobile ? '14px' : '16px',
                    color: '#6B7280',
                    lineHeight: '1.6'
                  }}>
                    My expertise spans across front-end and back-end development, networking infrastructure, 
                    and system administration, with a special focus on program debugging, optimization, and 
                    performance enhancement. I'm constantly exploring new technologies and methodologies to 
                    stay at the forefront of the industry.
                  </p>
                  
                  <p style={{
                    fontSize: isSmall ? '12px' : isMobile ? '14px' : '16px',
                    color: '#6B7280',
                    lineHeight: '1.6'
                  }}>
                    With strong analytical skills and meticulous attention to detail, I'm committed to 
                    delivering high-quality solutions that not only meet requirements but exceed expectations. 
                    Every project is an opportunity to learn, grow, and create something amazing.
                  </p>
                </div>

                {/* Download CV Button */}
                <a
                  href={Resume}
                  download="Sedillo_CV"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                >
                <button style={{
                  marginTop: '32px',
                  background: 'linear-gradient(135deg, #7C3AED, #3B82F6)',
                  border: 'none',
                  borderRadius: '16px',
                  color: '#FFFFFF',
                  padding: isSmall ? '10px 20px' : isMobile ? '12px 24px' : '16px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  fontWeight: 600,
                  fontSize: isSmall ? '12px' : isMobile ? '14px' : '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  width: '0 auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #6D28D9, #2563EB)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #7C3AED, #3B82F6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                >
                  <span style={{ fontSize: isSmall ? '14px' : '18px' }}>⬇️</span>
                  <span>Download CV</span>
                </button>
              </a>
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: isSmall ? '8px' : isMobile ? '12px' : '16px'
              }}>
                {stats.map((stat, index) => (
                  <div key={index} style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: isSmall ? '12px 8px' : isMobile ? '16px' : '24px',
                    textAlign: 'center',
                    border: '1px solid rgba(147, 51, 234, 0.1)',
                    transition: 'background 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)'}
                  >
                    <div style={{
                      fontSize: isSmall ? '16px' : isMobile ? '20px' : '32px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #7C3AED, #3B82F6)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '4px'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: isSmall ? '10px' : isMobile ? '12px' : '16px',
                      color: '#6B7280',
                      fontWeight: 500,
                      lineHeight: '1.2'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: `${isSmall ? '32px' : '60px'} ${isSmall ? '12px' : '16px'}`
      }}>
        <hr style={{
          border: 'none',
          height: '10px',
          background: 'none'
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -8px, 0); }
          70% { transform: translate3d(0, -4px, 0); }
          90% { transform: translate3d(0, -2px, 0); }
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateX(-50%) translateY(-5px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
          }
        }

        @media (max-width: 480px) {
          * {
            box-sizing: border-box;
          }
        }
      `}</style>
    </div>
  );
};

export default About;