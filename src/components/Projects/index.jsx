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
            <ProjectCard title={item.title} year={item.year} link={item.link} speed={key + 2}/>
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
    margin: 6% 5%;
  }

  .projects-list li:nth-child(2n+1):hover img{
    transform: scale(1.2) rotate(5deg);
  }
  .projects-list li:nth-child(2n+2):hover img{
    transform: scale(1.2) rotate(-15deg);
  }
  
  .projects-list li:nth-child(2n+1){
    align-self: flex-end;
  }
  .projects-list li:nth-child(4n+2){
    align-self: center;
  }
`;
