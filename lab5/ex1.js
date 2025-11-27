function makeChain(...initialHandlers) {
  const handlersList = initialHandlers;
  
  const runChain = (incoming) => {
    if (typeof incoming === 'number') {
      return handlersList.reduceRight(
        (accumulator, currentHandler) => currentHandler(accumulator),
        incoming
      );
    }

    return makeChain(...handlersList, incoming);
  };
  
  return runChain;
}

console.log('=== Перевірка роботи makeChain() ===\n');

console.log('Тест 1: makeChain(v => v + 7)(v => v * 2)(5)');
const calc1 = makeChain(v => v + 7)(v => v * 2)(5);
console.log('Результат:', calc1);
console.log('Очікується: 17\n');

console.log('Тест 2: makeChain(z => z * 2)(z => z + 7)(5)');
const calc2 = makeChain(z => z * 2)(z => z + 7)(5);
console.log('Результат:', calc2);
console.log('Очікується: 24\n');

console.log('Тест 3: makeChain(a => a + 1)(a => a * 2)(a => a / 3)(a => a - 4)(7)');
const calc3 = makeChain(a => a + 1)(a => a * 2)(a => a / 3)(a => a - 4)(7);
console.log('Результат:', calc3);
console.log('Очікується: 3\n');

console.log('Додаткові приклади:');
const calc4 = makeChain(n => n - 5)(n => n * 3)(10);
console.log('makeChain(n => n - 5)(n => n * 3)(10) =', calc4);

const calc5 = makeChain(x => x / 2)(x => x + 10)(x => x * 2)(20);
console.log('makeChain(x => x / 2)(x => x + 10)(x => x * 2)(20) =', calc5);
