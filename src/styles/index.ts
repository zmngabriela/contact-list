import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #000;
    list-style: none;
    text-decoration: none;
  }

  a:visited {
      color: inherit;
  }
`

export const Container = styled.main`
  max-width: 960px;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
`
