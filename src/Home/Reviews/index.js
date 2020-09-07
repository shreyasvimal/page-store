import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div className="ps-review">
            <Row>
                <Col xs={12} className="text-center">
                    <h2>People Like Us</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={3}/>
                <Col sm={6} className="text-center">
                    <Carousel>
                        <Carousel.Item>
                            <iframe 
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnamrata.dass%2Fposts%2F10223814694934497&show_text=true&width=552&appId=119873875345602&height=184" 
                                width="552" 
                                title="Reviews"
                                height="184" 
                                style={{
                                    border: 'none',
                                    overflow: 'hidden'
                                }}
                                scrolling="no" 
                                frameborder="0" 
                                allowTransparency="true" 
                                allow="encrypted-media"></iframe>
                        </Carousel.Item>
                        <Carousel.Item>
                            <iframe 
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsanjukta.banerjee%2Fposts%2F10158646410964025&show_text=true&width=552&appId=119873875345602&height=176" 
                                width="552" 
                                height="176" 
                                title="Reviews"
                                style={{
                                    border: 'none',
                                    overflow: 'hidden'
                                }}
                                scrolling="no" 
                                frameborder="0" 
                                allowTransparency="true" 
                                allow="encrypted-media"></iframe>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={3}/>
            </Row>
        </div>
    );
}

export default Reviews;