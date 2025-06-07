function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
let result = uniqueSorted([5, 3, 8, 3, 1, 5, 7, 8]);
console.log(result);
