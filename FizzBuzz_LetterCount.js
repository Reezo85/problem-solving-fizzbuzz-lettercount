/******************************
 * FizzBuzz Problem
 ******************************/
function fizzBuzz(n) {
  // Validate input: must be an integer from 1–100
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    console.error("Error: Input must be an integer between 1 and 100.");
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/******************************
 * Letter Count Problem
 ******************************/
function letterCount(word) {
  // Allow letters only (A–Z, case-insensitive)
  const alphabetRegex = /^[a-zA-Z]+$/;

  if (typeof word !== "string" || !alphabetRegex.test(word)) {
    console.error("Error: Input must contain letters only.");
    return;
  }

  const counts = {};

  for (let letter of word) {
    const lower = letter.toLowerCase();
    counts[lower] = counts[lower] ? counts[lower] + 1 : 1;
  }

  return counts;
}

/******************************
 * Example Calls
 ******************************/
console.log("FizzBuzz Test (15):");
fizzBuzz(15);

console.log("\nLetter Count Tests:");
console.log(letterCount("Caesar"));     // { c: 1, a: 2, e: 1, s: 1, r: 1 }
console.log(letterCount("AABaBa"));     // { a: 4, b: 2 }
// letterCount("Caesar42");             // Error
