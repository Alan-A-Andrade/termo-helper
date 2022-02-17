

export default function filterLetter(array, letter, position, answer) {

  //nova ideia, guarda estado das letras corretas, se a letra, se a letra ja aparecer na palavra corretamente e ja estiver na errada,
  //filtrar todo array tirando a palavra naquela posição

  let arr = [...array]

  switch (answer) {
    case "wrong":
      arr = arr.filter(el => el[position].toLowerCase() !== letter.toLowerCase())
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



