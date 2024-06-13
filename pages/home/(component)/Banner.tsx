import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Icons = [
  { tag: FaLinkedin },
  { tag: FaWhatsapp },
  { tag: FaInstagram },
  { tag: CiFacebook },
];
const Banner = () => {
  return (
    <div className="bg-gray-800 text-white p-3">
      <Container className="min-h-96 my-5">
        <Row className="justify-center items-center gap-2">
          <Col lg={7} className="justify-center">
            <div className="sm:hidden flex justify-center p-5">
              <Image
                className="rounded-full border-solid border-4 border-green-500"
                src={require("@/public/images/ibhaudur.jpg")}
                alt="i"
              />
            </div>
            <div className="my-4">
              <p className="text-2xl mb-0">Hello, It's Me</p>
              <p className="text-4xl font-bold text-orange-500 mb-0">
                Ibhaudur Rahman
              </p>
              <p className="text-2xl">
                And i'm a{" "}
                <span className="text-green-600">Software Developer</span>
              </p>
              <p>
                I am a front-end developer with 2.5 years of experience in
                React.js, Redux, Next.js, and Tailwind CSS. I also work with
                Node.js, Express, and MongoDB to build dynamic web applications.
              </p>
              <div className="flex gap-2">
                {Icons.map((item) => (
                  <item.tag className="text-2xl text-green-500 cursor-pointer hover:text-white" />
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button className="border-solid border-1 text-green-500 border-green-500 px-3 py-2 rounded-3xl hover:text-white hover:bg-green-500">
                  Download CV
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="hidden flex justify-center p-5 sm:block">
              <Image
                className="rounded-full border-solid border-4 border-green-500"
                src={require("@/public/images/ibhaudur.jpg")}
                width={300}
                height={300}
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
