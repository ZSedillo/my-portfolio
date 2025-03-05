import React from 'react';

const footerStyle = {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '14px',
    marginTop: '50px',
};

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>© 2024 Zandro Miguel Sedillo. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
