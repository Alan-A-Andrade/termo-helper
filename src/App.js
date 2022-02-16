import { WordListProvider } from "./contexts/WordListContext";
import { FilterProvider } from "./contexts/FilterContext";
import DisplayInput from "./components/Display_Input";
import DisplayOutput from "./components/Display_Output";
import Header from "./components/Header";
import styled from "styled-components";

const AppStyled = styled.main`
width: 100%;
height: 100%;
display: flex;
box-sizing: border-box;
padding: 20px 5px;
`

const Separator = styled.div`
width: 18px;
height: 50vh;
background-color: #4c4347;
border-radius: 10px;
margin: 10px;
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
