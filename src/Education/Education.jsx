import React from 'react';


function Education(){
    const title = {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '62.5px',
        marginTop: '100px',
        marginBottom: '25px',
        textAlign: 'center',
    };

    const box = {
        backgroundColor: '#001011',
        color: '#ffff',
        display: 'flex',
        width: '40px',
        height:'40px',
        justifyContent: 'center',
        paddingLeft:'15px',
        marginLeft:'20px',
    };

    const year = {
        color: '#ffff',
        fontSize: '15px',
        lineHeight: '37px',
        zIndex:'2',
    };

    return (
        <>
            <div>
                <h1 style={title}>Education</h1>
            </div>
            <div style={{ backgroundColor: '#F4EBE8', padding: '100px 0' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className="experience-item">
                    <div className='shape-container'>
                        <div style={box}><h5 style={year}>Present</h5></div>
                        <div className='triangle'></div>
                        <div className='circle'></div>
                        <div className='vertical-line'></div>
                    </div>
                    <div className="experience-content">
                        <h2>University of Santo Thomas</h2>
                        <h3>Computer Science Student</h3>
                        <br/>
                        <ul>
                            <li>Learned basics of HTML and CSS</li>
                            <li>Learned Java, basics of PHP and Xampp, MySQL</li>
                            <li>Worked on website projects using HTML, CSS, Java, Derby, and SQL with two databases connected and executed SQL in NetBeans</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education