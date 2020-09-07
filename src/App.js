import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';

const containerStyle = {
  paddingLeft: 0,
  paddingRight: 0
};

const App = () => (
  <Container fluid style={containerStyle}>
    <Row>
      <Col xs={12}>
        <Header/>
      </Col>
      <Col xs={12}>
        <Home />
      </Col>
      <Col xs={12}>
        Footer
      </Col>
    </Row>
  </Container>
);

export default App;
