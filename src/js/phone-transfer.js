export default function phoneTransfer(number) {
  const re = /[ ()-]/g;
  let result = number.replace(re, '');
  if ((result[0] === '8') && (result.length === 11)) {
    result = result.replace(/8/, '+7');
  }
  return result;
}
