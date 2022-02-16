import Letter from "../Form/Letter";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import useFilter from "../../hooks/useFilter";

import { WordInputStyled } from "./style";

function WordInput(Props) {

  const { filter, setFilter } = useFilter()

  const [word, setWord] = useState({
    first: { value: "", answer: "" },
    second: { value: "", answer: "" },
    third: { value: "", answer: "" },
    forth: { value: "", answer: "" },
    fifth: { value: "", answer: "" }
  })

  const firstLetter = useRef()
  const secondLetter = useRef()
  const thirdLetter = useRef()
  const forthLetter = useRef()
  const fifthLetter = useRef()

  useEffect(() => {

    let arr = []
    for (const [key, value] of Object.entries(word)) {
      if (value.value !== "" && value.answer !== "") {
        arr.push(true)
      }
      else {
        arr.push(false)
      }

    }

    let isAllComplete = arr.every(el => el === true)

    if (isAllComplete) {
      setFilter({ ...filter, [Props.place]: { isComplete: true, wordInfo: word } })
    }
    else {
      setFilter({ ...filter, [Props.place]: { isComplete: false, wordInfo: "" } })
    }

  }, [word]);

  function handleLetterInput(e, next) {

    setWord({ ...word, [e.target.name]: { ...word[e.target.name], value: e.target.value } })

    if (!next) {
      return
    }
    if (e.target.maxLength === e.target.value.length) {
      next.current.focus()
    }

  }

  function handleBackSpace(e, last) {
    if (e.keyCode === 8 && word[e.target.name].value === "") {
      setWord({ ...word, [e.target.name]: { ...word[e.target.name], answer: "", value: "" } })
      last.current.focus()
    }
  }

  function handleClick(e) {

    if (e.target.value !== "") {

      switch (word[e.target.name].answer) {
        case "":
          setWord({ ...word, [e.target.name]: { ...word[e.target.name], answer: "right" } })
          return
        case "right":
          setWord({ ...word, [e.target.name]: { ...word[e.target.name], answer: "place" } })
          return
        case "place":
          setWord({ ...word, [e.target.name]: { ...word[e.target.name], answer: "wrong" } })
          return
        default:
          setWord({ ...word, [e.target.name]: { ...word[e.target.name], answer: "" } })
          break;
      }
    }
    else {
      setWord({ ...word, [e.target.name]: { ...word[e.target.name], answer: "" } })
    }
  }


  return (
    <WordInputStyled>
      <Letter
        answer={word.first.answer}
        type="text"
        maxLength={1}
        autoComplete="off"
        name={"first"}
        value={word.first.value}
        onChange={e => handleLetterInput(e, secondLetter)}
        onKeyUp={(e) => handleBackSpace(e, firstLetter)}
        ref={firstLetter}
        onClick={handleClick}
        disabled={Props.isLocked}

      />
      <Letter
        answer={word.second.answer}
        type="text"
        maxLength={1}
        autoComplete="off"
        name={"second"}
        value={word.second.value}
        onChange={e => handleLetterInput(e, thirdLetter)}
        onKeyUp={(e) => handleBackSpace(e, firstLetter)}
        ref={secondLetter}
        onClick={handleClick}
        disabled={Props.isLocked}
      />
      <Letter
        answer={word.third.answer}
        type="text"
        maxLength={1}
        autoComplete="off"
        name={"third"}
        value={word.third.value}
        onChange={e => handleLetterInput(e, forthLetter)}
        onKeyUp={(e) => handleBackSpace(e, secondLetter)}
        ref={thirdLetter}
        onClick={handleClick}
        disabled={Props.isLocked}
      />
      <Letter
        answer={word.forth.answer}
        type="text"
        maxLength={1}
        autoComplete="off"
        name={"forth"}
        value={word.forth.value}
        onChange={e => handleLetterInput(e, fifthLetter)}
        onKeyUp={(e) => handleBackSpace(e, thirdLetter)}
        ref={forthLetter}
        onClick={handleClick}
        disabled={Props.isLocked}
      />
      <Letter
        answer={word.fifth.answer}
        type="text"
        maxLength={1}
        autoComplete="off"
        name={"fifth"}
        value={word.fifth.value}
        onChange={handleLetterInput}
        onKeyUp={(e) => handleBackSpace(e, forthLetter)}
        ref={fifthLetter}
        onClick={handleClick}
        disabled={Props.isLocked}
      />
    </WordInputStyled>
  )
}


export default WordInput