const number = 12321;
let temp = number;
let reversed = 0;

while (temp !== 0) {
  reversed = (reversed * 10) + (temp % 10);
  temp = Math.floor(temp / 10);
}

if (number === reversed) {
  console.log(`${number} is a palindrome`);
} else {
  console.log(`${number} is not a palindrome`);
}

