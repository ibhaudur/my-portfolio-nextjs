import React from "react";
import Banner from "./(component)/Banner";
import Aboutus from "./(component)/Aboutus";
import Topic from "@/components/Topic";
import Education from "./(component)/Education";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Topic
        Head="About"
        con="Experienced Front-End Developer with Full-Stack Capabilities"
        i="ab"
      />
      <Aboutus />
      <Topic
        Head="Educations"
        con="Academic Journey, My Path through Education"
        i="ab"
      />
      <Education />
      <Topic
        Head="Experience"
        con="Professional Journey, Gaining Experience and Expertise"
        i="ab"
      />
    </React.Fragment>
  );
};

export default HomePage;
