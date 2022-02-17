import styled, { keyframes } from "styled-components";

const DisplayOutputStyled = styled.section`

width: 100%;
height: 50vh;
padding: 18px;

display: flex;
flex-direction: column;

overflow-y: hidden;

.no-wordList{
  font-size: 0.8em;
    font-weight: 300;
}

.output-title{

  p{
    font-size: 0.8em;
    font-weight: 300;
  }
}

@media (max-width: 768px) {
all: unset;
font-size: 16px;
}

`
const WordListStyled = styled.ul`
display: flex;
flex-direction: column;

padding-top: 5px;

@media (max-width: 768px) {
 all: unset;
 padding-top: 5px;
}

`

const showWord = keyframes`
 0% {
  transform: translate(0px, -20px);
  opacity: 0
}
 100% {
  transform: translate(0px, 0px);
  opacity: 1
}
`

const WordStyled = styled.h1`
font-size: 0.95em;
opacity: 0;
animation-fill-mode: forwards;
animation-name: ${showWord};
animation-duration: 1s;
animation-delay: ${Props => `${Props.delay}s`};

`




export {
  DisplayOutputStyled,
  WordListStyled,
  WordStyled
}