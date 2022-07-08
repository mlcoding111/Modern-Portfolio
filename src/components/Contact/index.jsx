import React from 'react'
import styled from 'styled-components'

import { Button } from '../../styles/styles'

function Contact() {
  return (
    <ContactWrap>
      <h1>Contact</h1>
      <Button>Contact Icon</Button>
    </ContactWrap>
  )
}

export default Contact

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  button{
    margin-top: auto;
    margin-bottom: 2em;
  }
`