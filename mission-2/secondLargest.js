const findSecondLargest = (numbers) => {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  numbers.splice(numbers.indexOf(largest), 1);

  let secondLargest = numbers[0];
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > secondLargest) {
      secondLargest = numbers[j];
    }
  }

  return secondLargest;
};

console.log(findSecondLargest([3, 1, 20000, 4, 1, 5, 90, 10000, 50, 1000])); // 5
