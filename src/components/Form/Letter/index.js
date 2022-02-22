import styled from "styled-components";

function handleColorChange(state) {
  switch (state) {
    case "right":
      return "#3aa394"

    case "place":
      return "#d3ad69"

    case "wrong":
      return "#312a2c"

    case "noFocused":
      return "#504a4b"
    default:
      return "none"
  }
}

function handleBorderColorChange(state) {
  switch (state) {
    case "right":
      return "#3aa394"

    case "place":
      return "#d3ad69"

    case "wrong":
      return "#312a2c"

    case "noFocused":
      return "#504a4b"
    default:
      return "#4c4347"
  }
}


const Letter = styled.input`

all: unset;

-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
-webkit-tap-highlight-color:rgba(0,0,0,0);

width: 1.2em;
height: 1.2em;
border: 0.1em solid;
border-color: ${props => handleBorderColorChange(props.answer)};
border-radius: 10%;

display: flex;
align-items: center;
justify-content: center;

text-align: center;
text-transform: uppercase;

font-size: 2em;
font-weight: 600;

caret-color: transparent;

background-color: ${props => handleColorChange(props.answer)};

transition-delay: 0.1s;
transition: ease-in-out;

&:focus {
    height: 1.115em;
    border-bottom: 0.2em solid;
    border-color: ${props => handleBorderColorChange(props.answer)};
    border-bottom-color: #4c4347;
}

&:disabled{
  background-color: #615458;
  border-color: #615458;
}

&::selection{
  cursor: none;
}



`

export default Letter

