const makeRange = (start, end) => {
  const seq = [];
  for (let k = start; k <= end; k++) {
    seq.push(k);
  }
  return seq;
};

const makeOddRange = (start, end) => {
  const oddSeq = [];
  for (let k = start; k <= end; k++) {
    if (k % 2 !== 0) {
      oddSeq.push(k);
    }
  }
  return oddSeq;
};

console.log(makeRange(1, 5));
console.log(makeOddRange(1, 10));

export { makeRange, makeOddRange };
