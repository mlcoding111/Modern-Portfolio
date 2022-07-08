import React from 'react'
import styled from 'styled-components'

function ProjectCard({title, year, link}) {

  return (
    <Card>
        <div className="img-container">
          <img src="https://picsum.photos/500" />
          <div className="overlay">
            <div className="text">
              <h2>Project</h2>
            </div>
          </div>                  
        </div>
        <h3>{title}</h3>
    </Card>
  )
}

export default ProjectCard

export const Card = styled.div`
.img-container{
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
  margin: 0 auto;
}

img{
  display: block;
  width: 100%;
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
  background-color: #9b9b9b94;
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