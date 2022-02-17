import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;

  @media (max-width: 768px) {
  width: 100vw;
    padding: unset;
    margin: unset;
  }

`
const AppTitle = styled.h1`

  font-size: 2em;
  font-weight: 600;

  @media (max-width: 768px) {
  font-size: 1.5em;
  gap: unset;
  }
`
const ButtonHeader = styled.button`

  all: unset;
  width: 1.2em;
  height: 1.2em;
  color: #b7aeb4;
  border: 2px solid #b7aeb4;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;

`

export {
  HeaderStyled,
  AppTitle,
  ButtonHeader,
}