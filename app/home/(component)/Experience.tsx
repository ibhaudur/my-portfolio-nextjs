"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import {
  HclTechExperience,
  KirshiExperience,
  VebboxExperience,
} from "@/utils/data";
import Skills from "./Skills";
const Experience = () => {
  const [view, setView] = useState<String>("");
  return (
    <section id="experience">
      <Container className="py-5">
        <Row className="justify-center items-center">
          <Col xs={10} md={10} className="mb-3">
            <Row className="border-1 border-solid border-green-500 p-3 rounded-lg">
              <Col sm={4} md={2} className="flex items-center">
                <Image
                  className="rounded-lg w-100 py-3"
                  src={require("@/public/images/hcltech.png")}
                  alt="i"
                />
              </Col>
              <Col sm={8} md={9}>
                <div className="py-3">
                  <h4 className="font-bold">HCLTech</h4>
                  <p className="mb-3">Mar, 2025 - Present | Lead Engineer</p>
                  <button
                    className={`border-solid border-1  ${
                      view === "kirshi"
                        ? "text-white border-none bg-slate-700 "
                        : "text-green-500 border-green-500 hover:text-white hover:bg-green-500"
                    }  px-3 py-2 rounded-3xl `}
                    onClick={() => {
                      view === "kirshi" ? setView("") : setView("kirshi");
                    }}
                  >
                    {view === "kirshi" ? "Close Projects" : "View Projects"}
                  </button>
                </div>
              </Col>
              <Col md={12} className={view === "kirshi" ? "" : "hidden"}>
                <div className="py-3">
                  <p className="text-2xl mb-2">Projects</p>
                  <div className="">
                    <Accordion
                      className="border-solid border-2"
                      defaultActiveKey="0"
                      flush
                    >
                      {HclTechExperience?.map((item, index) => (
                        <Accordion.Item eventKey={String(index)} key={index}>
                          <Accordion.Header className="font-semibold">
                            {item.title}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="list-disc">
                              {item.description.map((item: any, i: number) => (
                                <li key={i} className="mb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={10} md={10} className="mb-3">
            <Row className="border-1 border-solid border-green-500 p-3 rounded-lg">
              <Col sm={4} md={2} className="flex items-center">
                <Image
                  className="rounded-lg w-100 py-3"
                  src={require("@/public/images/kirshi.jpeg")}
                  alt="i"
                />
              </Col>
              <Col sm={8} md={9}>
                <div className="py-3">
                  <h4 className="font-bold">
                    KIRSHI TECHNOLOGIES AND CONSULTING Pvt. Ltd.
                  </h4>
                  <p className="mb-3">
                    Feb, 2022 - Feb, 2025 | Software Developer
                  </p>
                  <button
                    className={`border-solid border-1  ${
                      view === "kirshi"
                        ? "text-white border-none bg-slate-700 "
                        : "text-green-500 border-green-500 hover:text-white hover:bg-green-500"
                    }  px-3 py-2 rounded-3xl `}
                    onClick={() => {
                      view === "kirshi" ? setView("") : setView("kirshi");
                    }}
                  >
                    {view === "kirshi" ? "Close Projects" : "View Projects"}
                  </button>
                </div>
              </Col>
              <Col md={12} className={view === "kirshi" ? "" : "hidden"}>
                <div className="py-3">
                  <p className="text-2xl mb-2">Projects</p>
                  <div className="">
                    <Accordion
                      className="border-solid border-2"
                      defaultActiveKey="0"
                      flush
                    >
                      {KirshiExperience.map((item, index) => (
                        <Accordion.Item eventKey={String(index)} key={index}>
                          <Accordion.Header className="font-semibold">
                            {item.title}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="list-disc">
                              {item.description.map((item, i) => (
                                <li key={i} className="mb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={10} md={10}>
            <Row className="border-1 border-solid border-green-500 p-3 rounded-lg">
              <Col md={2}>
                <Image
                  className="rounded-lg w-100 py-3"
                  src={require("@/public/images/vebbox.jpeg")}
                  alt="i"
                />
              </Col>
              <Col md={9}>
                <div className="py-3">
                  <h4 className="font-bold">Vebbox software solutions</h4>
                  <p className="mb-3">Sep, 2021 - Feb, 2022 | Internship</p>
                  <button
                    className={`border-solid border-1  ${
                      view === "vebbox"
                        ? "text-white border-none bg-slate-700 "
                        : "text-green-500 border-green-500 hover:text-white hover:bg-green-500"
                    }  px-3 py-2 rounded-3xl `}
                    onClick={() => {
                      view === "vebbox" ? setView("") : setView("vebbox");
                    }}
                  >
                    {view === "vebbox" ? "Close Projects" : "View Projects"}
                  </button>
                </div>
              </Col>
              <Col md={12} className={view === "vebbox" ? "" : "hidden"}>
                <div className="py-3">
                  <p className="text-2xl mb-2">Projects</p>
                  <div className="">
                    <Accordion
                      className="border-solid border-2"
                      defaultActiveKey="0"
                      flush
                    >
                      {VebboxExperience.map((item, index) => (
                        <Accordion.Item eventKey={String(index)} key={index}>
                          <Accordion.Header className="font-semibold">
                            {item.title}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="list-disc">
                              {item.description.map((item, i) => (
                                <li key={i} className="mb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={10} lg={8}>
            <Skills />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
