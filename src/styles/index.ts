import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

export const Container = styled.main`
  max-width: 960px;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
`
