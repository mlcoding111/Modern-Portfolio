import React from 'react'

import Header from '../Header'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import { motion } from "framer-motion";
import Section from '../Section'

function Home() {

  return (
    <motion.div
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: "100%"}}
        exit={{opacity: 0, x: window.innerWidth, transition: { duration: 0.3}}}
    >
        <Header />

        <main>            
            <section>
                <Projects />
            </section>

            <Section>
                <Skills />
            </Section>

            <Section>
                <Contact />
            </Section>

        </main>

    </motion.div>
  )
}

export default Home