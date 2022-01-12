import React from "react";
import "./AboutMe.css";
import aboutUs from "../../images/about-us.png";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import myResume from "./resume/abu-sayed-Resume.pdf";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="pt-lg-5 mt-5 pb-5 aboutMe_container">
      <Container fluid className="px-lg-5 pt-5">
        <Slide bottom>
          <Row className="px-lg-5">
            <Col sm={12} md={12} lg={6} xl={6} className="p-md-5 p-lg-2">
              <img src={aboutUs} alt="" className="img-fluid p-md-5 p-lg-2" />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} className="aboutContent">
              <div className="pt-lg-3 pt-xl-5">
                <h1 className="pb-3 all_title_section">LET ME INTRODUCE MYSELF</h1>
                <p className="px-md-5 px-lg-0">
                  I'm a dedicated web developer and hard worker. I am from
                  Bangladesh but I currently live in Saudi Arabia. Now, I am
                  looking for my first job.
                </p>
                <p className="pt-2 px-md-5 px-lg-0">
                  I have strong Efficiency of Responsive Web Design,
                  Functionality, Authentication, REST API, Database, Git GitHub,
                  Deploy, Google Search, etc, and I try to write clean and scalable
                  code. I have been attached in programming for over one and a
                  half years. and I am open-minded. I try to learn new things
                  quickly, and I always try to keep myself updated, I want to
                  become the best programmer and dedicate all my skills and
                  talents to developing high-quality and unique websites.
                </p>
                <a
                  href={myResume}
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                  className="d-flex justify-content-md-center justify-content-lg-start"
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
