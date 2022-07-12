import React from 'react'
import styled from 'styled-components'

// Contain all skills svg 
const data = [
  require("./icons/REACT.svg").default,
  require("./icons/GITHUB.svg").default,
  require("./icons/MONGODB.svg").default,
  require("./icons/BOOTSTRAP.svg").default,
  require("./icons/JQUERY.svg").default,
  require("./icons/HTML5.svg").default,
  require("./icons/NODE JS.svg").default,
  require("./icons/SAAS.svg").default,
  require("./icons/TYPESCRIPT.svg").default,
  require("./icons/JAVASCRIPT.svg").default,
]

function Skills() {
  return (
    <SkillsWrap>
      <SectionHeader>
        <h1>Showcase</h1>
        <span>My skills</span>
      </SectionHeader>

      <SkillsShowCase>
      {data.map((item, index) => (
        <li>
          <img src={item} alt="React" height={120}/>
        </li>

      ))}
      </SkillsShowCase>
      {/* <Button>Down Arrow here</Button> */}
    </SkillsWrap>
  )
}

export default Skills

export const SectionHeader = styled.div`
  
`
export const SkillsShowCase = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 3rem auto;
    gap: 1em;
    img{
      margin: 0 auto;      
    }
    li{
      background: rgba(43, 43, 43, 0.36);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.31);
    }
`

export const SkillsWrap = styled.div`
  text-align: center;
`