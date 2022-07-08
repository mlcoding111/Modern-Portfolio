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

body,html, #root{
  min-height: 100%;
  height: 100%;
}

section{
  padding: 2em;
  min-height: 50vh;
}

body {
  margin: 0;
  padding: 0;
  color: #fff;
  background: #0C0C0C;
  font-family: 'Poppins', sans-serif;
  background-attachment: fixed;
}

main{
  padding-block: 2rem;
  width: min(95%, 75rem);
  margin-inline: auto;
}

h1{
  font-size: 4rem;
  letter-spacing: 20.5%;
}

`