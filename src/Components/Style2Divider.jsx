const Style1Divider = () => {
  return (
        <div className="space-y-4">
            <div style={{
                margin: '0 auto',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #cbd5e1 50%, transparent 100%)',
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
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
            ✧
            </div>
            </div>
        </div>
  );
}   
export default Style1Divider;