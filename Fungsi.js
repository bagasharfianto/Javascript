function multiply(a, b) {
  return a * b;
}
//expression function

const greeting = function (name, language) {
  if (language == "english") {
    return "Good Morning" + name + "!";
  } else if (language == "french") {
    return "Bonjour " + name + "!";
  } else {
    return "Kumaha Damang ?" + name + "!";
  }
}

//Memanfaatkan destructuring object untuk mendapatkan nillai

const user = {
  id: 24,
  displayName: "Bambang",
  fullName: "Subarja"
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}


//Default Parameters
function exponentFormula(baseNumber, exponent=2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = $ ${result}`);
}
//Rest parameter pada function

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

// Arrow function expression

const sayName = function (name) {
  console.log(`Nama saya ${name}`);
}

const sayName2 = (name) => {
  console.log(`Nama saya ${name}`)
}
