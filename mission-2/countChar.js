const countChar = (str, sub) => {
  const reg = new RegExp(sub, "gi");
  return str.match(reg).length;
};

console.log(countChar("hello world", "o"));
console.log(countChar("javascript", "a"));
