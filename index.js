// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function addSum(a, b) {
  if (a === '' && b === '') {
    return 0;
  }
}

console.log(addSum('', ''));
