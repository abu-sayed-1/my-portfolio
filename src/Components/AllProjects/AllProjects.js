import React, { useReducer } from "react";
import "./AllProjects.css";
import NavBar from "../Shared/Navbar/NavBar";
import WorkFeatured from "../Shared/WorkFeatured/WorkFeatured";
import projectsData from "./projectsData.json";
import ProjectsSkillsNavbar from "../Shared/ProjectsSkillsNavbar/ProjectsSkillsNavbar";
import Footer from "../Shared/Footer/Footer";

const projectState = {
  allProjects: true,
  fullStack: false,
  frontend: false,
};

const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case "ALL_PROJECTS":
      return { allProjects: true, fullStack: false, frontend: false };
    case "FULL_STACK":
      return { fullStack: true, allProjects: false, frontend: false };
    case "FRONTEND":
      return { frontend: true, allProjects: false, fullStack: false };
    default:
      return state;
  }
};

const AllProjects = () => {
  document.title = "All Project | Abu Sayed Portfolio";

  const [state, dispatch] = useReducer(projectReducer, projectState);

  const projectData =
    (state.allProjects && projectsData) ||
    (state.fullStack && projectsData.slice(0, 4)) ||
    (state.frontend && projectsData.slice(4, 7));

  return (
    <div>
      <NavBar />
      <div className="pt-5">
        <h1 className="text-center pt-5 mt-5 skills all_title_section">ALL PROJECTS</h1>
        <ProjectsSkillsNavbar dispatch={dispatch} />
      </div>

      <div className="projects">
        <WorkFeatured projectData={projectData} />
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
