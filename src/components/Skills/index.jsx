import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/styles'

function Skills() {
  return (
    <SkillsWrap>
      <SectionHeader>
        <h1>Showcase</h1>
        <span>My skills</span>
      </SectionHeader>

      {/* <Button>Down Arrow here</Button> */}
    </SkillsWrap>
  )
}

export default Skills

export const SectionHeader = styled.div`
  
`

export const SkillsWrap = styled.div`
  text-align: center;
`