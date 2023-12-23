const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Input should be a non-negative integer');
  }

  const numStr = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
    const currentNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
    maxNumber = Math.max(maxNumber, currentNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
