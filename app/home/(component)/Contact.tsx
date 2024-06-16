import React from "react";
import Form from "./Form";
import { Col, Container, Row } from "react-bootstrap";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";

const Icons = [
  { tag: FaLinkedin },
  { tag: FaWhatsapp },
  { tag: FaInstagram },
  { tag: CiFacebook },
];
const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-800 py-4">
      <Container>
        <Row className="justify-center">
          <Col md={4} className="text-white py-3">
            <div>
              <p className="text-3xl">Portfolio</p>
              <p>
                Our mission is to enhance business growth of our customers with
                creative design, development and to deliver market defining high
                quality solutions that create value and reliable competitive
                advantage to customers around the globe.
              </p>
              <div className="flex gap-2">
                {Icons.map((item) => (
                  <item.tag className="text-2xl text-green-500 cursor-pointer hover:text-white" />
                ))}
              </div>
            </div>
          </Col>
          <Col md={4} className="text-white py-3">
            <div>
              <p className="text-2xl underline">Contact</p>
              <div className="flex gap-2">
                <IoLocationOutline className="text-3xl" />
                <p>
                  112, Pidari Kovil St, near Kunjamal School,Kudavasal, 612601,{" "}
                  <br></br>
                  Tiruvarur district, Tamil Nadu.
                </p>
              </div>
              <div className="flex gap-2">
                <HiOutlineMail className="text-xl" />
                <p>ibhaudurrahman1999@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <RiPhoneLine className="text-xl" />
                <p>+91 9715 106 426</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Form />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
