import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top d-flex justify-content-between p-3">
                    <Col className="p-0 d-inline" md={3} xs={5}>
                        Hnk Webworks
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} xs={5}>
                        Copyright 2020
                    </Col>
                </Row>
            </Container>
        </footer >

    );
}

export default Footer;