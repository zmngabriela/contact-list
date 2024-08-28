import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #avatar {
    width: 120px;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 16px;
  }

  #description {
    font-size: 13px;
    color: #b7b7b7;
  }
`

export const Info = styled(Container)`
  font-size: 14px;
  margin: 16px 0 32px 0;
`

export const Icons = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  img {
    width: 16px;

    &:hover {
        transform: scale(1.2);
    }
  }
`

export const LinkTo = styled(Link)`

`
