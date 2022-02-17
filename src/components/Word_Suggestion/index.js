import Letter from "../Form/Letter";
import { useState } from "react";
import { useEffect } from "react";
import useWordList from "../../hooks/useWordList";

import { WordInputStyled } from "./style";

function WordSuggestion(Props) {

  const { wordList } = useWordList()

  const [wordSuggested, setWordSuggested] = useState(["", "", "", "", "",])

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let n = getRandomInt(0, wordList.length - 1)

  useEffect(() => {
    if (wordList) {
      setWordSuggested(wordList[n])
    }
    else {
      setWordSuggested(["", "", "", "", "",])
    }
  }, [wordList]);

  return (
    <WordInputStyled>
      {wordSuggested &&
        wordSuggested.map(el =>
          <Letter
            value={el}
            disabled={Props.isLocked}
          />)

      }
    </WordInputStyled>
  )
}


export default WordSuggestion