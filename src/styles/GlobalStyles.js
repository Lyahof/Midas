import { createGlobalStyle } from "styled-components";

/*@media query - sizes:
	@media (max-width: 86em) - 1376px
	@media (max-width: 64em) - 1024px
	@media (max-width: 55em) - 880px
	@media (max-width: 44em) - 704px
	@media (max-width: 37em) - 585px
	@media (max-width: 34em) - 544px
	@media (max-width: 31em) - 496px
*/

const GlobalStyles = createGlobalStyle`

:root {
  --yellow-color: #fbd13e;
  --red-color: #B70000;
  --sale-black: #0F0F11;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
	background-image: linear-gradient(
  105deg,
  hsl(240deg 68% 28%) 0%,
  hsl(243deg 66% 25%) 6%,
  hsl(245deg 63% 23%) 13%,
  hsl(247deg 60% 20%) 21%,
  hsl(249deg 56% 17%) 30%,
  hsl(251deg 52% 15%) 40%,
  hsl(254deg 46% 12%) 51%,
  hsl(260deg 40% 10%) 64%,
  hsl(264deg 33% 7%) 79%,
  hsl(0deg 0% 4%) 100%
);
  font-family: "Montserrat", sans-serif;
  color: #fff;

  transition: all 0.3s;
  min-height: 100vh;
  line-height: 1.2;
  font-size: 1.6rem;
  font-weight: 500;
  overflow: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  text-decoration: none;
  border: none;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  //background-color: var(--color-grey-200);
  //color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  //outline: 2px solid var(--color-brand-600);
  //outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-weight: inherit;
}

img {
  max-width: 100%;
	}
`

export default GlobalStyles;