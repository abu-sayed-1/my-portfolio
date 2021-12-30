import React from "react";
import "./AboutMe.css";
import aboutUs from "../../images/about-us.png";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import myResume from "./resume/Abu-Sayed-Resume.pdf";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="pt-lg-5 mt-5 pb-5 aboutMe_container">
      <Container fluid className="px-lg-5 pt-5">
        <Slide bottom>
          <Row className="px-lg-5">
            <Col sm={12} md={6} lg={6} xl={6}>
              <img src={aboutUs} alt="" className="img-fluid p-2" />
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <div className="pt-lg-3 pt-xl-5">
                <h1 className="pb-3">LET ME INTRODUCE MYSELF</h1>
                <p>
                  I'm a dedicated web developer and hard worker. I am from
                  Bangladesh but I currently live in Saudi Arabia. Now, I am
                  looking for my first job.
                </p>
                <p className="pt-2">
                  {" "}
                  and Strong knowledge of Responsive Design, Functionality,
                  Authentication, Database, Git GitHub, Deploy, etc. I am
                  open-minded and I try to learn new things quickly, and I
                  always try to keep myself updated, I want to become the best
                  programmer and dedicate all my skills and talents to
                  developing high-quality and unique websites.
                </p>
                <a
                  href={myResume}
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="button hire_btn mt-3 text-uppercase py-3">
                    <FontAwesomeIcon icon={faFileDownload} className="mr-1" />
                    GET Resume
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Slide>
      </Container>
    </section>
  );
};

export default AboutMe;
