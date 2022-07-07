import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <>
      <header>

        <div className="hero-img">

        </div>

        <div className="hero-description">

          <div className="hero-text">
            <span id="my-name">Hello, im Michael</span>
            <h1 id="profession">Web Developer</h1>
            <p className='description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has survived not only five centuries,

            </p>
          </div>

          <div className="hero-button">
            <button>Contact</button>
            <button>Resume</button>
          </div>                    

        </div>

        <div className="skills-display">
          <SkillCard>
            <h3>Front End</h3>
            <p>Skilled using recent technologies to take any layout to life</p>
          </SkillCard>

          <SkillCard red>
            <h3>Web Design</h3>
            <p>Create design using tools like figma</p>

          </SkillCard>

          <SkillCard>
            <h3>Back-End</h3>
            <p>Setup NodeJs server and database structure</p>
          </SkillCard>

        </div>

        <div className="stats-display">

        </div>

      </header>
    </>
  )
}

export default Header

export const SkillCard = styled.div`  
  background: ${props => props.red ? props.theme.secondary : "#282828"}
`