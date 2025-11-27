function dropItem(list, valueToRemove) {
  const position = list.indexOf(valueToRemove);
  if (position !== -1) {
    list.splice(position, 1);
  }
}

console.log('=== Перевірка функції dropItem() ===\n');

console.log('Тест 1: Видалення числа з масиву');
const nums1 = [2, 4, 6, 8, 10, 12];
console.log('До:', nums1);
dropItem(nums1, 8);
console.log('Після dropItem(nums1, 8):', nums1);
console.log('Очікується: [2, 4, 6, 10, 12]\n');

console.log('Тест 2: Видалення рядка з масиву');
const cities = ['Kyiv', 'London', 'Tokyo', 'Lviv'];
console.log('До:', cities);
dropItem(cities, 'Tokyo');
console.log('Після dropItem(cities, "Tokyo"):', cities);
dropItem(cities, 'Berlin');
console.log('Після dropItem(cities, "Berlin"):', cities);
console.log('Очікується: ["Kyiv", "London", "Lviv"]\n');

console.log('Тест 3: Видалення першого елемента');
const frontTest = [100, 200, 300, 400];
console.log('До:', frontTest);
dropItem(frontTest, 100);
console.log('Після dropItem(frontTest, 100):', frontTest);
console.log('Очікується: [200, 300, 400]\n');

console.log('Тест 4: Видалення останнього елемента');
const letters = ['x', 'y', 'z', 'w'];
console.log('До:', letters);
dropItem(letters, 'w');
console.log('Після dropItem(letters, "w"):', letters);
console.log('Очікується: ["x", "y", "z"]\n');

console.log('Тест 5: Спроба видалити неіснуючий елемент');
const nums2 = [9, 8, 7];
console.log('До:', nums2);
dropItem(nums2, 999);
console.log('Після dropItem(nums2, 999):', nums2);
console.log('Очікується: [9, 8, 7] (без змін)\n');

console.log('Тест 6: Масив з дублікатами (видаляється тільки перший збіг)');
const nums3 = [42, 13, 42, 7, 42];
console.log('До:', nums3);
dropItem(nums3, 42);
console.log('Після dropItem(nums3, 42):', nums3);
console.log('Очікується: [13, 42, 7, 42]');
