import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
function Navigation() {
  let navigate = useNavigate();
  return (
    <NavigationWrap>
       {/* BRAND LOGO */}
      <div className="brand">
        <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3554 27.9454L0 14.0414L11.3501 0.00280762L14.4423 2.49867L5.12101 14.0282L14.4343 25.4311L11.3554 27.9454Z" fill="#D72323"/>
          <path d="M26.349 27.9453L23.2595 25.4468L32.5781 13.9172L23.2648 2.51434L26.3437 0L37.6991 13.904L26.349 27.9453Z" fill="#D72323"/>
        </svg>        
        <h1>MLWeb</h1>
      </div>
      
       {/* NAV LIST */}
      <PrimaryNav>
        <li onClick={()=> navigate("/")}>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </PrimaryNav>
    </NavigationWrap>
  )
}

export default Navigation

export const NavigationWrap = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(0, 0, 0, 0.62);

    .brand{
      display: flex;
      align-items: center;

    }
    .brand h1{
      font-size: 1.6rem !important;
    }
    
    .brand svg{
      margin-right: .2rem;
    }

    > * {
      display: inherit;
    }

    @media (max-width: 800px){
      .brand{
        padding: 2rem 0 !important;
      }
      ul{
        display: none;
      }
    }
`

export const PrimaryNav = styled.ul`
  list-style: none;

  > * {
    padding: 2rem 2em;
  }

  > *:hover {
    background: ${props => props.theme.secondary};
    cursor: pointer;
  }
`