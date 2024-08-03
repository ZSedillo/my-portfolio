const navStyle = {
    padding: '21px 20.5px 0',
    fontSize: '20px',
    fontFamily: 'Inter, sans-serif',
    display: 'inline-block',
    fontWeight: 600, // Semi-bold weight
};

const navLinkStyle = {
    padding: '0 10px',
    textDecoration: 'none',
    color: 'inherit',
};

function Header() {
    return (
        <>
            <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
                    <li id="About" style={navStyle}><a href="#" style={navLinkStyle}>About</a></li>
                    <li id="Skill" style={navStyle}><a href="#" style={navLinkStyle}>Skill</a></li>
                    <li id="Projects" style={navStyle}><a href="#" style={navLinkStyle}>Projects</a></li>
                    <li id="Contacts" style={navStyle}><a href="#" style={navLinkStyle}>Contacts</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
