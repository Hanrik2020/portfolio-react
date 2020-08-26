import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content(props) {
    return (
        <Container fluid={true}>
            <Row className=" justify-content-center">
                <Col className="px-4" md={7}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;