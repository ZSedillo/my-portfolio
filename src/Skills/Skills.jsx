import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Skills(){

    
    return(
        <>
        <div>
            <h1>My Skills</h1>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>sm=4</Col>
                    <Col lg={4} md={6} sm={12}>sm=4</Col>
                    <Col lg={4} md={6} sm={12}>sm=4</Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Skills