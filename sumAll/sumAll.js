const sumAll = function(num1, num2) {
  let solution = 0;
  if (typeof(num1) !== 'number' | typeof(num2) !== 'number') {
    return 'ERROR';
  } else {
    if (num1 >= 0 && num2 >= 0) {
      if (num1 <= num2) {
        while (num1 <= num2) {
        solution = solution + num1;
        num1++;
        }
      } else if (num1 >= num2) {
        while (num1 >= num2) {
        solution = solution + num2;
        num2++;
        }
      }
    } else {
      return 'ERROR';
    }
  }
  return solution;
}

module.exports = sumAll
