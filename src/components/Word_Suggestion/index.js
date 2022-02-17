import Letter from "../Form/Letter";
import { useState } from "react";
import { useEffect } from "react";
import useWordList from "../../hooks/useWordList";

import { WordInputStyled } from "./style";

function WordSuggestion(Props) {

  const { wordList } = useWordList()

  const [wordSuggested, setWordSuggested] = useState(["", "", "", "", "",])

  useEffect(() => {
    if (wordList) {
      setWordSuggested(wordList[0])
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