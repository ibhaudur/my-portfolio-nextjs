import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <section id="education" className="bg-gray-800 text-white">
      <Container className="py-5">
        <Row className="justify-center">
          <Col lg={4} md={8} sm={8} xs={10}>
            <div className="rounded-lg border-solid border-2 border-green-500 h-100">
              <Image
                className="rounded-lg"
                src={require("@/public/images/mgr.jpg")}
                alt="i"
              />
              <div className="p-2">
                <h5>Dr.MGR University</h5>
                <p className="text-xs">Master of Computer Applications (MCA)</p>
                <p className="text-sm">
                  Dr. M.G.R. Engineering College, founded in 1988, acquired
                  Deemed University status in 2003 as Dr. M.G.R. Educational and
                  Research Institute as per the orders of the University. I
                  completed my Master’s degree (PG MCA course) at this esteemed
                  institution.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} sm={8} xs={10}>
            <div className="rounded-lg border-solid border-2 border-green-500 h-100">
              <Image
                className="rounded-lg"
                src={require("@/public/images/jam.jpg")}
                alt="i"
              />
              <div className="p-2">
                <h5>Jamal Mohammed College</h5>
                <p className="text-xs">Bachelor of Computer Applications (BCA)</p>
                <p className="text-sm">
                  Jamal Mohamed College, an autonomous institution founded in
                  1951 and affiliated with Bharathidasan University,
                  Tiruchirappalli, provided me with a strong foundation. I
                  completed my BCA at this esteemed institute and was awarded my
                  undergraduate degree.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} sm={8} xs={10}>
            <div className="rounded-lg border-solid border-2 border-green-500 h-100">
              <Image
                className="rounded-lg"
                src={require("@/public/images/vb.jpg")}
                alt="i"
              />
              <div className="p-2">
                <h5>VEBBOX Software Solutions</h5>
                <p className="text-xs">MERN Stack Course</p>
                <p className="text-sm">
                  Vebbox was founded in 2016 by Vignesh Venkadesan. This is the
                  software solutions startup where I completed my MERN Stack
                  course.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
