import React from 'react';
import { Carousel, Card, Col, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div className="ps-review">
            <Row>
                <Col xs={12} className="text-center">
                    <h2>People Like Us</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={2}/>
                <Col sm={8}>
                    <Carousel>
                        <Carousel.Item>
                            <Card>
                                <Card.Body>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card>
                                <Card.Body>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={2}/>
            </Row>
        </div>
    );
}

export default Reviews;