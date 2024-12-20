const solution = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return;

  let sum = 0;
  for (let i = 0; i < firstArray.length; i++) {
    const diff = firstArray[i] - secondArray[i];
    sum += diff ** 2;
  }

  return sum / firstArray.length;
};

console.log(solution([1, 2, 3], [4, 5, 6]));

console.log("Lorem  ipsum  dolor  sit amet,".length);
console.log("lacus,   ut   elementum  justo".length);

const LIPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";

console.log(LIPSUM.length / 30);
