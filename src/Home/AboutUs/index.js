import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './style.scss';

const AboutUs = () => {
    return (
        <Card className="ps-aboutus">
            <Card.Body>
                <Row>
                    <Col className="ps-aboutus-title">
                        <h2>What my magic fingers do?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}>
                        <div className="ps-aboutus-img">
                            <img
                                src="https://i7.pngguru.com/preview/565/401/88/cupcake-teacake-bakery-logo-cheesecake-cake-thumbnail.jpg"
                                alt="Logo"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={8}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default AboutUs;