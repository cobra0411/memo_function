const memo = (func) => {
  const cache = new Map();
  const calculateKey = (args) => {
    return JSON.stringify(args);
  };
  return (...args) => {
    const key = calculateKey(args);
    if (cache.has(key)) {
      console.log("getting from cache");
      return cache.get(key);
    } else {
      console.log("calculating values");
      const value = func.apply(this, args);
      cache.set(key, value);
      return value;
    }
  };
};

const add = (a, b, c) => a + b + c;
const madd = memo(add);
console.log(madd(1, 2, 4));
console.log(madd(1, 2, 4));
console.log(madd(1, 2, 3));
console.log(madd(1, 2, 3));
console.log(madd(1, 2, 3));
