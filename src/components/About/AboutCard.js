import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi I am <span className="purple">Andebet Molla </span>
            from <span className="purple"> Ethiopia.</span>  currently Studying in Wolkite University.
            <br />
            I'm a dedicated and passionate computer science student with a strong interest 
            in software development, and emerging technologies. My academic 
            journey has equipped me with a solid foundation in programming, problem-solving,
             and critical thinking skills. I'm eager to apply my knowledge and continue learning 
             through hands-on projects and collaborative opportunities.
           
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Writing Tech Blogs</span>
            </li>
           <li className="about-activity">
             <ImPointRight /> <span className="purple">Reviewing Tech Products</span>
             </li> 
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Travelling</span>
            </li>
              <li className="about-activity">
              <ImPointRight /><span className="purple"> Playing Games</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In a world of algorithms and data, your creativity is the ultimate innovation engine."{" "}
          </p>
          <footer className="blockquote-footer">Andebet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
