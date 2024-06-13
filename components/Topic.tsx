import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Topic = (props: any) => {
  return (
    <Container fluid id="about" className="bg-slate-200">
      <Row className="py-2" id={props.i}>
        <Col lg={12} id="text">
          <h1 id="bf">{props.Head}</h1>
          <p>{props.con}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Topic;
