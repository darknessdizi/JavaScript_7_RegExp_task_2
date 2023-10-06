import phoneTransfer from './phone-transfer';

const number1 = '8 (927) 000-08-81';
const number2 = '+7 960 000 00 00';
const number3 = '+86 000 000 0881';

console.log('Номер 1 -', phoneTransfer(number1));
console.log('Номер 2 -', phoneTransfer(number2));
console.log('Номер 3 -', phoneTransfer(number3));
