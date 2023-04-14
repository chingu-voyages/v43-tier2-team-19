import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: 'Baloo Bhai 2', cursive;
  color: #0c0b0b;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #2b3a55
}
ul,
ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
button {
  cursor: pointer;
}
img {
  display: block;
}
a {
  text-decoration: none;
}
`;
