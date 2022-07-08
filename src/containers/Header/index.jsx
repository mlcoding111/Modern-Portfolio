import React from "react";
import * as Styled from './styles.js'
import { Button } from "../../styles/styles.js";
import { StickyBox } from "./styles.js";

function Header() {
  return (
    <>
      <Styled.Header>
        <StickyBox />
        <div className="hero">

          <div className="hero-img">
            <img src={require("./me.jpg")} width="400"></img>
          </div>

          <div className="hero-description">
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
          </div>
        </div>

        <div className="skills-display">

            <Styled.SkillCard>
              <div>
                <h2>Front End</h2>
                <p>
                  Skilled using recent technologies to take any layout to life
                </p>
              </div>
            </Styled.SkillCard>

            <Styled.SkillCard red>
              <div>
                {" "}
                <h2>Web Design</h2>
                <p>Create design using tools like figma</p>
              </div>
            </Styled.SkillCard>

            <Styled.SkillCard>
              <div>
                <h2>Back-End</h2>
                <p>Setup NodeJs server and database structure</p>
              </div>
            </Styled.SkillCard>
        </div>
        
        <div className="stats-display">
            <div>
              <span id="year">3</span>
              <p>Years of Experiences</p>
            </div>

            <div>
              <Button>My Skills</Button>
            </div>
        </div>

      </Styled.Header>
    </>
  );
}

export default Header;

