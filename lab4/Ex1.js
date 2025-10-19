function totalFor(...nums) {
    let sum = 0;
    for (let k = 0; k < nums.length; k++) {
        sum += nums[k];
    }
    return sum;
}

function totalForOf(...nums) {
    let sum = 0;
    for (const v of nums) {
        sum += v;
    }
    return sum;
}

function totalWhile(...nums) {
    let sum = 0;
    let k = 0;
    while (k < nums.length) {
        sum += nums[k];
        k++;
    }
    return sum;
}

function totalDoWhile(...nums) {
    let sum = 0;
    if (nums.length === 0) return sum;
    let k = 0;
    do {
        sum += nums[k];
        k++;
    } while (k < nums.length);
    return sum;
}

function totalReduce(...nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log('=== Перевірка функцій total ===\n');

console.log('1. Цикл for:');
console.log('totalFor(1, 2, 3) =', totalFor(1, 2, 3));
console.log('totalFor(0) =', totalFor(0));
console.log('totalFor() =', totalFor());
console.log('totalFor(1, -1, 1) =', totalFor(1, -1, 1));
console.log('totalFor(10, -1, -1, -1) =', totalFor(10, -1, -1, -1));

console.log('\n2. Цикл for..of:');
console.log('totalForOf(1, 2, 3) =', totalForOf(1, 2, 3));
console.log('totalForOf(0) =', totalForOf(0));
console.log('totalForOf() =', totalForOf());
console.log('totalForOf(1, -1, 1) =', totalForOf(1, -1, 1));
console.log('totalForOf(10, -1, -1, -1) =', totalForOf(10, -1, -1, -1));

console.log('\n3. Цикл while:');
console.log('totalWhile(1, 2, 3) =', totalWhile(1, 2, 3));
console.log('totalWhile(0) =', totalWhile(0));
console.log('totalWhile() =', totalWhile());
console.log('totalWhile(1, -1, 1) =', totalWhile(1, -1, 1));
console.log('totalWhile(10, -1, -1, -1) =', totalWhile(10, -1, -1, -1));

console.log('\n4. Цикл do..while:');
console.log('totalDoWhile(1, 2, 3) =', totalDoWhile(1, 2, 3));
console.log('totalDoWhile(0) =', totalDoWhile(0));
console.log('totalDoWhile() =', totalDoWhile());
console.log('totalDoWhile(1, -1, 1) =', totalDoWhile(1, -1, 1));
console.log('totalDoWhile(10, -1, -1, -1) =', totalDoWhile(10, -1, -1, -1));

console.log('\n5. Метод reduce:');
console.log('totalReduce(1, 2, 3) =', totalReduce(1, 2, 3));
console.log('totalReduce(0) =', totalReduce(0));
console.log('totalReduce() =', totalReduce());
console.log('totalReduce(1, -1, 1) =', totalReduce(1, -1, 1));
console.log('totalReduce(10, -1, -1, -1) =', totalReduce(10, -1, -1, -1));
