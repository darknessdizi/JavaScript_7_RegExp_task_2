export default function phoneTransfer(number) {
  // const re = /\d[ (]*\d{3}[) ]*/;
  const re = /[ ()-]/g;
  let result = number.replace(re, '');
  if ((result[0] == '8') && (result.length == 11)) {
      // result = result.replace(/8/, '+7');
      result = '+7' + result.slice(1);
  }
  return result;
}
