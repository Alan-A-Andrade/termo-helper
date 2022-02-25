import styled from "styled-components";

const HelpStyled = styled.article`
position: fixed;
top:0;
left:0;
width:100vw;
height: 100vh;

overflow-y: scroll;



background-color: transparent;
opacity: 1;

display: ${Props => Props.show
    ? "flex"
    : "none"};
justify-content: center;

z-index: 20;


.help-text-box{
width:80vw;
height: max-content;
margin-top:10vw;
background-color:#312a2c;

padding: 10px;

display: flex;
flex-direction: row;

h1{
  font-size: 1.2em;
  padding: 0.5em;
}

p{
  font-weight: 300;
  padding: 0.5em;
}

@media (max-width: 768px) {
  flex-direction: column;
}

}

img{
  padding: 2em;
  width: 350px;
  @media (max-width: 768px) {
    width: 70vw;
}
  
  align-self: center
}

`

export {
  HelpStyled,
}