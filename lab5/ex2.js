function createBuffer() {
  const storage = [];

  const access = (idx) => {
    return storage[idx];
  };

  access.append = (element) => {
    storage.push(element);
  };

  access.removeLast = () => {
    return storage.pop();
  };

  return access;
}

console.log('=== Перевірка роботи createBuffer() ===\n');

const collection = createBuffer();

collection.append('item_one');
collection.append('item_two');
collection.append('item_three');

console.log('Після додавання трьох значень:');
console.log('collection(0) =', collection(0));
console.log('collection(1) =', collection(1));
console.log('collection(2) =', collection(2));

console.log('\nВидалення значень:');
console.log('collection.removeLast() =', collection.removeLast());
console.log('collection.removeLast() =', collection.removeLast());
console.log('collection.removeLast() =', collection.removeLast());

console.log('\nСпроба видалити з порожнього буфера:');
console.log('collection.removeLast() =', collection.removeLast());

console.log('\n=== Додатковий приклад ===\n');

const numBuffer = createBuffer();

numBuffer.append(11);
numBuffer.append(22);
numBuffer.append(33);
numBuffer.append(44);

console.log('Після додавання чисел:');
console.log('numBuffer(0) =', numBuffer(0));
console.log('numBuffer(1) =', numBuffer(1));
console.log('numBuffer(2) =', numBuffer(2));
console.log('numBuffer(3) =', numBuffer(3));

console.log('\nВидалення двох значень:');
console.log('numBuffer.removeLast() =', numBuffer.removeLast());
console.log('numBuffer.removeLast() =', numBuffer.removeLast());

console.log('\nЗначення, що залишилися:');
console.log('numBuffer(0) =', numBuffer(0));
console.log('numBuffer(1) =', numBuffer(1));
console.log('numBuffer(2) =', numBuffer(2));
