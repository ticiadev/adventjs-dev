/*
return list of gifts that can be made

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []

*/

//260pts - 2,420 ops/s - cc: 4
function manufacture(gifts, materials) {
  let make = [];
  gifts.forEach((gift) => {
    gift.split("").every((char) => materials.includes(char)) && make.push(gift);
  });
  return make;
}

//270pts - 2,623 ops/s - cc: 3
function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    gift.split("").every((char) => materials.includes(char))
  );
}
