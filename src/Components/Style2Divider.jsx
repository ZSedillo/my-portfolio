const Style1Divider = () => {
  return (
        <div className="space-y-4">
            <div style={{
                margin: '0 auto',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #334155 50%, transparent 100%)',
                position: 'relative',
                zIndex: 1
            }}>
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                border: '1px solid rgba(51, 65, 85, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                boxShadow: '0 10px 25px rgba(51, 65, 85, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                color: '#334155',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                // cursor: 'pointer'
            }}
            // onMouseEnter={(e) => {
            //     e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
            //     e.target.style.boxShadow = '0 25px 50px -12px rgba(51, 65, 85, 0.25), 0 0 0 1px rgba(51, 65, 85, 0.1)';
            //     e.target.style.color = '#455973';
            // }}
            // onMouseLeave={(e) => {
            //     e.target.style.transform = 'translate(-50%, -50%) scale(1)';
            //     e.target.style.boxShadow = '0 10px 25px rgba(51, 65, 85, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)';
            //     e.target.style.color = '#334155';
            // }}
            >
            ✧
            </div>
            </div>
        </div>
  );
}   

export default Style1Divider;