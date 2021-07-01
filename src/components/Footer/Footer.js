import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div bg="dark" variant="dark">
      <Container >
      <Row>
    <Col xs={6} md={4}>
      <h1>Foooter-1</h1>
    </Col>
    <Col xs={6} md={4}>
    <h1>Foooter-2</h1>
    </Col>
    <Col xs={6} md={4}>
    <h1>Foooter-3</h1>
    </Col>
  </Row>
      </Container>
    </div>
  );
};

export default Footer;
