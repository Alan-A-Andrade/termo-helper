let freqTablePtBr = {
  a: 0.1463,
  b: 0.0104,
  c: 0.0388,
  d: 0.0499,
  e: 0.1257,
  f: 0.0102,
  g: 0.0130,
  h: 0.0128,
  i: 0.0618,
  j: 0.0040,
  k: 0.0002,
  l: 0.0278,
  m: 0.0474,
  n: 0.0505,
  o: 0.1073,
  p: 0.0252,
  q: 0.0120,
  r: 0.0653,
  s: 0.0781,
  t: 0.0434,
  u: 0.0463,
  v: 0.0167,
  w: 0.0001,
  x: 0.0021,
  y: 0.0001,
  z: 0.0047,
}

function sortByFreq(a, b) {

  let aEq = freqTablePtBr[a[0]] * freqTablePtBr[a[1]] * freqTablePtBr[a[2]] * freqTablePtBr[a[3]] * freqTablePtBr[a[4]]
  let bEq = freqTablePtBr[b[0]] * freqTablePtBr[b[1]] * freqTablePtBr[b[2]] * freqTablePtBr[b[3]] * freqTablePtBr[b[4]]
  return bEq - aEq
}

function sortByUniqueAndFreq(a, b) {
  let aEq = freqTablePtBr[a[0]] * freqTablePtBr[a[1]] * freqTablePtBr[a[2]] * freqTablePtBr[a[3]] * freqTablePtBr[a[4]]
  let bEq = freqTablePtBr[b[0]] * freqTablePtBr[b[1]] * freqTablePtBr[b[2]] * freqTablePtBr[b[3]] * freqTablePtBr[b[4]]

  aEq = (aEq / Math.pow(numRepeatedChar(a), 3))
  bEq = (bEq / Math.pow(numRepeatedChar(b), 3))

  return bEq - aEq

}

function numRepeatedChar(array) {
  return array.reduce(sumOccurrence, 0)
}

function sumOccurrence(total, value, index, array) {
  return total += array.filter((v) => (v === value)).length;
}


function random() {
  return Math.random() - 0.5;
}

export {
  sortByUniqueAndFreq,
}