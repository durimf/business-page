import { createGlobalStyle } from "styled-components";
import { color, space } from "./theme";
import bodyBg from "../public/assets/images/body-bg-img.png";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  body {
    background-image: url("/assets/images/body-bg-img.png");
    background: ${color("blue", "secondary")};
    background-size: contain;
    background-position: bottom;
    font-family: Poppins, Sans-Serif;
    margin: ${space(0)};
    padding: ${space(0)};
  }  

`;
