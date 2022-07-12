import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -150 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
};
const Section = (props) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <motion.section
      ref={ref}
      animate={inView ? "show" : "hidden"}
      variants={variants}
    >
      {props.children}
    </motion.section>
  );
};

export default Section;
