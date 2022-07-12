import React from 'react'
import styled from 'styled-components'

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useNavigate, useLocation } from "react-router-dom";

function ProjectCard({title, src, technologies, link, github}) {
  let navigate = useNavigate();
  const location = useLocation();
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  const handleClick = () => {
    // If we are on home, redirect to detail page. Else do nothing
    if(location.pathname === "/"){
      navigate(`/project/${title}`, { state: {title, src, technologies, link, github}})
    }
  }

  return (
    <Card 
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1, ease: 'easeOut' }}
      ref={ref}
      onClick={handleClick}
    >
        <div className="img-container">    
          <img src={src} />
          <div className="overlay">
            <div className="text">
              <h2>{title}</h2>
            </div>
          </div>                  
        </div>
        {/* <h3>{title}</h3> */}
    </Card>
  )
}

export default ProjectCard

export const Card = styled(motion.div)`

@keyframes pulse{
  0%  {   filter: blur(0px) }
  25%  {   filter: blur(2px) }
  50%  {   filter: blur(5px) }
  75%  {   filter: blur(2px) }
  100%  {   filter: blur(0px) }
}
h3{
  text-align: center;
}
.img-container{
  margin: 0 auto;
  width: 60%;
  min-width: 300px;
  background: transparent;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
  border-radius: 5px;
  transition: .5s all ease-in-out;
}

.img-container:hover{

  box-shadow: 1px 2px 15px #ffffff39;
  /* animation-name: pulse;
  animation-duration: 1s; */
}


img{
  width: 100%;
  display: block;
  transition: .5s all ease-in-out;
}

.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #25252593;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

:hover .overlay{
  opacity: 1;
}

`