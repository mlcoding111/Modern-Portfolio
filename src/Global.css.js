import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after{
    box-sizing: border-box;
}

*{
    margin: 0;
    padding: 0;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  color: ${props => (props.darkMode ? 'white' : 'black')};
}

`