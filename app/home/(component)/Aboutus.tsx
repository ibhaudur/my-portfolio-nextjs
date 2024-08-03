import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Experience } from "../utils/data";

const Aboutus = () => {
  return (
    <Container id="about">
      <Row className="justify-center my-5">
        <Col md={10}>
          <div className="leading-loose">
            <p>
              I am Ibhaudur Rahman, a software developer with expertise in both
              front-end and back-end technologies. I have
              <strong> {Experience()} years of experience </strong>
              in front-end development using
              <strong>
                {" "}
                React.js, Redux, Next.js, Bootstrap, Material UI and Tailwind
                CSS.
              </strong>{" "}
              Additionally, I am proficient in back-end development with
              <strong> Node.js, Express, and MongoDB. </strong>
            </p>
            <p>
              I hold a{" "}
              <strong>Master of Computer Applications (MCA) degree</strong> from
              Dr.MGR Educational and Research institute, Chennai. which further
              honed my technical skills and knowledge. During my academic and
              professional journey, I have worked on various projects,
              showcasing my ability to develop dynamic and responsive web
              applications. My education includes a{" "}
              <strong> Bachelor of Computer Applications (BCA)</strong> from
              Jamal Mohamed College, an autonomous institution affiliated with
              Bharathidasan University, Tiruchirappalli.
            </p>
            <p>
              Furthermore, I have completed a{" "}
              <strong>full-stack development course</strong> at Vebbox Software
              Solution, which has enriched my understanding and skills in
              building comprehensive web applications.
            </p>
            <p>
              {" "}
              Throughout my career, I have consistently demonstrated my
              capability to work on complex projects, delivering high-quality
              solutions and contributing effectively to my team's success.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;
