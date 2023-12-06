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

function cyberReindeer(road, time) {
  //hold all strings
  let sim = [];
  //convert string to array to manipulate
  let arr = road.split("");
  //track passed barrier
  let barrier = false;
  //loop through units of time
  for (let i = 0; i < time; i++) {
    //start at initial state
    i === 0 && sim.push(road);
    //handle next steps
    if (road[i] === "." && road[i - 1] !== "*") {
      //if currently on road, TODO: handle if barrier is true
      let curr = arr[i];
      if (barrier) {
        arr[i] = "S";
        arr[i - 1] = "*";
        sim.push(arr.join(""));
        barrier = false;
      } else {
        arr[i] = "S";
        arr[i - 1] = curr;
        sim.push(arr.join(""));
      }
    } else if (road[i] === "|") {
      //if on closed barrier, TODO: keep array if i > 5
      if (i > 5) {
        barrier = true;
        arr[i] = "S";
        arr[i - 1] = ".";
      }
      sim.push(arr.join(""));
    } else if (road[i] === "*") {
      //if on open barrier
      barrier = true;
      arr[i] = "S";
      arr[i - 1] = ".";
      sim.push(arr.join(""));
    }
  }
  return sim;
}

function cyberReindeer(road, time) {
  //set loop length
  const loop = time > road ? road : time;
  //hold all strings
  let sim = [];
  //convert string to array to manipulate
  let arr = road.split("");
  //track passed barrier
  let barrierPassed = false;
  //loop through units of time
  for (let i = 0; i < loop; i++) {
    i === 0 && sim.push(road);
    if (i > 5) {
      if (road[i] === "." && road[i - 1] !== "*") {
        let curr = arr[i];
        if (barrierPassed) {
          arr[i] = "S";
          arr[i - 1] = "*";
          barrierPassed = false;
        } else {
          arr[i] = "S";
          arr[i - 1] = curr;
        }
        sim.push(arr.join(""));
      } else if (road[i] === "|" || road[i] === "*") {
        barrier = true;
        arr[i] = "S";
        arr[i - 1] = ".";
        sim.push(arr.join(""));
      }
    }
  }

  return sim;
}
