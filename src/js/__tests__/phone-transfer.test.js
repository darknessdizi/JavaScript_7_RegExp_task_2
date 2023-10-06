import phoneTransfer from '../phone-transfer';

const listNumbers = [
  '8-(927)-000-08-81',
  '+7 960 000 00 00',
  '+86 000 000 0881'
];

const testNumbers = test.each(listNumbers);

testNumbers('Тест номеров', (number) =>{
  const newNumber = phoneTransfer(number);
  expect(newNumber).not.toContain(' ');
  expect(newNumber).toMatch(/[^ -()]/);
  expect(newNumber).toMatch(/^\+[0-9]+$/);
});
