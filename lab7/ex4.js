function subtractList(source, toRemove) {
  return source.filter(element => !toRemove.includes(element));
}

function subtractListSet(source, toRemove) {
  const blacklist = new Set(toRemove);
  return source.filter(element => !blacklist.has(element));
}

function subtractListReduce(source, toRemove) {
  return source.reduce((result, element) => {
    if (!toRemove.includes(element)) {
      result.push(element);
    }
    return result;
  }, []);
}

console.log('=== Перевірка функції subtractList() ===\n');

console.log('Тест 1: Різниця числових масивів');
const numsA = [4, 9, -1, 0, 9];
const numsB = [9, 100];
const res1 = subtractList(numsA, numsB);
console.log('numsA:', numsA);
console.log('numsB:', numsB);
console.log('subtractList(numsA, numsB) =', res1);
console.log('Очікується: [4, -1, 0]\n');

console.log('Тест 2: Різниця рядкових масивів');
const citiesA = ['Kyiv', 'Odessa', 'Lviv'];
const citiesB = ['Lviv', 'Berlin'];
const res2 = subtractList(citiesA, citiesB);
console.log('citiesA:', citiesA);
console.log('citiesB:', citiesB);
console.log('subtractList(citiesA, citiesB) =', res2);
console.log('Очікується: ["Kyiv", "Odessa"]\n');

console.log('Тест 3: Немає спільних елементів');
const res3 = subtractList([1, 2, 3], [10, 11, 12]);
console.log('subtractList([1, 2, 3], [10, 11, 12]) =', res3);
console.log('Очікується: [1, 2, 3]\n');

console.log('Тест 4: Всі елементи спільні');
const res4 = subtractList([1, 1, 2], [1, 2]);
console.log('subtractList([1, 1, 2], [1, 2]) =', res4);
console.log('Очікується: []\n');

console.log('Тест 5: Перший масив порожній');
const res5 = subtractList([], [1, 2, 3]);
console.log('subtractList([], [1, 2, 3]) =', res5);
console.log('Очікується: []\n');

console.log('Тест 6: Другий масив порожній');
const res6 = subtractList([5, 6, 7], []);
console.log('subtractList([5, 6, 7], []) =', res6);
console.log('Очікується: [5, 6, 7]\n');

console.log('Тест 7: Обидва масиви порожні');
const res7 = subtractList([], []);
console.log('subtractList([], []) =', res7);
console.log('Очікується: []\n');

console.log('=== Альтернативна реалізація з Set (для великих масивів) ===\n');

console.log('Тест 8: subtractListSet з числами');
const res8 = subtractListSet([4, 9, -1, 0, 9], [9, 100]);
console.log('subtractListSet([4, 9, -1, 0, 9], [9, 100]) =', res8);
console.log('Очікується: [4, -1, 0]\n');

console.log('Тест 9: subtractListSet з рядками');
const res9 = subtractListSet(['Kyiv', 'Odessa', 'Lviv'], ['Lviv', 'Berlin']);
console.log('subtractListSet(["Kyiv", "Odessa", "Lviv"], ["Lviv", "Berlin"]) =', res9);
console.log('Очікується: ["Kyiv", "Odessa"]\n');

console.log('=== Альтернативна реалізація з reduce ===\n');

console.log('Тест 10: subtractListReduce з числами');
const res10 = subtractListReduce([4, 9, -1, 0, 9], [9, 100]);
console.log('subtractListReduce([4, 9, -1, 0, 9], [9, 100]) =', res10);
console.log('Очікується: [4, -1, 0]\n');

console.log('=== Тест з дублікатами ===\n');

console.log('Тест 11: Різниця з дублікатами в першому масиві');
const res11 = subtractList([1, 2, 2, 3, 3, 3], [2]);
console.log('subtractList([1, 2, 2, 3, 3, 3], [2]) =', res11);
console.log('Очікується: [1, 3, 3, 3]\n');

console.log('Тест 12: Складніший випадок з літерами');
const res12 = subtractList(['x', 'y', 'z', 'q'], ['y', 'q', 'w']);
console.log('subtractList(["x", "y", "z", "q"], ["y", "q", "w"]) =', res12);
console.log('Очікується: ["x", "z"]');
