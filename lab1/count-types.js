"use strict";
///---------a-----------
const data = [true, 'hello', 5, 12, -200, false, 'word', undefined];
let types = {number: 0, string: 0, boolean: 0, undefined: 0};

for (const item of data) {
    const t = typeof item;
    types[t] = (types[t] ?? 0) + 1;
}

console.log("Фіксовані ключі:");
console.dir(types);
///---------b-----------
let counts = {};
for (const item of data) {
    const k = typeof item;
    counts[k] = (counts[k] ?? 0) + 1;
}
console.log("Динамічні ключі:");
console.dir(counts);
