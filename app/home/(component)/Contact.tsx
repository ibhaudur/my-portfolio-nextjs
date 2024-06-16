import React from "react";
import Form from "./Form";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" className="bg-slate-800 py-4">
      <Container>
        <Row className="justify-center">
          <Col md={6}></Col>
          <Col md={4}>
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
