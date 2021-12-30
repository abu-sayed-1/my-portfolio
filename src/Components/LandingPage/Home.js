import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./AllSkills/Skills";
import ContactUs from "./ContactUs/ContactUs";
import projectData from "../AllProjects/projectsData.json";
import WorkFeatured from "../Shared/WorkFeatured/WorkFeatured";

const Home = () => {
  document.title = "Welcome to Abu Sayed Portfolio";
  const projects = projectData.slice(0, 3);
  return (
    <div>
      <HeaderMain />
      <AboutMe />
      <WorkFeatured projectData={projects} />
      <Skills />
      <ContactUs />
    </div>
  );
};

export default Home;
