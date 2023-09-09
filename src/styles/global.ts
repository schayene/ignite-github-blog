import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smootinh: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 1rem/1.6 "Nunito", sans-serif;
  }

  @media (max-width: 560px) {
    html {
      font-size: 87%;
    }
  }
`;
