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
  return arr.reduce((acc, num) => acc + Number(num), 0);
}

function getNumbers(input) {
  const arr = input.split(',');
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
console.log(addSum('1 ,2'));
