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

// generate event to password cick
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

// copy to clipboard
clipBoardEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea');
    const password = el.innerText;

    if(!password){
        return;
    }
    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
        document.execCommand("copy");// use api clipboard with navagator
        textarea.remove();
        alert("Password copy to clipboard");
    
})
//addaventlistener is not working. I have to figure it out
// generateEL.addEventListener("click", () => {
//   const length = lengthEl.value;
// });

//generate password
//steps
// initialize password variable
// filter out unchecked types
// loop over length call generator function for each type
// add final password to the passwaord variable and return
function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = "";

  const typeCount = lower + upper + number + symbol;

  console.log("typeCount: ", typeCount);

  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter;
  (item) => Objects.values(item)[0];

  console.log("typeArr: ", typeArr);

  if (typeCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typeCount) {
    typesArr.forEach((type) => {
      const functionName = Object.keys(type)[0];
      console.log("functionName: ", function)

    //   generatePassword += randomFunctionObject[functionName]();
      generatedPassword += randomFunctionObject[functionName]();
    });
  }
}

// console.log(generatedPassword.slice(1, length));
return completePassword  = generatedPassword.slice(1, length);
 



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
