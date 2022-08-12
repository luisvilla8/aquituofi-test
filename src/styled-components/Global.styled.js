import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--fontFamily);
  }
  a {
    text-decoration: none;
    color: var(--textColor);
  }
  :root {
    --fontFamily: 'Raleway', sans-serif;
    --titleColor: #FCFCFC;
    --shadowGreen: #2FB43C;
  }
  html.light {
    --green: #D5F0D8;
    --bgColor: #FCFCFC;
    --textColor: #1E1E1E;
    --transition: .3s ease;
  }
  html.dark {
    --bgColor: #060606;
    --textColor: #E8E8E8;
    --green: #09240C;
  }
`