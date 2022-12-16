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
    background-color: ${color("blue", "secondary")};
    background-image: url("/assets/images/body-bg-img.png");
    background-size: contain;
    font-family: Poppins, Sans-Serif;
    margin: ${space(0)};
    padding: ${space(0)};
  }  

`;
