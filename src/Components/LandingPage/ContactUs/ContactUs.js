import React from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Slide } from "react-reveal";
import Footer from "../../Shared/Footer/Footer";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_qj1o2f9",
        e.target,
        "user_7pnWAd5svNRFlpeUsPKby"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully 😊😊");
        },
        (error) => {
          alert("An error occurred, Please try again 😢😢", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="pt-5 px-md-5 px-2 from_content">
      <Container fluid className="py-5 px-lg-5">
        <Slide bottom>
          <h2 className="text-dark text-center py-5 skills all_title_section">CONTACT US</h2>
        </Slide>

        <Slide bottom>
          <Row className="pt-md-5 pt-3">
            <Col sm={12} md={12} lg={6} xl={6} className="px-lg-4">
              <p>
                You can contact me if you want to know more about me. and You
                can also give me your opinion about my page. My inbox is always
                open for you. I will try my best to reply to all of your
                messages.
              </p>

              <div>
                <h6 className="contact pt-4 pb-2">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />{" "}
                  Dagonbuiyan,Fine,Bangladesh
                </h6>
                <a href="mailto:devabusayed69@gmail.com" className="contact">
                  <h6>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      className="mr-2"
                    />{" "}
                    <span>devabusayed69@gmail.com</span>
                  </h6>
                </a>
                <a href="tel:+9660532851600" className="phone">
                  <h6 className="contact pt-2">
                    <FontAwesomeIcon icon={faPhoneSquareAlt} className="mr-2" />{" "}
                    <span>+9660532851600</span>
                  </h6>
                </a>
              </div>

              <div className="social_media d-flex pt-5 pb-3">
                <a href="mailto:devabusayed69@gmail.com">
                  {" "}
                  <FontAwesomeIcon
                    className="social_mediaIcon"
                    icon={faEnvelopeOpenText}
                  />
                </a>
                <a
                  href="https://github.com/abu-sayed-1"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FontAwesomeIcon
                    className="social_mediaIcon"
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-abu-sayed/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FontAwesomeIcon
                    className="social_mediaIcon"
                    icon={faLinkedin}
                  />
                </a>
              </div>
            </Col>

            <Col sm={12} md={12} lg={6} xl={6} className="px-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control py-4"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control py-4"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control py-4"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-info btn-lg d-flex ml-auto mr-2">
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </Slide>
        <Footer />
      </Container>
    </section>
  );
};

export default ContactUs;
