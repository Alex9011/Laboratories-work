function purgeValues(source, ...badValues) {
  for (const current of badValues) {
    let position;
    // видаляємо всі входження поточного значення
    while ((position = source.indexOf(current)) !== -1) {
      source.splice(position, 1);
    }
  }
}

console.log('=== Перевірка функції purgeValues() ===\n');

console.log('Тест 1: Видалення декількох чисел');
const list1 = [10, 20, 30, 40, 50, 60, 70];
console.log('До:', list1);
purgeValues(list1, 50, 10, 60);
console.log('Після purgeValues(list1, 50, 10, 60):', list1);
console.log('Очікується: [20, 30, 40, 70]\n');

console.log('Тест 2: Видалення декількох рядків (у тому числі відсутнього)');
const list2 = ['Kyiv', 'Warsaw', 'Prague', 'Lviv'];
console.log('До:', list2);
purgeValues(list2, 'Prague', 'Berlin', 'Kyiv');
console.log('Після purgeValues(list2, "Prague", "Berlin", "Kyiv"):', list2);
console.log('Очікується: ["Warsaw", "Lviv"]\n');

console.log('Тест 3: Видалення всіх елементів масиву');
const list3 = [5, 15, 25];
console.log('До:', list3);
purgeValues(list3, 5, 15, 25);
console.log('Після purgeValues(list3, 5, 15, 25):', list3);
console.log('Очікується: []\n');

console.log('Тест 4: Видалення всіх дублікатів певного значення');
const list4 = [1, 2, 2, 3, 2, 4, 2, 5];
console.log('До:', list4);
purgeValues(list4, 2);
console.log('Після purgeValues(list4, 2):', list4);
console.log('Очікується: [1, 3, 4, 5]\n');

console.log('Тест 5: Видалення значень, яких немає в масиві');
const list5 = ['apple', 'banana', 'orange'];
console.log('До:', list5);
purgeValues(list5, 'grape', 'melon');
console.log('Після purgeValues(list5, "grape", "melon"):', list5);
console.log('Очікується: ["apple", "banana", "orange"] (без змін)\n');

console.log('Тест 6: Дублікати в параметрах');
const list6 = [1, 2, 3, 4, 5];
console.log('До:', list6);
purgeValues(list6, 2, 4, 2, 4);
console.log('Після purgeValues(list6, 2, 4, 2, 4):', list6);
console.log('Очікується: [1, 3, 5]\n');

console.log('Тест 7: Змішаний тест з дублікатами');
const list7 = [1, 2, 3, 2, 4, 3, 5, 2];
console.log('До:', list7);
purgeValues(list7, 2, 3);
console.log('Після purgeValues(list7, 2, 3):', list7);
console.log('Очікується: [1, 4, 5]');
