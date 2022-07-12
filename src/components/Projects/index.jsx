import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import { useInView } from "react-intersection-observer";
import { useViewportScroll, motion, useTransform } from "framer-motion";

import { data } from "./data";

const variants = {
  hidden: { opacity: 0, x: -150 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
};
function Projects() {

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    
    <ProjectsCardWrap>
      <motion.h1 ref={ref} animate={inView ? 'show' : 'hidden'}
          variants={variants}
      >
        Recent Projects
      </motion.h1>
      <ul className="projects-list">
        {data.map((item, key) => (
          <li key={key}>
            <ProjectCard title={item.title} year={item.year} link={item.website} src={item.src} technologies={item.technologies} github={item.github}/>
          </li>
        ))}
      </ul>
    </ProjectsCardWrap>
  );
}

export default Projects;

export const ProjectsCardWrap = styled.div`
    position: relative;
    margin: 0 auto;

  .projects-list{
    display: flex;
    justify-content: center;
    flex-direction: column;

  }

  .projects-list li{
    align-self: flex-end;
    margin: 15% 0%;
  }

  .projects-list li .img-container:hover{
    cursor: pointer;
  }
  .projects-list li:nth-child(2n+1):hover img{
    transform: scale(1.2);
    /* transform: scale(1.2) rotate(5deg); */
  }
  .projects-list li:nth-child(2n+2):hover img{
    transform: scale(1.2);
  }
  
  .projects-list li:nth-child(2n+1){
    align-self: flex-start;
  }
  .projects-list li:nth-child(4n+2){
    align-self: flex-start;
  }
`;
