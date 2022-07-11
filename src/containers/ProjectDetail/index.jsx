import React from 'react'
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from '../../components/Projects/ProjectCard'
import Button from '../../components/Reusable/Button';

function ProjectDetail() {
  const location = useLocation();
  const {title, src, technologies, link} = location.state;

  // Import all techno svgs
  function importAll(r) {
      return r.keys().map(r);
  }

  const imagesData = importAll(require.context('../../components/assets/skills', false, /\.(png|jpe?g|svg)$/));

  // Map trough all svg icons to see if it match with the project technos
  const filterTechnologies = () =>{
    let list = []
    technologies.forEach(item => {
      imagesData.forEach(image => {
        if(image.includes(item.toLowerCase())){
          list.push(image)
        }
      })
    })
    // return list of used technologies to render
    return list
  }

  const handleBtnClick = () => {
    window.open(link)
  }

  return (
    <Wrap>
      <h1>{title}</h1>
      <ProjectCard title={title} src={src}/>
      <Button handleClick={handleBtnClick}>Visit</Button>

      <div className="techno-info">
        <h1>Technologies</h1>
        <h4>USED</h4>

        <TechnoList>
          {filterTechnologies().map((item, index) => (
            <li key={index}>
              <img src={item} height="90"/>
            </li>
          ))}
        </TechnoList>
      </div>

    </Wrap>
  )
}

export default ProjectDetail

export const Wrap = styled.div`
  padding-block: 2rem;
  width: min(95%, 75rem);
  margin-inline: auto;
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;

  .techno-info{
    text-align: center;
  }

  h3{
    display: none;
  }

  .img-container{
    margin: 3em auto;
    width: 60%;
  }

  .overlay{
    display: none;
  }
`

export const TechnoList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 3em;
    margin: 5em 0;
`