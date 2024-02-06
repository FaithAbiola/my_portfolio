import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Python", "Frontend", "Java" ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/picture.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Faith Abiola</h1>
          <h3>
            <span ref={textRef}></span> Developer <br/>
          <a href="https://docs.google.com/document/d/1x6Etl7KqdimzWK3D7v7E-dBC924F5HNvlr1FpbEY3ik/edit?usp=sharing" target="_blank" class="resume" rel="noreferrer">
            <span class="btn-text">
                View Resume
            </span>
          </a>
          </h3>
        </div>
        <a href="#portfolio" className="portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
