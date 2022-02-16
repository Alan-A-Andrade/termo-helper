import { DisplayInputStyled } from "./style";

import WordInput from "../Word_Input";

import useFilter from "../../hooks/useFilter";

function DisplayInput() {

  const { filter } = useFilter()

  return (
    <DisplayInputStyled>
      <WordInput place="first" />
      <WordInput isLocked={!filter.first.isComplete} place="second" />
      <WordInput isLocked={!filter.second.isComplete} place="third" />
      <WordInput isLocked={!filter.third.isComplete} place="forth" />
      <WordInput isLocked={!filter.forth.isComplete} place="fifth" />
    </DisplayInputStyled>
  )
}

export default DisplayInput