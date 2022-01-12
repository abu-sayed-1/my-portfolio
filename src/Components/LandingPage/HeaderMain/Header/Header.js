import React from "react";
import "./Header.css";
import mainImg from "../../../images/banner-image.png";
import { Container, Row, Col } from "react-bootstrap";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <main id="headerMain" className="header_container mt-5 pt-lg-5 pb-5">
      <Container fluid className="px-lg-5 pt-5">
        <Row className="px-lg-5 pt-3">
          <Col sm={12} md={6} lg={6} xl={6}>
            <div className="pt-5">
              <Fade left big>
                <h3 className="pt-3 text_title all_title_section">Hey</h3>
                <h1 className="text_title all_title_section">I AM ABU SAYED</h1>
                <h4 className="text_title pt-2">FULL-STACK WEB DEVELOPER</h4>
                <h4 className="pt-2">
                  I work in{" "}
                  <Typical
                    className="show_skills"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "JavaScript(ES6) ✔",
                      1000,
                      "React.js ✔",
                      1000,
                      "Bootstrap ✔",
                      1000,
                      "Node.js ✔",
                      1000,
                      "Express.js ✔",
                      1000,
                      "MongoDB ✔",
                      1000,
                      "Redux ✔",
                      1000,
                      "Redux-Thunk ✔",
                      1000,
                      "Axios ✔",
                      1000,
                    ]}
                  />
                </h4>
                <div className="site-buttons pt-5">
                  <div className="d-flex flex-row flex-wrap">
                    <a
                      className="text-decoration-none text-white"
                      href="mailto:devabusayed69@gmail.com"
                    >
                      <button
                        type="button"
                        className="button hire_btn shadow-lg mr-4 text-uppercase"
                      >
                        hire me
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1xpug-Y23EIvioaF9xhw0o6ep17ShsibT/view"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="button get_resume text-uppercase "
                      >
                        Resume
                      </button>
                    </a>
                  </div>
                </div>
              </Fade>
              <div
                className="d-none d-md-block social_media 
                  d-flex-column fixed_bottom pl-2 pb-4 pt-5"
              >
                <a
                  href="mailto:devabusayed69@gmail.com"
                  target="blank"
                  rel="noopener noreferrer"
                  className="fixed_socialMedia"
                >
                  <FontAwesomeIcon
                    className="social_mediaIcon"
                    icon={faEnvelopeOpenText}
                  />
                </a>
                <a
                  href="https://github.com/abu-sayed-1"
                  target="blank"
                  rel="noopener noreferrer"
                  className=" my-4 fixed_socialMedia"
                >
                  <FontAwesomeIcon
                    className="social_mediaIcon"
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-abu-sayed/"
                  target="blank"
                  rel="noopener noreferrer"
                  className="fixed_socialMedia"
                >
                  <FontAwesomeIcon
                    className="social_mediaIcon"
                    icon={faLinkedin}
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} className="headerImg">
            <Fade right big>
              <img src={mainImg} className="img-fluid" alt="" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Header;
