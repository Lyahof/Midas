import { createGlobalStyle } from "styled-components";

/*@media query - sizes:
	@media (max-width: 97em) - 1552px
	@media (max-width: 86em) - 1376px
	@media (max-width: 64em) - 1024px
	@media (max-width: 55em) - 880px
	@media (max-width: 48em) - 768px
	@media (max-width: 44em) - 704px
	@media (max-width: 37em) - 585px
	@media (max-width: 34em) - 544px
	@media (max-width: 31em) - 496px
	@media (max-width: 30em) - 480px - only for slider adoptation
	@media (max-width: 28em) - 448px
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

}

input:focus,
button:focus,
textarea:focus,
select:focus {

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


/*Slider styles */

.slick-disabled {
	opacity: 30%;
}

.slick-arrow {
	border: 1px solid #fff;
	border-radius: 50%;
	width: 5.5rem;
	height: 5.5rem;
	@media (max-width: 48em){
		width: 4rem;
		height: 4rem;
	}
}

.slick-arrow:before {
	display: block;
	font-size: 3.5rem;
	padding-bottom: 7px;
	font-family: inherit;
	@media (max-width: 48em){
		font-size: 2.2rem;
		padding-bottom: 2px;
	}

	@media (max-width: 28em) {
		padding-bottom: 8px;
	}
}

.slick-next {
	right: 5rem;
	top: -8rem;
	@media (max-width: 48em){
		top: -7rem;
	}
	@media (max-width: 28em) {
		top: -6rem;
	}
}

.slick-prev {
	left: 130rem;
	top: -8rem;
	@media (max-width: 64em) {
		left: 75rem;
	}
	@media (max-width: 48em){
		top: -7rem;
		left: 53rem;
	}
	@media (max-width: 28em) {
		top: -6rem;
		left: 22rem;
	}
	@media (max-width: 25em) {
		left: 18.5rem;
	}
}
`

export default GlobalStyles;