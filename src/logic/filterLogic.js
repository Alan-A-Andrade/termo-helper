

export default function filterLetter(array, letter, position, answer) {

  let arr = [...array]

  switch (answer) {
    case "wrong":
      arr = arr.filter(el => el[position].toLowerCase() !== letter.toLowerCase())
      break;
    case "right":
      arr = arr.filter(el => el[position].toLowerCase() === letter.toLowerCase())
      break;
    case "place":
      arr = arr.filter(el => (el.some(l => l === letter) && el[position] !== letter))
      break;
    default:
      break;
  }

  return arr

}



