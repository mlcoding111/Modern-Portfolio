import React from 'react'
import styled from 'styled-components'

function ProjectCard({title, year, link}) {

  return (
    <Card>
        <img src="https://picsum.photos/500" />
        <h3>{title}</h3>
    </Card>
  )
}

export default ProjectCard

export const Card = styled.div`
    
`