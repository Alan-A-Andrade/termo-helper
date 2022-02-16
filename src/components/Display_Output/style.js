import styled from "styled-components";

const DisplayOutputStyled = styled.section`

width: 100%;
height: 50vh;
padding: 18px;

display: flex;
flex-direction: column;

overflow-y: hidden;

.output-title{
  padding: 10px 0px;

  p{
    font-size: 0.8em;
    font-weight: 300;
  }
}

`
const WordListStyled = styled.ul`
display: flex;
flex-direction: column;

`

const WordStyled = styled.h1`
font-size: 0.95em;
opacity: 0;
animation-fill-mode: forwards;
animation-name: example;
  animation-duration: 1s;
  animation-delay: ${Props => `${Props.delay}s`};

  @keyframes example {
  from {
    transform: translate( 0px, -20px);
    opacity: 0
  }
  to {
    transform: translate( 0px, 0px);
    opacity: 1
  }
}
`

export {
  DisplayOutputStyled,
  WordListStyled,
  WordStyled
}