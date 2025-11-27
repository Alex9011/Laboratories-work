function cache(valueToKeep) {
  return () => valueToKeep;
}

function cacheWithUpdate(startValue) {
  let internal = startValue;

  const reader = () => internal;

  reader.update = (nextValue) => {
    internal = nextValue;
  };

  return reader;
}

function cacheMany(...payload) {
  return () => payload;
}

console.log('=== Перевірка функції cache() ===\n');

console.log('Тест 1: Зберігання числа');
const readNumber = cache(15);
const storedNumber = readNumber();
console.log('cache(15)');
console.log('Результат:', storedNumber);
console.log('Очікується: 15\n');

console.log('Тест 2: Зберігання рядка');
const readString = cache('Stored text');
const storedString = readString();
console.log('cache("Stored text")');
console.log('Результат:', storedString);
console.log('Очікується: "Stored text"\n');

console.log('Тест 3: Зберігання об\'єкта');
const person = { username: 'Alex', score: 99 };
const readObject = cache(person);
const storedObject = readObject();
console.log('cache({ username: "Alex", score: 99 })');
console.log('Результат:', storedObject);
console.log('Очікується: { username: "Alex", score: 99 }\n');

console.log('Тест 4: Зберігання масиву');
const numbersList = [10, 20, 30];
const readArray = cache(numbersList);
const storedArray = readArray();
console.log('cache([10, 20, 30])');
console.log('Результат:', storedArray);
console.log('Очікується: [10, 20, 30]\n');

console.log('Тест 5: Зберігання функції');
const innerFn = () => 'cached function result';
const readFn = cache(innerFn);
const storedFn = readFn();
console.log('cache(() => "cached function result")');
console.log('Результат:', storedFn());
console.log('Очікується: "cached function result"\n');

console.log('Тест 6: Багаторазові виклики повертають однакове значення');
const repeatReader = cache(2025);
console.log('Перший виклик:', repeatReader());
console.log('Другий виклик:', repeatReader());
console.log('Третій виклик:', repeatReader());
console.log('Всі виклики повертають: 2025\n');

console.log('Тест 7: Зберігання null і undefined');
const readNull = cache(null);
const readUndef = cache(undefined);
console.log('cache(null) =', readNull());
console.log('cache(undefined) =', readUndef());

console.log('\n=== Розширена версія з update ===\n');

console.log('Тест 8: cacheWithUpdate - читання і запис');
const mutableHolder = cacheWithUpdate(50);
console.log('Початкове значення:', mutableHolder());
mutableHolder.update(75);
console.log('Після mutableHolder.update(75):', mutableHolder());
mutableHolder.update(100);
console.log('Після mutableHolder.update(100):', mutableHolder());

console.log('\n=== Версія з множинними значеннями ===\n');

console.log('Тест 9: cacheMany - зберігання декількох значень');
const readBundle = cacheMany('a', 'b', 'c', 1, 2, 3);
console.log('cacheMany("a", "b", "c", 1, 2, 3)');
console.log('Результат:', readBundle());

console.log('\n=== Практичний приклад: налаштування програми ===\n');

const settings = cache({
  endpoint: 'https://api.example.com',
  timeout: 5000,
  secure: true,
});

console.log('Налаштування:', settings());
console.log('Таймаут:', settings().timeout);
console.log('Режим secure:', settings().secure);
