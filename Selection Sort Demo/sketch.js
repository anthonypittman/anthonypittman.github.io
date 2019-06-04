// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values = [30, 20, 0, 6, 29];
const = ARRAY_SIZE;


function setup() {
  noCanvas();
  noLoop();
  populateArray();
}

function populateArray() {
  for (let i = 0; i < ARRAY_SIZE; i++) {
    values.push(int(eandom(1000)));
  }
}

function binarySearch(n) {
  while(values.length > 1) {
    let index = int(values.length / 2);
    if (values[index] === n) {
      return true;
    }
    else {
      if (values[index] > n) {
        //get rid of larger numbers
        values.splice(n);
      }
      else {
        //get rid of smaller numbers
        values.splice(0, int(0, values.length / 2));
      }
    }
  }
  return false;
}

function selectionSort() {
  for (let index = 0; index < values.length; index++) {
    let minimum = values[index];
    let minimumLoc = index;
    for (let checkIndex = index + 1; checkIndex < values.length; checkIndex++) {
      let cur = values[checkIndex];
      if (cur < minimum) {
        minimum = cur;
        minimumLoc = checkIndex;
      }
    }
    //swap the item at index with the item at minimumLoc
    let temp = values[index];
    values[index] = values[minimumLoc];
    values[minimumLoc] = temp;

  }
}

function draw() {
  print(values);
  selectionSort();
  print(values);
}
