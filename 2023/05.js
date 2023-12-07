/*
Create a function that simulates the sled's movement

const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/

//fails one secret test
function cyberReindeer(road, time) {
  //hold all strings
  let sim = [];
  //array to show current road
  let path = road.split("");
  //track road position
  let pos = 0;
  //check if barrier passed
  let barrierPassed = false;
  for (let i = 0; i < time - 1; i++) {
    if (i === 0) {
      sim.push(road);
      pos++;
    }
    if (i < 4) {
      //road with barriers
      if (road[pos] === ".") {
        path[pos] = "S";
        path[pos - 1] = ".";
        pos++;
      }
      sim.push(path.join(""));
    } else {
      //remove barriers
      path = path.map((item) => (item === "|" ? "*" : item));
      if (road[pos] === ".") {
        path[pos] = "S";
        if (barrierPassed) {
          path[pos - 1] = "*";
          barrierPassed = false;
        } else {
          path[pos - 1] = ".";
        }
        pos++;
      } else {
        path[pos] = "S";
        path[pos - 1] = ".";
        barrierPassed = true;
        pos++;
      }
      sim.push(path.join(""));
    }
  }
  return sim;
}

//refactor from solution: 150 pts - 1,862 ops/s - cc:5
function cyberReindeer(road, time) {
  road = road.replace("S", ".");

  const sled = Array(time).fill(road);

  let pos = 0;

  const result = sled.map((_, i) => {
    if (i === 5) road = road.replaceAll("|", "*");
    if (road[pos] !== "|") pos++;
    const start = road.substring(0, pos - 1);
    const end = road.substring(pos, road.length);
    return `${start}S${end}`;
  });

  return result;
}
