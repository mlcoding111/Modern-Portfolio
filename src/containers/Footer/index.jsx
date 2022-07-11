import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrap>
      <div>All Rights Reserved © 2022</div>

      <div className="brand">
        MLWeb
      </div>

      <div>Designed & Built by MLWeb</div>
    </FooterWrap>
  )
}

export default Footer


export const FooterWrap = styled.footer`
  padding: 2em;
  display: grid;
  width: 100%;
  border: 1px solid white;
  align-items: flex-end;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px){
    > :first-child{
      display: none !important;
    }
    padding: .5em;
    grid-template-columns: 1fr !important;
    grid-auto-flow: dense !important;
    gap: 2em;
  }

  
`