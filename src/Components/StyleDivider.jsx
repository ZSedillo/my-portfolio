const Style1Divider = () => {
  return (
        <div style={{
            margin: '0 auto',
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
            }}>
                    ✦
            </div>
        </div>
  );
}

export default Style1Divider;