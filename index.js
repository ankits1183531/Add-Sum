function addSum(a) {
  if (checkIfEmpty(a)) {
    return 0;
  } else {
    const delimeter = delimeterChangePatternCheck(a);
    if (delimeter !== ',') {
      a = a.substring(4);
    }
    return getSum(getNumbers(a, delimeter));
  }
}

function delimeterChangePatternCheck(input) {
  let delimeter = ',';
  if (input.substring(0, 2) === '//' && input.substring(3, 4) === '\n') {
    delimeter = input.substring(2, 3);
  }
  return delimeter;
}

function getSum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (Number(num) > 0) {
      sum += Number(num);
    } else {
      throw new Error('negatives not allowed');
    }
  }
  return sum;
}

function getNumbers(input, delimeter) {
  console.log();
  const arr = input
    .replaceAll('\n', delimeter)
    .split(delimeter)
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

console.log(addSum('//;\n1;2'));

console.log(addSum('1,2,-3'));
