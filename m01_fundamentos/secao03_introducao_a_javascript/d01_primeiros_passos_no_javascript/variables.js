const sufMoney = (beanPrice, totalMoney) => {
  let message = '';

  if (totalMoney < beanPrice) {
    message = 'Você não possui saldo suficiente :(';
  } else if (totalMoney === beanPrice) {
    message = 'Você vai gastar todo o seu dinheiro.';
  } else {
    message = 'Pode comprar'
  };
  return message;
};

//console.log(sufMoney(10, 1000));

//const personAge = 17;
//let canVote;
//if (personAge >= 16) {
//  canVote = 'Pode votar!';
//} else {
//  canVote = 'Não pode votar!';
//}

//console.log(canVote);

//com operador ternario
const personAge = 17;
const canVote = personAge >= 16 ? 'Pode votar' : 'Não pode votar!';

console.log(canVote);




let temperature = 20;
let weather = temperature > 30 ? 'tá quente' : 'tá de boa';
console.log(`A temperatura é ${temperature}, portanto, ${weather}.`);

//ternario com apenas true

let isTrue = temperature > 30 && true;
console.log(isTrue);


// Desafios

const conta = (num1, num2, operador) => {
  if (operador === '+') {
    return num1 + num2;
  } else if (operador === '-') {
    return num1 - num2;
  } else if (operador === '*') {
    return num1 * num2;
  } else if (operador === '/') {
    return num1 / num2;
  } else if (operador === '%') {
    return num1 % num2;
  }
}

console.log(conta (2, 2, '*'));

const greaterNumber = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num2 && num3 > num1) {
    return num3;
  }
}

console.log(greaterNumber(8, 5, 2));









