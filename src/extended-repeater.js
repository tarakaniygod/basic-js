const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';

  if (options.addition !== undefined) {
    let addition = options.addition;

    if (typeof addition !== 'string') {
      addition = String(addition);
    }

    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';

    let additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    str = str + additionStr;
  }

  return new Array(repeatTimes).fill(str).join(separator);
}

module.exports = {
  repeater
};
