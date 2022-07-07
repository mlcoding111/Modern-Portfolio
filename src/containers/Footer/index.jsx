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
  
`