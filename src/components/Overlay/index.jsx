import React from "react";
import styled from "styled-components";

import { motion, useViewportScroll } from "framer-motion";


function Overlay() {
  const { scrollYProgress } = useViewportScroll();
  
  const border = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)",
    },
  };

  const text = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        // fill: "rgba(255, 255, 255, 1)",
    }
  }

  React.useEffect(()=>{
    console.log(scrollYProgress)
  }, [scrollYProgress])
  
  return (
    <Wrap>

    </Wrap>
  );
}

export default Overlay;

export const Wrap = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 15px;
    background: transparent;
    border: 1px solid red;
`;
