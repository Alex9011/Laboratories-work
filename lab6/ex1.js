const composeFlow = (...callbacks) => {
  for (const cb of callbacks) {
    if (typeof cb !== 'function') {
      throw new TypeError('composeFlow accepts only functions as arguments');
    }
  }

  return (initialValue) =>
    callbacks.reduce((currentValue, nextFn) => nextFn(currentValue), initialValue);
};

console.log('=== Перевірка роботи composeFlow() ===\n');

const stepUp = n => n + 1;
const multiplyByTwo = n => n * 2;
const toCube = n => n ** 3;

console.log('Тест 1: composeFlow(stepUp, multiplyByTwo, toCube)');
const chain1 = composeFlow(stepUp, multiplyByTwo, toCube);
const res1 = chain1(5);
console.log('f(5) =', res1);
console.log('Очікується: 1728');
console.log('Перевірка: (5 + 1) * 2 = 12, 12^3 = 1728\n');

console.log('Тест 2: composeFlow(stepUp, stepUp)');
const chain2 = composeFlow(stepUp, stepUp);
const res2 = chain2(7);
console.log('f(7) =', res2);
console.log('Очікується: 9');
console.log('Перевірка: 7 + 1 = 8, 8 + 1 = 9\n');

console.log('Тест 3: Перевірка кидання помилки при передачі не-функції');
try {
  const chain3 = composeFlow(stepUp, 7, toCube);
  console.log('ПОМИЛКА: виняток не був згенерований!');
} catch (err) {
  console.log('✓ Помилка коректно оброблена:', err.message);
}

console.log('\n=== Додаткові тести ===\n');

const timesTwo = v => v * 2;
const plusTen = v => v + 10;
const toSquare = v => v * v;

console.log('Тест 4: composeFlow(timesTwo, plusTen, toSquare)');
const chain4 = composeFlow(timesTwo, plusTen, toSquare);
console.log('f(3) =', chain4(3));
console.log('Перевірка: 3 * 2 = 6, 6 + 10 = 16, 16 * 16 = 256\n');

console.log('Тест 5: composeFlow з однією функцією');
const chain5 = composeFlow(toCube);
console.log('f(4) =', chain5(4));
console.log('Перевірка: 4^3 = 64\n');

console.log('Тест 6: Перевірка з різними типами не-функцій');
try {
  composeFlow(stepUp, null, toCube);
} catch (err) {
  console.log('✓ Помилка з null:', err.message);
}

try {
  composeFlow(stepUp, undefined, toCube);
} catch (err) {
  console.log('✓ Помилка з undefined:', err.message);
}

try {
  composeFlow(stepUp, 'not a function', toCube);
} catch (err) {
  console.log('✓ Помилка з рядком:', err.message);
}
