import styled from "styled-components";

const DisplayInputStyled = styled.section`

width: 100%;
height: max-content;
padding: 18px;

display: flex;
flex-direction: column;
gap: 0.3em;

@media (max-width: 768px) {

  align-items: center;
}

`
export {
  DisplayInputStyled,
}