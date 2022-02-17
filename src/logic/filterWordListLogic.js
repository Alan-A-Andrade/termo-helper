import filterLetter from "./filterLogic";

function valuesToArray(state, wordPosition) {

  let letters = Object.keys(state[wordPosition].wordInfo).map(function (key) { return state[wordPosition].wordInfo[key].value.toLowerCase(); })
  let answer = Object.keys(state[wordPosition].wordInfo).map(function (key) { return state[wordPosition].wordInfo[key].answer; })

  return [letters, answer];
}


export default function filterWordList(array, stateList, setStateList, setStateFilter, wordPosition) {


  let arr = [...array]

  let wordState = valuesToArray(stateList, wordPosition)

  if (stateList[wordPosition].isComplete) {
    arr = filterLetter(arr, stateList[wordPosition].wordInfo.first.value, 0, stateList[wordPosition].wordInfo.first.answer, wordState)
    arr = filterLetter(arr, stateList[wordPosition].wordInfo.second.value, 1, stateList[wordPosition].wordInfo.second.answer, wordState)
    arr = filterLetter(arr, stateList[wordPosition].wordInfo.third.value, 2, stateList[wordPosition].wordInfo.third.answer, wordState)
    arr = filterLetter(arr, stateList[wordPosition].wordInfo.forth.value, 3, stateList[wordPosition].wordInfo.forth.answer, wordState)
    arr = filterLetter(arr, stateList[wordPosition].wordInfo.fifth.value, 4, stateList[wordPosition].wordInfo.fifth.answer, wordState)
  }
  else {
    arr = array
  }
  setStateList(arr)
  setStateFilter(arr)

}