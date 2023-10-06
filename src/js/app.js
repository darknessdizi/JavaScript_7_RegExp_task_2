import phoneTransfer from './phone-transfer.js';

// 8 (927) 000-00-00 -> +79270000000
// +7 960 000 00 00 -> +79600000000
// +86 000 000 0000 -> +860000000000

const number1 = '8 (927) 000-00-00';
const number2 = '+7 960 000 00 00';
const number3 = '+86 000 000 0000';

console.log('Номер 1 -', phoneTransfer(number1));
console.log('Номер 2 -', phoneTransfer(number2));
console.log('Номер 3 -', phoneTransfer(number3));
