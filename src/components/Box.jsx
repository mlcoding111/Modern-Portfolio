import React from 'react'
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';
import styled from 'styled-components'

function Box() {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, value => value / -2);
    const y2 = useTransform(scrollY, value => value / -1);  
  
  return (
    <Wrap>
        <motion.div className="box" style={{ y: y1, x: -50 }} />
        <motion.div
          className="box"
          style={{ y: y2, x: 50, background: 'salmon' }}
        />
  </Wrap>
  )
}

export default Box

export const Wrap = styled.div`
.box{
    width: 150px;
    height: 150px;
    border-radius: 1em;
    background-color: #f9f07e;
    margin-left: auto;
    margin-right: auto;
}
`