const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  checkArguments(...args) {
    if (args.some(arg => typeof arg !== 'string') || args.some(arg => arg === undefined)) {
      throw new Error('Incorrect arguments!');
    }
  }

  encrypt(message, key) {
    this.checkArguments(message, key);

    if (this.reverse) {
      message = message.split('').reverse().join('');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        const messageCharCode = message[i].charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 'A'.charCodeAt(0);
        result += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        result += message[i];
      }
    }

    return this.reverse ? result.split('').reverse().join('') : result;
  }

  decrypt(encryptedMessage, key) {
    this.checkArguments(encryptedMessage, key);

    if (this.reverse) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/[A-Z]/)) {
        const encryptedCharCode = encryptedMessage[i].charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26 + 'A'.charCodeAt(0);
        result += String.fromCharCode(decryptedCharCode);
        j++;
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.reverse ? result.split('').reverse().join('') : result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
