import styled from 'styled-components'


export const SkillCard = styled.div`
  margin-top: 5% !important;
  padding: 5em 2em;
  background: ${(props) => (props.red ? props.theme.secondaryOp : "rgba(40, 40, 40, .8)")};
  h2{
    margin-bottom: 15px;
  }

  @media (max-width: 940px){
    padding: 3em 1em;
  }
`;

export const StickyBox = styled.div`
  position: absolute;
  overflow-y: visible;
  top: 42%;
  left: -15%;
  height: 750px;
  width: clamp(150px, 60vw, 1000px);
  background: #1B1B1B;
  opacity: 0.8;
  @media (max-width: 1200px){
    display: none;
  }
`

// clamp([value-min], [value-preferred], [value-max]);
export const Header = styled.header`
  position: relative;
  margin: 0 auto;
  width: clamp(200px, 90vw, 100%);
  min-height: 85vh;
  padding-block: min(15vh, 9rem);
  padding-inline: min(8em, 2em);


  .hero{
    // Change it for mobile
    display: flex;    
    flex-wrap: wrap;    
    /* display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // replace 1fr for auto when image will be uploaded */
  }

  @media (max-width: 940px){
    padding-block: min(15vh, 1rem);
    padding-inline: .5em;
    .hero{
      flex-direction: column;
    }    
  }
    
  .hero > * {
    /* border: 1px solid white; */
    padding-block: min(10vh, 2rem);
    padding-inline: 2em;
    flex: 1 1 10em;
  }

  .hero-description{
    flex: 2;
  }  
  .hero-button{
    display: flex;
  }
  .hero-button > *{
    padding-block: min(20vh, .5rem);
    padding-inline: min(8em, 2em);
    /* padding: 1em 2em; */
    margin: 0em 0.5em;
  }

  .hero-text{
    padding-block: min(10vh, 3rem);
  }

  .hero-text .description{
    max-width: 600px;
  }
  
  .hero-text #profession{
    letter-spacing: 0px !important;
    margin-top: auto;
    margin-bottom: .5em;
  }

  .hero-text #my-name{
    font-size: 1.4rem;
    color: ${props => props.theme.secondary};
  }

  .skills-display{
    position: relative;
    max-width: 1000px;
    margin: 3em auto;
    padding: 2em 0;
    display: flex;
    flex-wrap: wrap;
    /* display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  }
  .skills-display > * {
    margin: .5em;
    flex: 1 1 10em;
    gap: 1em;
  }

  .stats-display{
    position: relative;
    margin: 3rem 0;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: ${props => props.theme.secondary};
  }
  

  #year{
    font-size: 5rem;
  }

`;

