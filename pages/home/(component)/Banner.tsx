import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="bg-gray-800 text-white p-3">
      <Container className="min-h-96 my-5">
        <Row className="justify-center items-center gap-2">
          <Col lg={6} className="justify-center">
            <div className="my-4">
              <p className="text-1xl mb-0">Hello, It's Me</p>
              <p className="text-4xl mb-0">Ibhaudur Rahman</p>
              <p className="text-1xl">
                And i'm a{" "}
                <span className="text-green-600">Software Developer</span>
              </p>
              <p>
                I am a front-end developer with 2.5 years of experience
                specializing in React.js, Redux, Next.js, and styling frameworks
                like Bootstrap, Material-UI, and Tailwind CSS. I also have
                skills in back-end technologies including Node.js, Express, and
                MongoDB. My focus is on creating dynamic, responsive, and
                user-friendly web applications.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="flex justify-center p-4">
              <Image
                className="rounded-full border-solid border-4 border-green-400"
                src={require("@/public/images/ibhaudur.jpg")}
                alt="i"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
