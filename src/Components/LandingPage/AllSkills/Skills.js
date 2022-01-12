import React, { useReducer } from "react";
import "./Skills.css";
import skillData from "./skills.json";
import { Container } from "react-bootstrap";
import SkillsItem from "./SkillsItem/SkillsItem";
import { Slide } from "react-reveal";
import ProjectsSkillsNavbar from "../../Shared/ProjectsSkillsNavbar/ProjectsSkillsNavbar";

const skillsState = {
  allSkills: true,
  mernStack: false,
  tools: false,
};

const skillsReducer = (state = skillsState, action) => {
  switch (action.type) {
    case "ALL_SKILL":
      return { allSkills: true, mernStack: false, tools: false };
    case "MERN_STACK":
      return { mernStack: true, allSkills: false, tools: false };
    case "TOOLS":
      return { tools: true, mernStack: false, allSkills: false };

    default:
      return state;
  }
};

const Skills = () => {
  const [state, dispatch] = useReducer(skillsReducer, skillsState);

  const skillsData =
    (state.allSkills && skillData) ||
    (state.mernStack && skillData.slice(2, 10)) ||
    (state.tools && skillData.slice(10, 21));

  return (
    <div id="skills">
      <section className="px-lg-5 py-5 skills_container">
        <Container fluid>
          <Slide bottom>
            <h1 className="text-center skills all_title_section">SKILLS</h1>
          </Slide>
          <ProjectsSkillsNavbar dispatch={dispatch} />
          {skillsData && (
            <div>
              <SkillsItem skillsData={skillsData} />
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Skills;
