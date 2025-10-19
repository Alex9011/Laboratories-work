const randBetween = (lo, hi) => {
  if (hi === undefined) {
    hi = lo;
    lo = 0;
  }
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
};

console.log('randBetween(12, 24):', randBetween(12, 24));
console.log('randBetween(60):', randBetween(60));
console.log('randBetween(150):', randBetween(150));

module.exports = { randBetween };