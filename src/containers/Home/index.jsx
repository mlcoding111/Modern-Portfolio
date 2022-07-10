import React from 'react'

import Header from '../Header'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import styled from 'styled-components'

function Home() {
  return (
    <>
        <Header />

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