function contract(fn, ...types) {
  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];
  
  return function(...args) {
    for (let i = 0; i < argTypes.length; i++) {
      const expectedType = argTypes[i];
      const actualType = args[i].constructor;
      
      if (actualType !== expectedType) {
        throw new TypeError(
          `Argument ${i} must be of type ${expectedType.name}, but got ${actualType.name}`
        );
      }
    }
    
    const result = fn(...args);
    
    if (result.constructor !== returnType) {
      throw new TypeError(
        `Return value must be of type ${returnType.name}, but got ${result.constructor.name}`
      );
    }
    
    return result;
  };
}

console.log('=== Тестування функції contract() ===\n');

console.log('Тест 1: Контракт для додавання чисел');
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
try {
  const res1 = addNumbers(2, 3);
  console.log('addNumbers(2, 3) =', res1);
  console.log('Очікується: 5\n');
} catch (error) {
  console.log('Помилка:', error.message);
}

console.log('Тест 2: Контракт для конкатенації рядків');
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
try {
  const res2 = concatStrings('Hello ', 'world!');
  console.log('concatStrings("Hello ", "world!") =', res2);
  console.log('Очікується: "Hello world!"\n');
} catch (error) {
  console.log('Помилка:', error.message);
}

console.log('Тест 3: Помилка - невірний тип аргументу');
try {
  const res3 = addNumbers('2', 3);
  console.log('Результат:', res3);
} catch (error) {
  console.log('✓ Помилка успішно впіймана:', error.message);
}

console.log('\nТест 4: Помилка - невірний тип другого аргументу');
try {
  const res4 = addNumbers(2, '3');
  console.log('Результат:', res4);
} catch (error) {
  console.log('✓ Помилка успішно впіймана:', error.message);
}

console.log('\nТест 5: Помилка - невірний тип значення, що повертається');
const wrongReturn = (a, b) => String(a + b);
const wrongContract = contract(wrongReturn, Number, Number, Number);
try {
  const res5 = wrongContract(2, 3);
  console.log('Результат:', res5);
} catch (error) {
  console.log('✓ Помилка успішно впіймана:', error.message);
}

console.log('\nТест 6: Контракт з трьома аргументами');
const sum3 = (a, b, c) => a + b + c;
const sum3Numbers = contract(sum3, Number, Number, Number, Number);
try {
  const res6 = sum3Numbers(1, 2, 3);
  console.log('sum3Numbers(1, 2, 3) =', res6);
  console.log('Очікується: 6\n');
} catch (error) {
  console.log('Помилка:', error.message);
}

console.log('Тест 7: Контракт для множення');
const multiply = (a, b) => a * b;
const multiplyNumbers = contract(multiply, Number, Number, Number);
try {
  const res7 = multiplyNumbers(5, 7);
  console.log('multiplyNumbers(5, 7) =', res7);
  console.log('Очікується: 35\n');
} catch (error) {
  console.log('Помилка:', error.message);
}

console.log('Тест 8: Контракт для Boolean');
const isPositive = (n) => n > 0;
const checkPositive = contract(isPositive, Number, Boolean);
try {
  const res8a = checkPositive(5);
  const res8b = checkPositive(-3);
  console.log('checkPositive(5) =', res8a);
  console.log('checkPositive(-3) =', res8b);
  console.log('Очікується: true, false\n');
} catch (error) {
  console.log('Помилка:', error.message);
}

console.log('Тест 9: Контракт з помилкою типу в рядках');
try {
  const res9 = concatStrings('Hello', 123);
  console.log('Результат:', res9);
} catch (error) {
  console.log('✓ Помилка успішно впіймана:', error.message);
}

console.log('\nТест 10: Складний приклад - робота з масивами');
const joinArray = (arr, separator) => arr.join(separator);
const joinWithContract = contract(joinArray, Array, String, String);
try {
  const res10 = joinWithContract(['a', 'b', 'c'], ', ');
  console.log('joinWithContract(["a", "b", "c"], ", ") =', res10);
  console.log('Очікується: "a, b, c"');
} catch (error) {
  console.log('Помилка:', error.message);
}

