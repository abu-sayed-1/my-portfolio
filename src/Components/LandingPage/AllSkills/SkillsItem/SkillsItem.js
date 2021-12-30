import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
const SkillsItem = ({ skillsData }) => {
  return (
    <Container>
      <Row className="d-flex mt-4 justify-content-center align-items-center">
        {skillsData.map((item, index) => (
          <Col
            key={index}
            md={3}
            lg={3}
            xl={2}
            id="skillItem"
            className="d-flex justify-content-center w-sm-50 mr-md-4 mt-3 py-2"
          >
            <div>
              <Fade bottom>
                <img
                  src={item.img}
                  className="p-2"
                  width="80"
                  height="90"
                  alt={item.title}
                />
                <p className="text-center mb-0">{item.title}</p>
              </Fade>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsItem;
