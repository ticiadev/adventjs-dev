/*
returns the maximum distance that the reindeer can travel in any direction

> = Moves to the right
< = Moves to the left
* = Can move forward or backward

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
*/

// 10 pts - 406 ops/s - cc: 3
function maxDistance(movements) {
  let left = 0;
  let right = 0;
  let either = 0;
  for (move of movements) {
    if (move === ">") {
      right++;
    } else if (move === "<") {
      left--;
    } else {
      either++;
    }
  }
  const subtotal = left + right;
  return Math.abs(subtotal) + either;
}

//360 pts - 3,006 ops/s - cc: 4
function maxDistance(movements) {
  const { left, right, either } = movements.split("").reduce(
    (acc, move) => {
      move === ">" ? acc.right++ : move === "<" ? acc.left-- : acc.either++;
      return acc;
    },
    { left: 0, right: 0, either: 0 }
  );
  return Math.abs(left + right) + either;
}
