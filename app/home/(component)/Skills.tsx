import React from "react";
import Html5 from "@/public/images/technologies/html5.svg";
import CSS3 from "@/public/images/technologies/css-3.svg";
import Bootstrap from "@/public/images/technologies/bootstrap.svg";
import MaterialUi from "@/public/images/technologies/materialui.svg";
import TailwindCss from "@/public/images/technologies/tailwindcss.svg";
import JavaScript from "@/public/images/technologies/javascript.svg";
import ReactJs from "@/public/images/technologies/react.svg";
import NextJs from "@/public/images/technologies/next-js.svg";
import NodeJs from "@/public/images/technologies/node-js.svg";
import Express from "@/public/images/technologies/express.svg";
import MongoDb from "@/public/images/technologies/mongo.svg";
import GitHub from "@/public/images/technologies/github.svg";
import AWS from "@/public/images/technologies/AWS.svg";
import Ts from "@/public/images/technologies/ts.svg";
import Docker from "@/public/images/technologies/docker.svg";
import SQL from "@/public/images/technologies/sql.svg";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

const languages_and_Framework = [
  { image: Html5, name: "Html5" },
  { image: CSS3, name: "CSS3" },
  { image: JavaScript, name: "JavaScript" },
  { image: Ts, name: "TypeScript" },
  { image: ReactJs, name: "React Js" },
  { image: NextJs, name: "Next Js" },
  { image: NodeJs, name: "Node Js" },
  { image: Express, name: "Express" },
  { image: MongoDb, name: "MongoDb" },
  { image: Bootstrap, name: "Bootstrap" },
  { image: MaterialUi, name: "MaterialUi" },
  { image: TailwindCss, name: "TailwindCss" },
  { image: GitHub, name: "GitHub" },
  { image: AWS, name: "AWS" },
  { image: Docker, name: "Docker" },
  { image: SQL, name: "MySQL" },
];

const Skills = () => {
  return (
    <React.Fragment>
      <h3 className="text-center my-4 underline">Skills</h3>
      <Row className="justify-center">
        {languages_and_Framework.map((item, index) => (
          <Col key={index} xs={5} sm={4} md={3} className="mb-3">
            <div className="flex justify-center">
              <Image
                className="w-24"
                src={item.image}
                alt="i"
                width={200}
                height={200}
              />
            </div>
            <p className="text-center">{item.name}</p>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Skills;
