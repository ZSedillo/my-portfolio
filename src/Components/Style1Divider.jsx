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
            background: 'linear-gradient(90deg, transparent 0%, #8b5cf6 20%, #06b6d4 50%, #8b5cf6 80%, transparent 100%)',
            position: 'relative'
        }}>
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: '24px',
            height: '24px',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            borderRadius: '3px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Style1Divider;