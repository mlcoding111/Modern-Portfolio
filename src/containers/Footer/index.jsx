import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrap>
      <ul>
        <li>Michael Lacroix</li>
        <li>Quebec, Canada</li>
        <li>819-880-0461</li>
      </ul>

      <div className="brand">
        Brand here
      </div>

      <div>kennycoding111@gmail.com</div>
    </FooterWrap>
  )
}

export default Footer


export const FooterWrap = styled.footer`
  display: grid;
  width: 100%;
  border: 1px solid white;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px){
    grid-template-columns: 1fr !important;
    grid-auto-flow: dense !important;
    gap: 2em;
  }

  
`