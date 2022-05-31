// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function addSum(a, b) {
  if (checkIfEmpty(a) && checkIfEmpty(b)) {
    return 0;
  }
}

function checkIfEmpty(input) {
  if (input === '') {
    return true;
  }
  return false;
}

console.log(addSum('', ''));
