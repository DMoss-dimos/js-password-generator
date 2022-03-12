//DOM elements
const el = document.getElementById("El");
const uppercaseEl = document.getElementById("uppercase");
const lengthEl = document.getElementById("length");
const lowerCaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symboleEl = document.getElementById("symbol");
const generateEL = document.getElementById("generate");
const boardEl = document.getElementById("board");

// random object
const randomFunctionObject = {
  lower: randomLowerCase,
  upper: randomUpperCase,
  number: randomNumber,
  symbol: randomSymbol,
};

// button event to password cick
generateEL.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowerCaseEl.Checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symboleEl.checked;

  el.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//addaventlistener is not working. I have to figure it out
// generateEL.addEventListener("click", () => {
//   const length = lengthEl.value;
// });

// generator for functions
//random lowercase function
function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(randomLowerCase());

// random uppercase function
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(randomUpperCase());

// random number function
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(randomNumber());

// random symbol function
function randomSymbol() {
  const symbols = "!@#$%^&*()_+<>/,.=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomSymbol());
