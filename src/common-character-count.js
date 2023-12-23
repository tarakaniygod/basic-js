const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    throw new Error('Both parameters should be strings');
  }

  let commonCount = 0;
  const s2Array = [...s2];

  for (const char of s1) {
    const index = s2Array.indexOf(char);
    if (index !== -1) {
      commonCount++;
      s2Array.splice(index, 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
