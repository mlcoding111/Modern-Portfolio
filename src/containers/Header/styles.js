import styled from 'styled-components'

export const Header = styled.header`
  margin: 0 auto;
  max-width: 90%;
  border: 1px solid red;
  min-height: 85vh;
  padding: 4em 0;

  
  .hero{
    padding: 0 4em;  // Change it for mobile
    display: flex;
    flex-wrap: wrap;    
    /* display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // replace 1fr for auto when image will be uploaded */
  }
  
  .hero > * {
    border: 1px solid white;
    padding: 3em; // Change it for mobile
    flex: 1 1 10em;
  }

  .hero-description{
    flex: 2;
  }
  

  .hero-button > *{
    padding: 1em 2em;
    margin: 3em .5em;
  }

  .hero-text{
    padding-top: 5em;
  }

  .hero-text .description{
    max-width: 600px;
  }
  
  .hero-text #profession{
    letter-spacing: 0px !important;
    margin-top: auto;
    margin-bottom: .5em;
    font-size: 4rem;
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

export const SkillCard = styled.div`
  padding: 4em 1em;
  background: ${(props) => (props.red ? props.theme.secondary : "#282828")};
`;