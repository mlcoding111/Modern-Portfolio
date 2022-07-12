import React from "react";
import styled from "styled-components";

import {
  motion,
  useViewportScroll,
  useTransform
} from "framer-motion";

function ScrollIndicator() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => yRange.onChange(v => setProgress(v * 100)), [yRange]);
  return (
    <Wrap yvalue={progress}>

    </Wrap>
  );
}

export default ScrollIndicator;

export const Wrap = styled(motion.div)`
    top: 0;
    position: sticky;
    background: linear-gradient(to right, ${props => props.theme.secondary} ${props => props.yvalue}%, rgba(0, 0, 255, 0) 0%);
    width: 100%;
    height: 10px;
    z-index: 999;
`;
