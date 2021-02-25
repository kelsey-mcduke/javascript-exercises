const sumAll = function(num1, num2) {
  let solution = 0;
  while (num1 <= num2 ) {
    solution = solution + num1;
    num1++;
  }
  return solution;
}

module.exports = sumAll
