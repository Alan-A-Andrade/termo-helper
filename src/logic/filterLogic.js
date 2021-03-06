

function removeFromArray(array, index) {

  let arr1 = array.slice(0, index)
  let arr2 = array.slice(index + 1, array.length)
  let arr = [...arr1, ...arr2]
  return arr
}

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}



export default function filterLetter(array, letter, position, answer, wordAnswer) {

  let arr = [...array]
  letter = letter.toLowerCase()
  switch (answer) {
    case "wrong":
      if (getOccurrence(wordAnswer[0], letter.toLowerCase()) > 1) {

        if (wordAnswer[1][wordAnswer[0].indexOf(letter.toLowerCase())] === "right") {
          arr = arr.filter((el, id) => !(removeFromArray(el, wordAnswer[0].indexOf(letter.toLowerCase())).includes(letter.toLowerCase())))
        }
        if (wordAnswer[1][wordAnswer[0].indexOf(letter.toLowerCase())] === "place") {
          arr = arr.filter(el => ((el.includes(letter.toLowerCase())) && el[position].toLowerCase() !== letter.toLowerCase()))
        }
        if (wordAnswer[1][wordAnswer[0].indexOf(letter.toLowerCase())] === "wrong") {
          arr = arr.filter(el => el[position].toLowerCase() !== letter.toLowerCase())
        }

      }
      else {

        arr = arr.filter(el => !el.includes(letter))
      }
      break;
    case "right":
      arr = arr.filter(el => el[position].toLowerCase() === letter.toLowerCase())
      break;
    case "place":
      arr = arr.filter(el => (el.includes(letter.toLowerCase())) && el[position].toLowerCase() !== letter.toLowerCase())
      break;
    default:
      break;
  }

  return arr

}





