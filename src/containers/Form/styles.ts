import styled from "styled-components";

export const FormStyle = styled.form`
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 24px
  border-radius: 2px;

  h2 {
    font-size: 16px;
    margin-bottom: 24px;
  }

  label {
    display: inline-block;
    width: 100px;
  }

  input {
    width: calc(100% - 100px);
    display: inline-block;
    padding: 5px;
    border: .5px solid #B7B7B7;
    border-radius: 2px;
  }
`

export const Inputs = styled.div`
  margin-bottom: 8px;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding-right: 24px;
`

export const SubmitBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  border: none;
  background-color: #b7b7b7;

  img {
    width: 14px;
    height: 14px;
  }
`
