// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function addSum(a) {
  if (checkIfEmpty(a)) {
    return 0;
  } else {
    return getSum(getNumbers(a));
  }
}

function getSum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (Number(num) > 0) {
      sum += Number(num);
    } else {
      throw new Error('Negative Number Found');
    }
  }
  return sum;
}

function getNumbers(input) {
  const arr = input
    .replaceAll('\n', ',')
    .split(',')
    .filter((el) => el != '');
  return arr;
}

function checkIfEmpty(input) {
  if (input === '') {
    return true;
  }
  return false;
}

console.log(addSum(''));
console.log(addSum('1'));
console.log(addSum('1,2,'));
console.log(addSum('1 ,2,3,4,5'));
console.log(addSum('1\n2,3'));
console.log(addSum('1\n2,3\n'));
console.log(addSum('1,\n'));
console.log(addSum('1,2,-3'));
