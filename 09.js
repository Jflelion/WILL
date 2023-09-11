function deObjetoAarray(objeto) {
  const result = [];
  for (const key in objeto) {
    result.push([key, objeto[key]]);
  }
  return result;
}

function numberOfCharacters(string) {
  const result = {};
  const sortedString = string.split('').sort().join('');
  
  for (let i = 0; i < sortedString.length; i++) {
    const char = sortedString[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  
  return result;
}

function capToFront(string) {
  let uppercaseChars = '';
  let lowercaseChars = '';
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      uppercaseChars += string[i];
    } else {
      lowercaseChars += string[i];
    }
  }
  
  return uppercaseChars + lowercaseChars;
}

function asAmirror(frase) {
  const words = frase.split(' ');
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  
  return reversedWords.join(' ');
}

function capicua(numero) {
  const numString = numero.toString();
  const reversedNumString = numString.split('').reverse().join('');
  
  if (numString === reversedNumString) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  const regex = /[abc]/g;
  return string.replace(regex, '');
}

function sortArray(arrayOfStrings) {
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  const result = [];
  for (const num1 of array1) {
    if (array2.includes(num1)) {
      result.push(num1);
    }
  }
  return result;
}

module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

