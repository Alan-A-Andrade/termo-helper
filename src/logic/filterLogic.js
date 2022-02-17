

function removeFromArray(array, index) {

  let arr1 = array.slice(0, index)
  let arr2 = array.slice(index + 1, array.length)
  let arr = [...arr1, ...arr2]
  return arr
}

export default function filterLetter(array, letter, position, answer, wordAnswer) {

  let arr = [...array]

  switch (answer) {
    case "wrong":
      console.log(letter)
      console.log("cheguei no caso wrong")
      if (wordAnswer[0].includes(letter.toLowerCase()) && wordAnswer[1][wordAnswer[0].indexOf(letter)] === "right") {
        console.log("cheguei com palabra ja certa")
        arr = arr.filter((el, id) => !(removeFromArray(el, wordAnswer[0].indexOf(letter)).includes(letter)))
      }
      else {
        console.log(letter)
        console.log("naõ deveria ter")
        arr = arr.filter(el => el[position].toLowerCase() !== letter.toLowerCase())
      }
      break;
    case "right":
      arr = arr.filter(el => el[position].toLowerCase() === letter.toLowerCase())
      break;
    case "place":
      arr = arr.filter(el => (el.some(l => l.toLowerCase() === letter.toLowerCase()) && el[position].toLowerCase() !== letter.toLowerCase()))
      break;
    default:
      break;
  }

  return arr

}





