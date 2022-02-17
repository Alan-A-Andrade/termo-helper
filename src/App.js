import { WordListProvider } from "./contexts/WordListContext";
import { FilterProvider } from "./contexts/FilterContext";
import DisplayInput from "./components/Display_Input";
import DisplayOutput from "./components/Display_Output";
import Header from "./components/Header";
import styled from "styled-components";

const AppStyled = styled.main`
width: 100%;
height: max-content;
display: flex;
box-sizing: border-box;
padding: 20px 5px;


@media (max-width: 768px) {

flex-direction: column;
align-items: center;

font-size: 12px;

overflow-x: hidden;
}
`

const Separator = styled.div`
width: 18px;
height: 20em;
background-color: #4c4347;
border-radius: 10px;
margin: 10px;

@media (max-width: 768px) {

width: 80vw;
height: 4px;
}

`

function App() {

  return (
    <FilterProvider>
      <WordListProvider>
        <Header />
        <AppStyled>
          <DisplayInput>
          </DisplayInput>
          <Separator />
          <DisplayOutput>
          </DisplayOutput>
        </AppStyled >
      </WordListProvider>
    </FilterProvider>
  );
}

export default App;
