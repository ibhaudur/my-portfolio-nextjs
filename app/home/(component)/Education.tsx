import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <div id="education" className="bg-gray-800 text-white p-3">
      <Container className="py-5 ">
        <Row className="justify-center">
          <Col lg={5} md={8} sm={8} xs={10}>
            <Image
              className="rounded-lg"
              src={require("@/public/images/jam.jpg")}
              alt="i"
            />
          </Col>
          <Col lg={5} md={8} sm={8} xs={10}>
            <h2>Jamal Mohammed College</h2>
            <p>
              I completed my BCA at Jamal Mohamed College, an autonomous
              institution founded in 1951 and affiliated with Bharathidasan
              University, Tiruchirappalli. This esteemed institute provided me
              with a strong foundation and awarded me my undergraduate degree.
            </p>
          </Col>
          <Row className="justify-content-center mt-5">
            <Col
              lg={{ order: "first", span: 5 }}
              md={{ order: "last", span: 8 }}
              sm={8}
              xs={{ order: "last", span: 10 }}
            >
              <h2>Dr.MGR University</h2>
              <p>
                {" "}
                Dr. M.G.R. Engineering College was founded in 1988. It acquired
                Deemed University status in 2003 as Dr. M.G.R. Educational and
                Research Institute as per the orders of the University. This is
                the institute where I completed my Master’s degree, PG MCA
                course.
              </p>
            </Col>
            <Col
              lg={{ order: "last", span: 5 }}
              md={8}
              sm={8}
              xs={{ order: "first", span: 10 }}
              className="text-center justify-content-center"
            >
              <Image
                className="rounded-lg"
                src={require("@/public/images/mgr.jpg")}
                alt="i"
              />{" "}
            </Col>
          </Row>
          <Row
            className="justify-content-center mt-5"
            data-aos="fade-up"
            data-aos-duration="2100"
            id="r3"
          >
            <Col
              lg={5}
              md={8}
              sm={8}
              xs={10}
              data-aos="fade-up-right"
              data-aos-duration="2000"
            >
              <Image
                className="rounded-lg"
                src={require("@/public/images/vb.jpg")}
                alt="i"
              />{" "}
            </Col>
            <Col lg={5} md={8} sm={8} xs={10}>
              <h2>VEBBOX Software Solutions</h2>
              <p>
                Vebbox was founded in 2016 by Vignesh Venkadesan. This is the
                software solutions startup where I completed my MERN Stack
                course.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
