const character = "#";
const count = 8;
const rows = [];

//EXAMPLE FUNCTION
/* function padRow(name) {
  //Defining parameters for the function gives a value when calling a function //
  return name;
}
const call = padRow("Arti"); // Need to pass in argument, otherwise will return undefined
console.log(call); */

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

/* //FOR LOOP
for (let i = 1; i <= count; i++) {
  //i represents the current "row" number in the loop
  rows.push(padRow(i, count));
} */

//WHILE LOOP

//1
/* let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
  rows.push(padRow(done, count));

  if (done === count) {
    continueLoop = false;
  }
}
 */

//2 -  Can remove entire if statement from above, as comparison in while has been removed.
/* let continueLoop = false;
let done = 0;
while (done !== count) {
  done++;
  rows.push(padRow(done, count));
} */

//3 - Loop no longer relying on continueLoop variable => unused declaration => remove continueLoop variable
/* while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
 */

//INVERTED PYRAMID - USING FOR LOOP
/* for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
 */

//INVERTED PYRAMID USING .SHIFT
/* for (let i = 1; i <= count; i++) {
  //i represents the current "row" number in the loop
  rows.unshift(padRow(i, count));
} */

//TOGGLE BETWEEN INVERTED AND STANDARD PYRAMID
let inverted = true;

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

//RESULTS
let result = "";

for (const row of rows) {
  /*   result = result + row; // Output will now show on same line
   */ result = result + "\n" + row; // Escape sequence \n is interpreted as a new line when the string is logged7
}
/*   const character = i;
  character.repeat(i + 1); //Adding 1 to i prevents off-by-one-error as first index of rows array is 0, but repeating string 0 times results in nothing to print
}
 */

console.log(result);

/* // FUNCTION E.G.
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum) */
