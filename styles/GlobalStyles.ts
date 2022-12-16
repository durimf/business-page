import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  body {
    font-family: Poppins, Sans-Serif;
    margin: 0px;
    padding: 0px;
  }  
  a {
  color: white;
  text-decoration: none;
}
`;
