"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Experience, Icons } from "../utils/data";

const Banner = () => {
  return (
    <section className="bg-gray-800 text-white p-3">
      <Container className="min-h-96 my-5">
        <Row className="justify-center items-center gap-0 lg:gap-2">
          <Col md={6} lg={7} className="justify-center">
            <div className="md:hidden flex justify-center px-10 py-5">
              <Image
                className="rounded-full border-solid border-4 border-green-500"
                src="/images/ibhaudur.jpg"
                alt="Ibhaudur Rahman"
                width={300}
                height={300}
              />
            </div>
            <div className="my-4 text-center">
              <p className="md:text-xl lg:text-2xl mb-0 md:text-left">
                Hello, It's Me
              </p>
              <p className="text-4xl font-bold text-orange-500 mb-0 md:text-left">
                Ibhaudur Rahman
              </p>
              <p className="md:text-xl lg:text-xl md:text-left">
                And I'm a{" "}
                <span className="text-green-600">Software Developer</span>
              </p>
              <p className="md:text-left">
                I am a front-end developer with {Experience()} years of
                experience in React.js, Redux, Next.js, and Tailwind CSS. I also
                work with Node.js, Express, and MongoDB to build dynamic web
                applications.
              </p>
              <div className="flex justify-center md:justify-start gap-2">
                {Icons.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <item.tag className="text-2xl text-green-500 cursor-pointer hover:text-white" />
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="/ibhaudur_Rahman_CV.pdf"
                  download
                  className="border-solid border-1 text-green-500 border-green-500 px-3 py-2 rounded-3xl hover:text-white hover:bg-green-500"
                >
                  Download CV
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="hidden md:flex justify-center p-5">
              <Image
                className="rounded-full border-solid border-4 border-green-500"
                src="/images/ibhaudur.jpg"
                width={300}
                height={300}
                alt="Ibhaudur Rahman"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
