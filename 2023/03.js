/*
write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''

*/

//340 pts - 3,243 ogs/s - cc:6
function findNaughtyStep(original, modified) {
  for (let i = 0; i < modified.length; i++) {
    if (original[i] !== modified[i] && original.length <= modified.length) {
      return modified[i];
    } else if (
      original[i] !== modified[i] &&
      original.length > modified.length
    ) {
      return original[i];
    }
  }
  return "";
}

//260 pts - 2.670 ops/s - cc: 4
function findNaughtyStep(original, modified) {
  for (let i = 0; i < modified.length; i++) {
    if (original[i] !== modified[i]) {
      return original.length <= modified.length ? modified[i] : original[i];
    }
  }
  return "";
}
