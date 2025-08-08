const Style1Divider = () => {
  return (
    <div className="space-y-4">
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
        }}>
        <div style={{
            border: 'none',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #334155 20%, #6681a4 50%, #334155 80%, transparent 100%)',
            position: 'relative',
            zIndex: 1,
        }}>
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: '24px',
            height: '24px',
            background: 'linear-gradient(135deg, #334155, #6681a4)',
            borderRadius: '3px',
            boxShadow: '0 10px 25px rgba(51, 65, 85, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
            // cursor: 'pointer'
            }}
            // onMouseEnter={(e) => {
            //     e.target.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1.2)';
            //     e.target.style.boxShadow = '0 25px 50px -12px rgba(51, 65, 85, 0.4), 0 0 0 1px rgba(51, 65, 85, 0.1)';
            // }}
            // onMouseLeave={(e) => {
            //     e.target.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1)';
            //     e.target.style.boxShadow = '0 10px 25px rgba(51, 65, 85, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
            // }}
        >
        </div>
        </div>
        </div>
    </div>
  );
}

export default Style1Divider;