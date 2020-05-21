var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rotateby = 3;

function rotateArrayByNpositionUsingTemparray(array, rotateby) {
  let temparray = array.splice(0, rotateby);
  console.log([...array, ...temparray]);
}

function rotateArrayByNpositionbyShifting(array, rotateby) {
  for (let i = 0; i < rotateby; i++) {
    let temp = array[0],
      j;
    for (j = 0; j < array.length - 1; j++) array[j] = array[j + 1];
    array[j] = temp;
  }
  console.log(array);
}
rotateArrayByNpositionUsingTemparray(array, rotateby);
rotateArrayByNpositionbyShifting([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rotateby);
