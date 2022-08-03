let rand = Math.random() * 10;
let parsedValue = parseInt(rand);
let index = parsedValue <= 3 ? parsedValue : parsedValue - 7;

// console.log(parseInt(rand));
// console.log(parsedValue);
// console.log(index);

for (let i = 0; i < 20; i++) {
  // (max - min) + min
  console.log(parseInt(Math.random() * (3 - 0) + 0));
}
