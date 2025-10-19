'use strict';

const inc = (num) => {
    num.n += 1;
    num.b += 5;
};

module.exports = { inc };

const obj = { n: 5, b:20 };
inc(obj);
console.log(obj);
    