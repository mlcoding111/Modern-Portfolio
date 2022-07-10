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

#root, body, html{
    min-height: 100% !important;
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
  background: rgb(12,12,12);
  // Grey
  /* background: linear-gradient(164deg, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 53%, rgba(21,37,46,1) 100%); */
  // Redish
  background: linear-gradient(164deg, rgba(12,12,12,1) 0%, rgba(12,12,12,1) 53%, rgba(46,21,21,1) 100%);
  font-family: 'Poppins', sans-serif;
  background-attachment: fixed;
}

main{
  padding-block: 2rem;
  width: min(95%, 75rem);
  margin-inline: auto;
}

ul{
  list-style: none;
}


/* TYPOGRAPHY */

// clamp([value-min], [value-preferred], [value-max]);

h1{
  font-size: clamp(1.8rem, 8vw, 3.8rem);
  letter-spacing: 20.5%;
}

h2{
  font-size: clamp(1.3rem, 3vw, 1.6rem);
}

button{
  font-size: clamp(.8rem, 3vw, 1rem);
}

p{
  font-size: clamp(.7rem, 1vw, .9rem);
}


`