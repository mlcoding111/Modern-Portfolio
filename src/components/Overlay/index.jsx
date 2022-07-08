import React from "react";
import styled from "styled-components";

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

function Overlay() {

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  React.useEffect(() => yRange.onChange(v => console.log(v)), [yRange]);
  return (
    <Wrap>
      
    </Wrap>
  );
}

export default Overlay;

export const Wrap = styled(motion.div)`
    top: 0;
    position: sticky;
    width: 100%;
    height: 15px;
    background: transparent;
    border: 1px solid red;
`;
