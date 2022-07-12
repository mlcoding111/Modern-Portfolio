import React from 'react'
import styled from 'styled-components'

const TopMessage = () => {
  return (
    <Wrap>
        Website still in construction, some features may be unavailable
    </Wrap>
  )
}

export default TopMessage

export const Wrap = styled.div`
  position: relative;
  text-align: center;
  top: 0px;
  width: 100%;
  padding: .3em 0;
  background: rgba(215, 35, 35, 0.8);

  @media (max-width: 500px){
    font-size: .7rem;
  }
`