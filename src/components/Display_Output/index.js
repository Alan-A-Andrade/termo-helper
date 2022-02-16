import { DisplayOutputStyled, WordListStyled, WordStyled } from "./style";

import useWordList from "../../hooks/useWordList";
import { useState, useEffect } from "react";

function DisplayOutput() {

  const { wordList } = useWordList()


  return (
    <DisplayOutputStyled>
      <div className="output-title">
        <h1>Lista de Palavras</h1>
        {wordList.length !== 0
          ? <p>(total de {wordList.length})</p>
          : <p>(nenhuma palavra)</p>
        }
      </div>
      <WordListStyled>
        {wordList.slice(0, 20).map((el, id) => <WordStyled delay={id / 10} key={`${id}_${el.join("")}`}>{el.join("").toUpperCase()}</WordStyled>)}
      </WordListStyled>
    </DisplayOutputStyled>
  )
}

export default DisplayOutput