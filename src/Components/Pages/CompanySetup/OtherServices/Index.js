import React, { useEffect } from "react";
import Section1 from "./Section1/Index";
import Experience from "../Freezone/Overview/Section3/Left";
import Section2 from "./Section2/Index";
import Section3 from "./Section3/Index";
import Section4 from "./Section4/Index";
import Section5 from "./Section5/Index";
import Section6 from "./Section6/Index";
import Section7 from "./Section7/Index";
import Section8 from "./Section8/Index";

const Index = () => {
  useEffect(() => {
    const element = document.getElementById("start");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  }, []);
  return (
    <>
      <div id="start" style={{ marginBottom: "30px" }}>
        <Section1 />
      </div>
      <center>
        <div style={{ marginBottom: "30px" }}>
          <Experience />
        </div>
      </center>
      <div style={{marginBottom: "30px"}}>
        <Section2 />
      </div>
      <div style={{marginBottom: "30px"}}>
        <Section3 />
      </div>
      <div style={{marginBottom: "30px"}}>
        <Section4 />
      </div>
      <div style={{marginBottom: "30px"}}>
        <Section5 />
      </div>
      <div style={{marginBottom: "30px"}}>
        <Section6 />
      </div>
      <div style={{marginBottom: "30px"}}>
        <Section7 />
      </div>
      <div style={{marginBottom: "30px"}}>
        <Section8 />
      </div>
    </>
  );
};

export default Index;
