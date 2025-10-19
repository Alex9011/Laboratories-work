const ipToInt = (addr = '127.0.0.1') => {
    return addr
        .split('.')
        .map(v => +v)
        .reduce((sum, oct, i) => {
            const offs = (3 - i) * 8;
            return sum + (oct << offs);
        }, 0);
};

console.log('1.2.3.4      ->', ipToInt('1.2.3.4'));
console.log('10.0.0.1     ->', ipToInt('10.0.0.1'));
console.log('8.8.4.4      ->', ipToInt('8.8.4.4'));
console.log('Default      ->', ipToInt());

console.log('8.8.8.8 (hex)-> 0x' + ipToInt('8.8.8.8').toString(16));

module.exports = { ipToInt };
