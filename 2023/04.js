/*
Santa needs these messages to be correctly formatted

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
*/

//original, not working
/* function decode(message) {
  let msg = [];
  let tmp = 0;
  for (let i = 0; i < message.length + 1; i++) {
    if (message[i] === "(" || message[i] === ")" || i === message.length) {
      msg.push(message.slice(tmp, i));
      tmp = i;
    }
  }
  return msg
    .filter((sub) => sub && sub !== ")")
    .map((sub) =>
      sub.startsWith("(") && sub.endsWith(")")
        ? sub.slice(1, -1).split("").reverse().join("")
        : sub
    )
    .join("");
} */

//refactored, works for a and b
/* function decode(message) {
  let msg = "";
  let decode = false;
  let curr = "";

  for (let char of message) {
    if (char === "(") {
      decode = true;
    } else if (char === ")") {
      decode = false;
      msg += curr.split("").reverse().join("");
      curr = "";
    } else {
      decode ? (curr += char) : (msg += char);
    }
  }

  return msg;
} */

//stack, chapgpt help
//270 pts - 2,260 ops/s - cc: 3
function decode(message) {
  let msg = "";
  let stack = [];

  for (let char of message) {
    if (char === "(") {
      stack.push(msg);
      msg = "";
    } else if (char === ")") {
      msg = stack.pop() + msg.split("").reverse().join("");
    } else {
      msg += char;
    }
  }

  return msg;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
