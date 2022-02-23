import { WordListProvider } from "./contexts/WordListContext";
import { FilterProvider } from "./contexts/FilterContext";
import DisplayInput from "./components/Display_Input";
import DisplayOutput from "./components/Display_Output";
import Header from "./components/Header";
import styled from "styled-components";
import HelpBox from "./components/help_screen";
import MoreInformation from "./components/more_information_screen";
import { useState } from "react";

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

  const [displayHelp, setDisplayHelp] = useState(false)
  const [displayInfo, setDisplayInfo] = useState(false)

  return (
    <FilterProvider>
      <WordListProvider>
        <HelpBox
          state={displayHelp}
          setState={setDisplayHelp}
        />
        <MoreInformation
          state={displayInfo}
          setState={setDisplayInfo}
        />
        <Header
          setHelp={setDisplayHelp}
          helpState={displayHelp}
          setInfo={setDisplayInfo}
          infoState={displayInfo}
        />
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
