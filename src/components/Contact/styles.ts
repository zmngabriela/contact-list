import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const ContactStart = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: start;

  #avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
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
