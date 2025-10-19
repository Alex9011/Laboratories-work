const avgTwo = (a, b) => {
  return (a + b) / 2;
};

const sqr = (x) => {
  return x * x;
};

const cub = (x) => {
  return x * x * x;
};

const buildValues = () => {
  const out = [];
  for (let j = 0; j <= 9; j++) {
    const s = sqr(j);
    const c = cub(j);
    const m = avgTwo(s, c);
    out.push(m);
  }
  return out;
};

console.log(buildValues());

export { avgTwo as average, sqr as square, cub as cube, buildValues as calculate };