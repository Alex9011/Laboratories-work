function distinctUsingSet(list) {
  // повертаємо новий масив тільки з унікальними значеннями
  return Array.from(new Set(list));
}

function distinctUsingFilter(list) {
  // залишаємо елемент, якщо його перша поява має той самий індекс
  return list.filter((value, idx) => list.indexOf(value) === idx);
}

function distinctUsingReduce(list) {
  // за допомогою reduce збираємо тільки перші входження
  return list.reduce((result, value) => {
    if (!result.includes(value)) {
      result.push(value);
    }
    return result;
  }, []);
}

console.log('=== Перевірка distinctUsingSet() ===\n');

console.log('Тест 1: Числа з дублікатами (Set)');
const out1 = distinctUsingSet([3, 3, 1, 2, 1]);
console.log('distinctUsingSet([3, 3, 1, 2, 1]) =', out1);
console.log('Очікується: [3, 1, 2]\n');

console.log('Тест 2: Рядки з дублікатами (Set)');
const out2 = distinctUsingSet(['left', 'right', 'left', 'up']);
console.log('distinctUsingSet(["left", "right", "left", "up"]) =', out2);
console.log('Очікується: ["left", "right", "up"]\n');

console.log('Тест 3: Масив без повторів');
const out3 = distinctUsingSet([10, 20, 30, 40]);
console.log('distinctUsingSet([10, 20, 30, 40]) =', out3);
console.log('Очікується: [10, 20, 30, 40]\n');

console.log('Тест 4: Порожній масив');
const out4 = distinctUsingSet([]);
console.log('distinctUsingSet([]) =', out4);
console.log('Очікується: []\n');

console.log('Тест 5: Усі елементи однакові');
const out5 = distinctUsingSet([9, 9, 9, 9]);
console.log('distinctUsingSet([9, 9, 9, 9]) =', out5);
console.log('Очікується: [9]\n');

console.log('=== Альтернативний варіант через filter ===\n');

console.log('Тест 6: distinctUsingFilter([3, 3, 1, 2, 1])');
const out6 = distinctUsingFilter([3, 3, 1, 2, 1]);
console.log('Результат:', out6);
console.log('Очікується: [3, 1, 2]\n');

console.log('Тест 7: distinctUsingFilter(["left", "right", "left", "up"])');
const out7 = distinctUsingFilter(['left', 'right', 'left', 'up']);
console.log('Результат:', out7);
console.log('Очікується: ["left", "right", "up"]\n');

console.log('=== Альтернативний варіант через reduce ===\n');

console.log('Тест 8: distinctUsingReduce([3, 3, 1, 2, 1])');
const out8 = distinctUsingReduce([3, 3, 1, 2, 1]);
console.log('Результат:', out8);
console.log('Очікується: [3, 1, 2]\n');

console.log('Тест 9: distinctUsingReduce(["left", "right", "left", "up"])');
const out9 = distinctUsingReduce(['left', 'right', 'left', 'up']);
console.log('Результат:', out9);
console.log('Очікується: ["left", "right", "up"]\n');

console.log('=== Тест зі змішаними типами ===\n');

console.log('Тест 10: Змішаний масив');
const out10 = distinctUsingSet([1, '1', 2, '2', 1, 2, '1']);
console.log('distinctUsingSet([1, "1", 2, "2", 1, 2, "1"]) =', out10);
console.log('Очікується: [1, "1", 2, "2"]');
