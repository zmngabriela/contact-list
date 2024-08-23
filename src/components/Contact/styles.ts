import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 2px;
`

export const ContactStart = styled(Link)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: start;

  #dots {
    width: 16px;
    height: 16px;

    &:hover {
      transform: scale(1.1);
    }
  }

  #avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 11px;
    color: #B7B7B7;
  }
`

export const ContactEnd = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  img {
      width: 12px;
      height: 12px;

      &:hover {
        transform: scale(1.2);
      }
  }
`
