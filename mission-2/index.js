// const revStr = (str) => {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }

//   return rev;
// };

// console.log(revStr("hello"));

function reverseLetter(str) {
  const alphabeticOnly = str.replace(/[^a-zA-Z]/g, "");
  return alphabeticOnly.split("").reverse().join("");
}
console.log(reverseLetter("hell110o5c0"));
