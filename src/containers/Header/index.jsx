import React, { useState } from "react";
import * as Styled from "./styles.js";
import { FaGithub } from "react-icons/fa";
import Button from "../../components/Reusable/Button/index.jsx";
import { StickyBox } from "./styles.js";

import { useInView } from "react-intersection-observer";
import { useViewportScroll, motion, useTransform } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
      ease: "easeOut",
      duration: 1.5,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 25 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
};

function Header() {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const { scrollY } = useViewportScroll();

  // All Y value relative to current scroll value
  const heroY = useTransform(scrollY, (value) => value / -3);
  const card1Y = useTransform(scrollY, (value) => value / -3);
  const card2Y = useTransform(scrollY, (value) => value / -5);
  const card3Y = useTransform(scrollY, (value) => value / -7);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  });

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  const handleBtnClick = () => {
    window.open("https://github.com/mlcoding111");
  };
  return (
    <>
      <Styled.Header variants={variants} initial="hidden" animate="show">
        {/* HERO  */}
        <motion.div className="hero" variants={variants} style={{ y: heroY }}>
          <div className={`${pulsing ? "pulse" : ""} loadable hero-img`}>
            <motion.img
              initial={{ height: "16rem", opacity: 0 }}
              // style={{ height: imageLoading ? "6rem" : "auto" }}
              animate={{
                height: imageLoading ? "16rem" : "auto",
                opacity: imageLoading ? 0 : 1,
              }}
              transition={
                ({ height: { delay: 0, duration: 0.4 } },
                { opacity: { delay: 0.5, duration: 0.4 } })
              }
              onLoad={imageLoaded}
              src={require("./me.jpg")}
            ></motion.img>
          </div>

          <motion.div className="hero-description">
            <div className="hero-text">
              <span id="my-name">Hello, im Michael</span>
              <h1 id="profession">Web Developer</h1>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>

            <div className="hero-button">
              <button>Contact</button>
              <button>Resume</button>
            </div>
          </motion.div>
        </motion.div>

        {/* SKILLS  */}
        <motion.div className="skills-display">
          <Styled.SkillCard
            ref={ref}
            style={{ y: card1Y, backgroundColor: "rgba(40, 40, 40, .8)" }}
            variants={cardVariants}
            animate={inView ? "show" : "hidden"}
          >
            <div>
              <h2>Front End</h2>
              <p>
                Skilled using recent technologies to take any layout to life
              </p>
            </div>
          </Styled.SkillCard>

          <Styled.SkillCard
            style={{ y: card2Y, backgroundColor: "rgba(215, 35, 35, 0.8)" }}
            ref={ref}
            variants={cardVariants}
            animate={inView ? "show" : "hidden"}
          >
            <div>
              {" "}
              <h2>Web Design</h2>
              <p>Create design using tools like figma</p>
            </div>
          </Styled.SkillCard>

          <Styled.SkillCard
            style={{ y: card3Y, backgroundColor: "rgba(40, 40, 40, .8)" }}
            ref={ref}
            variants={cardVariants}
            animate={inView ? "show" : "hidden"}
          >
            <div>
              <h2>Back-End</h2>
              <p>Setup NodeJs server and database structure</p>
            </div>
          </Styled.SkillCard>
        </motion.div>

        {/* STATS  */}
        <motion.div className="stats-display">
          <div>
            <span id="year">3</span>
            <p>Years of Experiences</p>
          </div>

          <div>
            <Button handleClick={handleBtnClick}>
              <FaGithub />
            </Button>
          </div>
        </motion.div>
        {/* STICKY BOX BEHIND HERO CONTAINER  */}
        <StickyBox
          animate={inView ? "show" : "hidden"}
          variants={boxVariants}
        />
      </Styled.Header>
    </>
  );
}

export default Header;
