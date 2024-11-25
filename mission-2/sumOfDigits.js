const sumOfDigits = (digits) => {
  const nums = digits.toString().split("").map(Number);
  return nums.reduce((acc, cur) => acc + cur, 0);
};
console.log(sumOfDigits(1234));
