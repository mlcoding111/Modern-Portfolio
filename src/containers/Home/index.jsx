import React from 'react'

import Header from '../Header'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'

import Box from '../../components/Box'
import styled from 'styled-components'

export const Wrap = styled.div`
    width: 100%;
`
function Home() {
  return (
    <>
        <Header />
        <Wrap>
            <Box />
            <Box />
            <Box />
        </Wrap>

        <main>
            
            <section>
                <Projects />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <Contact />
            </section>

        </main>

    </>
  )
}

export default Home