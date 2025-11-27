function walkObject(target, handler) {
  for (const prop in target) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) {
      handler(prop, target[prop], target);
    }
  }
}

function walkByKeys(target, handler) {
  Object.keys(target).forEach((prop) => {
    handler(prop, target[prop], target);
  });
}

function walkByEntries(target, handler) {
  Object.entries(target).forEach(([prop, val]) => {
    handler(prop, val, target);
  });
}

console.log('=== Перевірка функції walkObject() ===\n');

console.log("Тест 1: Обхід простого об'єкта");
const sample1 = { alpha: 1, beta: 2, gamma: 3 };
console.log("Об'єкт:", sample1);
console.log('Результат:');
walkObject(sample1, (key, value) => {
  console.log({ key, value });
});

console.log("\nТест 2: Обхід з доступом до всього об'єкта");
const sample2 = { x: 100, y: 200, z: 300 };
console.log("Об'єкт:", sample2);
console.log("Результат із доступом до всієї структури:");
walkObject(sample2, (key, value, full) => {
  console.log(`${key}: ${value} (ключів у об'єкті: ${Object.keys(full).length})`);
});

console.log("\nТест 3: Об'єкт із рядковими значеннями");
const sample3 = { name: 'Alice', city: 'Paris', country: 'France' };
console.log("Об'єкт:", sample3);
console.log('Результат:');
walkObject(sample3, (key, value) => {
  console.log(`${key} => ${value}`);
});

console.log("\nТест 4: Порожній об'єкт");
const sample4 = {};
console.log("Об'єкт:", sample4);
console.log('Результат:');
walkObject(sample4, (key, value) => {
  console.log({ key, value });
});
console.log("(нічого не виводиться — об'єкт порожній)");

console.log("\nТест 5: Об'єкт із різними типами значень");
const sample5 = {
  count: 42,
  text: 'hello',
  active: false,
  list: [1, 2, 3],
  meta: { nested: 'info' },
};
console.log("Об'єкт:", sample5);
console.log('Результат:');
walkObject(sample5, (key, value) => {
  console.log(`${key}: ${JSON.stringify(value)} (тип: ${typeof value})`);
});

console.log('\n=== Альтернативний варіант з Object.keys() ===\n');

console.log('Тест 6: walkByKeys()');
const sample6 = { a: 10, b: 20, c: 30 };
walkByKeys(sample6, (key, value) => {
  console.log({ key, value });
});

console.log('\n=== Альтернативний варіант з Object.entries() ===\n');

console.log('Тест 7: walkByEntries()');
const sample7 = { foo: 'bar', baz: 'qux' };
walkByEntries(sample7, (key, value) => {
  console.log({ key, value });
});

console.log('\n=== Практичний приклад: підрахунок суми значень ===\n');

const stats = { first: 5, second: 15, third: 25 };
let total = 0;
walkObject(stats, (key, value) => {
  total += value;
});
console.log("Об'єкт:", stats);
console.log('Сума всіх значень:', total);
