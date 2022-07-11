import React, { useRef } from "react";
import styled from "styled-components";
import { useViewportScroll, motion, useTransform } from "framer-motion";

function getRelativeCoordinates(event, referenceElement){
    const position = {
        x: event.pageX,
        y: event.pageY
    }

    const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop,
        width: referenceElement.clientWidth,
        height: referenceElement.clientHeight
      };
    
      let reference = referenceElement.offsetParent;
    
      while (reference) {
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
      }
    
      return {
        x: position.x - offset.left,
        y: position.y - offset.top,
        width: offset.width,
        height: offset.height,
        centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
        centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
      };
}

function Button(props) {
  const { scrollY } = useViewportScroll();
  const buttonY = useTransform(scrollY, (value) => value / 5);

  const [hovered, setHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({});
  const boxRef = useRef();
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <Wrap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={false}
      animate={{ scale: hovered ? 1.1 : 1 }}

    >
      <motion.a
        initial={false}
        animate={{
          scale: hovered ? 5.2 : 0,
          transition: { type: "tween"},
        }}
      ></motion.a>
      <div className="inner-content">
        {props.children}
      </div>
    </Wrap>

  );
}

export default Button;

export const Wrap = styled(motion.button)`
  position: relative;
  color: white;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  height: 11rem;
  width: 11rem;
  cursor: pointer;
  padding: 0;
  position: relative;
  user-select: none;
  z-index: 1;
  color: black;

  @media (max-width: 500px){
    height: 5rem;
    width: 5rem;
  }
  :hover > .inner-content{
    color: black;
  }

  .inner-content{
    transition: color 0.2s ease-in-out;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 999;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    display: block;
    margin: 0 auto;
    background-color: #fff;
    content: "";
    bottom: auto;
    width: 20%;
    height: 20%;
    font-size: .3rem;
    box-sizing: border-box;
    z-index: -1;
    border-radius: 50%;
  }

`;
