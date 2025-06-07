function deepMerge(obj1, obj2) {
  for (let key in obj2) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (isObject(val1) && isObject(val2)) {
      deepMerge(val1, val2);
    } else {
      obj1[key] = val2; 
    }
  }
  return obj1;
}
function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
