import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

function Button() {

    const [hovered, setHovered] = React.useState(false); 
  return (
    <Wrap onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
            initial={false}
            animate={{ scale: hovered ? 1.1 : 1 }}
    >
        <motion.a initial={false}
          animate={{ scale: hovered ? 5.2 : 0 , transition: { duration: 0.5, ease: "easeIn"}}}> 
        </motion.a>
{/*         
        <span>Read more</span> */}
    </Wrap>
  )
}

export default Button

export const Wrap = styled(motion.button)`
    color: white;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    height: 11rem;
    width: 11rem;
    cursor: pointer;
    padding: 0;
    z-index: 999;
    position: relative;
    user-select: none;
    z-index: 1;
    color: black;

    a{
        border: 1px solid white;
        display: block;
        margin: 0 auto;
        background-color: #fff;
        content: "";
        bottom: auto;
        width: 20%;
        height: 20%;
        box-sizing: border-box;
        z-index: -1;
        border-radius: 50%;
    }

    /* ::after{
        transform: translate(-50%, -50%);
        background-color: white;
        content: "";
        display: block;
        height: 30%;
        position: absolute;
        bottom: auto;
        left: 50%;
        right: 50%;
        top: 50%;
        border: 1px solid red;
        width: 30%;
        box-sizing: border-box;
        z-index: -1;
        border-radius: 50%;
    } */
`