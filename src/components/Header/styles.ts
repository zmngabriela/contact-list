import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-size: 16px;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  select {
      border: none;
      font-weight: bold;
      width: 40px;
      color: #B7B7B7;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }

    img {
      width: 14px;
      height: 14px;
      cursor: pointer;

      &:hover {
          transform: scale(1.2);
      }
    }
`

export const LinkToAdd = styled(Link)`
  display: flex;
  justify-contents: center;
`
