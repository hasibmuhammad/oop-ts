const removeDuplicates = (numbers) => {
  let uniqueAr = [];
  for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueAr.length; j++) {
      if (numbers[i] === uniqueAr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueAr.push(numbers[i]);
    }
  }

  return uniqueAr;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
