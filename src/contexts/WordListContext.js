import { createContext, useState, useEffect } from "react";
import useFilter from "../hooks/useFilter";
import list from "../data/hello.json"

import filterLetter from "../logic/filterLogic";

const WordListContext = createContext();

export function WordListProvider({ children }) {

  const { filter } = useFilter()

  const [wordList, setWordList] = useState(list);
  const [firstFilter, setFirstFilter] = useState(list);
  const [secondFilter, setSecondFilter] = useState(list);
  const [thirdFilter, setThirdFilter] = useState(list);
  const [forthFilter, setForthFilter] = useState(list);

  useEffect(() => {

    let arr = [...list]

    if (filter.first.isComplete) {
      arr = filterLetter(arr, filter.first.wordInfo.first.value, 0, filter.first.wordInfo.first.answer)
      arr = filterLetter(arr, filter.first.wordInfo.second.value, 1, filter.first.wordInfo.second.answer)
      arr = filterLetter(arr, filter.first.wordInfo.third.value, 2, filter.first.wordInfo.third.answer)
      arr = filterLetter(arr, filter.first.wordInfo.forth.value, 3, filter.first.wordInfo.forth.answer)
      arr = filterLetter(arr, filter.first.wordInfo.fifth.value, 4, filter.first.wordInfo.fifth.answer)
    }
    else {
      arr = list
    }
    setWordList(arr)
    setFirstFilter(arr)

  }, [filter.first]);

  useEffect(() => {

    let arr = [...firstFilter]

    if (filter.second.isComplete) {
      arr = filterLetter(arr, filter.second.wordInfo.first.value, 0, filter.second.wordInfo.first.answer)
      arr = filterLetter(arr, filter.second.wordInfo.second.value, 1, filter.second.wordInfo.second.answer)
      arr = filterLetter(arr, filter.second.wordInfo.third.value, 2, filter.second.wordInfo.third.answer)
      arr = filterLetter(arr, filter.second.wordInfo.forth.value, 3, filter.second.wordInfo.forth.answer)
      arr = filterLetter(arr, filter.second.wordInfo.fifth.value, 4, filter.second.wordInfo.fifth.answer)
    }
    else {
      arr = [...firstFilter]
    }

    setWordList(arr)
    setSecondFilter(arr)

  }, [filter.second]);

  useEffect(() => {

    let arr = [...secondFilter]

    if (filter.third.isComplete) {
      arr = filterLetter(arr, filter.third.wordInfo.first.value, 0, filter.third.wordInfo.first.answer)
      arr = filterLetter(arr, filter.third.wordInfo.second.value, 1, filter.third.wordInfo.second.answer)
      arr = filterLetter(arr, filter.third.wordInfo.third.value, 2, filter.third.wordInfo.third.answer)
      arr = filterLetter(arr, filter.third.wordInfo.forth.value, 3, filter.third.wordInfo.forth.answer)
      arr = filterLetter(arr, filter.third.wordInfo.fifth.value, 4, filter.third.wordInfo.fifth.answer)
    }
    else {
      arr = [...secondFilter]
    }

    setWordList(arr)
    setThirdFilter(arr)

  }, [filter.third]);

  useEffect(() => {

    let arr = [...thirdFilter]

    if (filter.forth.isComplete) {
      arr = filterLetter(arr, filter.forth.wordInfo.first.value, 0, filter.forth.wordInfo.first.answer)
      arr = filterLetter(arr, filter.forth.wordInfo.second.value, 1, filter.forth.wordInfo.second.answer)
      arr = filterLetter(arr, filter.forth.wordInfo.third.value, 2, filter.forth.wordInfo.third.answer)
      arr = filterLetter(arr, filter.forth.wordInfo.forth.value, 3, filter.forth.wordInfo.forth.answer)
      arr = filterLetter(arr, filter.forth.wordInfo.fifth.value, 4, filter.forth.wordInfo.fifth.answer)
    }
    else {
      arr = [...thirdFilter]
    }

    setWordList(arr)
    setForthFilter(arr)

  }, [filter.forth]);

  useEffect(() => {

    let arr = [...forthFilter]

    if (filter.fifth.isComplete) {
      arr = filterLetter(arr, filter.fifth.wordInfo.first.value, 0, filter.fifth.wordInfo.first.answer)
      arr = filterLetter(arr, filter.fifth.wordInfo.second.value, 1, filter.fifth.wordInfo.second.answer)
      arr = filterLetter(arr, filter.fifth.wordInfo.third.value, 2, filter.fifth.wordInfo.third.answer)
      arr = filterLetter(arr, filter.fifth.wordInfo.forth.value, 3, filter.fifth.wordInfo.forth.answer)
      arr = filterLetter(arr, filter.fifth.wordInfo.fifth.value, 4, filter.fifth.wordInfo.fifth.answer)
    }
    else {
      arr = [...forthFilter]
    }

    setWordList(arr)

  }, [filter.fifth]);

  return (
    <WordListContext.Provider value={{ wordList, setWordList }}>
      {children}
    </WordListContext.Provider>
  )
}

export default WordListContext;