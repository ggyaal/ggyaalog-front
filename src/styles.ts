import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  textColor: "#2d3436",
  bgColor: "#ecf0f1",
  accentColor: "#2980b9",
  borderColor: "#2c3e50",
};

export const darkTheme: DefaultTheme = {
  textColor: "#ecf0f1",
  bgColor: "#2d3436",
  accentColor: "#f1c40f",
  borderColor: "#2980b9",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    a {
      color: inherit;
      text-decoration: none;
    }
`;
