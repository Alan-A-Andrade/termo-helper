import { DisplayOutputStyled, WordListStyled, WordStyled } from "./style";

import useWordList from "../../hooks/useWordList";
import useFilter from "../../hooks/useFilter";
import { random } from "../../logic/wordFrequencyLogic";

import { useEffect, useState } from "react";

function DisplayOutput() {

  const { wordList } = useWordList()

  return (
    <DisplayOutputStyled>
      <div className="output-title">
        <h1>Sugestões de Palavras</h1>
        {wordList.length !== 0
          ? <p>(total de {wordList.length})</p>
          : ""
        }
      </div>
      <WordListStyled>
        {wordList.length !== 0
          ? wordList.slice(0, 18).map((el, id) => <WordStyled delay={(parseInt(id) / 10)} key={`${id}_${el.join("")}`}>{el.join("").toUpperCase()}</WordStyled>)
          : <p className="no-wordList">Selecione outra palavra {<br />} ou reveja sua combinação</p>
        }
      </WordListStyled>
    </DisplayOutputStyled>
  )
}

export default DisplayOutput