import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const data = [
  {
    title: "Movie App",
    year: 2022,
    link: "https://google.ca",
  },
  {
    title: "Movie App",
    year: 2022,
    link: "https://google.ca",
  },
  {
    title: "Movie App",
    year: 2022,
    link: "https://google.ca",
  },
  {
    title: "Movie App",
    year: 2022,
    link: "https://google.ca",
  },
  {
    title: "Movie App",
    year: 2022,
    link: "https://google.ca",
  },
];
function Projects() {
  return (
    <ProjectsCardWrap>
      <h1>Recent Projects</h1>
      <ul className="projects-list">
        {data.map((item, key) => (
          <li>
            <ProjectCard title={item.title} year={item.year} link={item.link} />
          </li>
        ))}
      </ul>

      {/* Map trough ProjectCard here */}
    </ProjectsCardWrap>
  );
}

export default Projects;

export const ProjectsCardWrap = styled.div`
  display: flex;
  flex-direction: column;

  .projects-list{
    display: flex;
    flex-direction: column;
  }

  .projects-list li{
    margin: 20% 5%;
  }
  .projects-list li:nth-child(2n+1){
    align-self: flex-end;
  }
  .projects-list li:nth-child(4n+2){
    align-self: center;

  }
`;
