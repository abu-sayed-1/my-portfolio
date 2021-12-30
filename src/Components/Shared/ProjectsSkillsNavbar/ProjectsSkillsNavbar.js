import React from "react";
import "./ProjectsSkillsNavbar.css";
import { Nav } from "react-bootstrap";
import { Slide } from "react-reveal";
import { useLocation } from "react-router-dom";

const skillsDispatchData = [
  { type: "ALL_SKILL", name: "All" },
  { type: "MERN_STACK", name: "Mern" },
  { type: "TOOLS", name: "Tools" },
  { name: "Others" },
];

const projectsDispatchData = [
  { type: "ALL_PROJECTS", name: "All" },
  { type: "FULL_STACK", name: "Full-Stack" },
  { type: "FRONTEND", name: "Frontend" },
  { name: "Others" },
];

const ProjectsSkillsNavbar = ({ dispatch }) => {
  const location = useLocation();

  const check =
    (location.pathname === "/" && skillsDispatchData) ||
    (location.pathname === "/all-projects" && projectsDispatchData);
  return (
    <Slide bottom>
      <Nav className="d-flex justify-content-center navbar_container pt-3 ">
        {check &&
          check.map((dis, index) => (
            <Nav.Link
              key={index}
              onClick={() => dis.type && dispatch({ type: dis.type })}
              className="mr-md-5 projectsSkills_navbar"
              href="#"
            >
              {dis.name}
            </Nav.Link>
          ))}
      </Nav>
    </Slide>
  );
};

export default ProjectsSkillsNavbar;
