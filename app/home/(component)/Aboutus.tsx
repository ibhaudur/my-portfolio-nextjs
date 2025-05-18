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
              I am <strong>Ibhaudur Rahman</strong>, a{" "}
              <strong>FullStack Developer</strong> with{" "}
              <strong>{Experience()} years</strong> of professional experience.
              On the front end, I craft fast, accessible interfaces with{" "}
              <strong>
                React.js, Redux-toolkit, Next.js, Tailwind&nbsp;CSS, Bootstrap,
                Material&nbsp;UI, Formik,
              </strong>{" "}
              and core <strong>JavaScript</strong>. On the back end, I build
              secure, scalable APIs using{" "}
              <strong>Node.js, Express, MongoDB,</strong> and{" "}
              <strong>SQL&nbsp;databases</strong>. My toolkit also includes{" "}
              <strong>
                Docker, AWS, Git, TypeScript, caching strategies, AES
                encryption,
              </strong>{" "}
              and <strong>web-security best practices</strong>, enabling me to
              deliver polished, containerized, cloud-ready applications end to
              end.{" "}
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
              <strong>FullStack development course</strong> at Vebbox Software
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
