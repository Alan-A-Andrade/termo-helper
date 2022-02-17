import filterLetter from "./filterLogic";

export function generateSuggestion(array) {

  if (!array || array.length === 0) {
    return
  }

  let arrayNumber = []

  for (let i = 0; i < array.length; i++) {

    let word = array[i]
    let filteredArray = [...array]

    filteredArray = filterLetter(filteredArray, word[0], 0, "wrong")
    filteredArray = filterLetter(filteredArray, word[1], 1, "wrong")
    filteredArray = filterLetter(filteredArray, word[2], 2, "wrong")
    filteredArray = filterLetter(filteredArray, word[3], 3, "wrong")
    filteredArray = filterLetter(filteredArray, word[4], 4, "wrong")

    arrayNumber.push(filteredArray.length)

  }

  const min = Math.min(arrayNumber)

  return array[(arrayNumber.indexOf(min))]

}