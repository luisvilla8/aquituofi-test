import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--fontFamily);
  }
  html,
  body {
    background-color: var(--bgColor);
  }
  a {
    text-decoration: none;
    color: var(--textColor);
  }
  ul,
  li {
    list-style: none;
  }
  :root {
    --fontFamily: 'Raleway', sans-serif;
    --titleColor: #FCFCFC;
    --shadowGreen: #2FB43C;
    --paddingY: 1rem;
    --paddingX: 2rem;
    --paddingXMD: 4rem;
    --paddingYMD: 1.5rem;
  }
  html.light {
    --green: #D5F0D8;
    --bgColor: #FCFCFC;
    --bgInput: #D9D9D9;
    --textColor: #1E1E1E;
    --transition: .3s ease;
  }
  html.dark {
    --bgColor: #060606;
    --bgInput: #2c2c2c;
    --textColor: #E8E8E8;
    --green: #09240C;
  }
`;
