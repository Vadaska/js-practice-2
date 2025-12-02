// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip';
// }

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 6));

// function getFileName(file) {
//   const fileNoEnd = file.indexOf('.');
//   if (fileNoEnd > 0) {
//     return file.slice(0, fileNoEnd);
//   } else {
//     return file.slice();
//   }
//   console.log(getFileName('file.txt`)'));
// }

// Цикли!!!!!!
// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter; // створюємо локальну змінну

//   while (counter < maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }

// countClients(18, 25);

function calculateTotal(number) {
  let sum = 0;
  let i = 1;
  while (i <= number) {
    sum += i;
    i++;
  }
  return sum;
}
console.log(calculateTotal(5));
