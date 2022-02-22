import { createContext, useState, useEffect } from "react";
import useFilter from "../hooks/useFilter";
import { termoList } from "../data/termo";
import filterWordList from "../logic/filterWordListLogic";
import { sortByUniqueAndFreq } from "../logic/wordFrequencyLogic"


let arrayList = termoList.map(el => el.split(""))

arrayList = arrayList.sort(sortByUniqueAndFreq)

const WordListContext = createContext();

export function WordListProvider({ children }) {

  const { filter } = useFilter()

  const [wordList, setWordList] = useState(arrayList);
  const [firstFilter, setFirstFilter] = useState(arrayList);
  const [secondFilter, setSecondFilter] = useState(arrayList);
  const [thirdFilter, setThirdFilter] = useState(arrayList);
  const [forthFilter, setForthFilter] = useState(arrayList);
  const [fifthFilter, setFifthFilter] = useState(arrayList);

  useEffect(() => {

    filterWordList(arrayList, filter, setWordList, setFirstFilter, "first")

  }, [filter.first]);

  useEffect(() => {

    filterWordList(firstFilter, filter, setWordList, setSecondFilter, "second")

  }, [filter.second]);

  useEffect(() => {

    filterWordList(secondFilter, filter, setWordList, setThirdFilter, "third")

  }, [filter.third]);

  useEffect(() => {

    filterWordList(thirdFilter, filter, setWordList, setForthFilter, "forth")

  }, [filter.forth]);

  useEffect(() => {

    filterWordList(forthFilter, filter, setWordList, setFifthFilter, "fifth")

  }, [filter.fifth]);

  return (
    <WordListContext.Provider value={{ wordList, setWordList }}>
      {children}
    </WordListContext.Provider>
  )
}

export default WordListContext;