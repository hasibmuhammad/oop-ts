// start from 0 go to the end at numbers.length - 1
// initally set the largest to the first indexed number
// then compare with all the items

const findLargest = (numbers) => {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
};

console.log(findLargest([3, 1, 4, 1, 5, 9]));
