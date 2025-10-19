const scanApi = (obj) => {
    return Object.keys(obj)
        .filter(k => typeof obj[k] === 'function')
        .map(k => [k, obj[k].length]);
};

const sampleA = {
    f1: x => [x],
    f2: function (x, y) { return [x, y]; },
    f3(x, y, z) { return [x, y, z]; }
};

console.log('Scan result:');
console.log(scanApi(sampleA));

const sampleB = {
    title: 'Sample',
    count: 77,
    a: () => {},
    b: (p, q, r, s, t) => p + q + r + s + t,
    twice: function (x) { return x * 2; },
    items: [4, 5, 6]
};

console.log('\nScan of sampleB:');
console.log(scanApi(sampleB));

module.exports = { scanApi };
