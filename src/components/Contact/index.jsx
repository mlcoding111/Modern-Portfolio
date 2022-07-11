import React from 'react'
import styled from 'styled-components'

import Button from '../Reusable/Button'

function Contact() {

  return (
    <ContactWrap>      
      <h1>Let's get in touch!</h1>
      <hr />
      <p>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, 
        I’ll try my best to get back to you!</p>
      <div>
       <Button>My Skills</Button>
      </div>
    </ContactWrap>
  )
}

export default Contact

export const ContactWrap = styled.div`
hr{
  width: 25%;
}
hr{
  margin: 1rem 0;
}
p{
  margin: 2rem 0;
  text-align: center;
  max-width: 850px;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  button{
    margin-top: auto;
    margin-bottom: 2em;
  }
`