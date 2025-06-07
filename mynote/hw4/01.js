function countLetters(str) {
  let map = new Map();
  let cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
  for (let char of cleaned) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
return map;
}
let result = countLetters("Hello, World!");
for (let [char, count] of result) {
  console.log(`${char}: ${count}`);
}
