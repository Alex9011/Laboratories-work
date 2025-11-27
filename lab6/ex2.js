const compose = (...fns) => {
  const errorHandlers = [];
  
  const composedFunction = (x) => {
    let result = x;
    
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (error) {
        errorHandlers.forEach(handler => handler(error));
        return undefined;
      }
    }
    
    return result;
  };
  
  composedFunction.on = (event, handler) => {
    if (event === 'error') {
      errorHandlers.push(handler);
    }
    return composedFunction;
  };
  
  return composedFunction;
};

console.log('=== Тестування функції compose() з обробкою помилок ===\n');

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log('Тест 1: Композиція справа наліво без помилок');
const f1 = compose(inc, twice, cube);
console.log('compose(inc, twice, cube)(5) =', f1(5));
console.log('Перевірка: 5^3 = 125, 125 * 2 = 250, 250 + 1 = 251\n');

console.log('Тест 2: Композиція з двома функціями');
const f2 = compose(twice, inc);
console.log('compose(twice, inc)(7) =', f2(7));
console.log('Перевірка: 7 + 1 = 8, 8 * 2 = 16\n');

console.log('Тест 3: Функція, яка кидає помилку');
const throwError = x => {
  throw new Error('Навмисна помилка');
};
const safe = x => x + 100;

const f3 = compose(safe, throwError, inc);

let errorCaught = false;
f3.on('error', (error) => {
  console.log('✓ Помилка спіймана через .on():', error.message);
  errorCaught = true;
});

const result3 = f3(10);
console.log('Результат при помилці:', result3);
console.log('Очікується: undefined\n');

console.log('Тест 4: Композиція з діленням на нуль');
const divideByZero = x => x / 0;
const addFive = x => x + 5;

const f4 = compose(addFive, divideByZero);
const result4 = f4(10);
console.log('compose(addFive, divideByZero)(10) =', result4);
console.log('Примітка: ділення на 0 дає Infinity, а не помилку\n');

console.log('Тест 5: Доступ до неіснуючої властивості');
const accessProperty = x => x.nonExistent.property;
const multiply = x => x * 3;

const f5 = compose(multiply, accessProperty);

let error5Caught = false;
f5.on('error', (error) => {
  console.log('✓ Помилка доступу до властивості спіймана:', error.message);
  error5Caught = true;
});

const result5 = f5({ value: 42 });
console.log('Результат:', result5);
console.log('Очікується: undefined\n');

console.log('Тест 6: Декілька обробників помилок');
const problematic = x => {
  if (x < 0) throw new Error('Від\'ємне число');
  return x * 2;
};

const f6 = compose(inc, problematic);

let errorCount = 0;
f6.on('error', (error) => {
  errorCount++;
  console.log(`Обробник 1: ${error.message}`);
});

f6.on('error', (error) => {
  errorCount++;
  console.log(`Обробник 2: ${error.message}`);
});

console.log('Виклик з від\'ємним числом:');
const result6 = f6(-5);
console.log('Результат:', result6);
console.log('Кількість викликів обробників:', errorCount);
console.log('Очікується: undefined, 2 виклики обробників\n');

console.log('Тест 7: Ланцюжок без помилок');
const double = x => x * 2;
const square = x => x * x;
const subtract10 = x => x - 10;

const f7 = compose(subtract10, square, double);
console.log('compose(subtract10, square, double)(3) =', f7(3));
console.log('Перевірка: 3 * 2 = 6, 6 * 6 = 36, 36 - 10 = 26\n');

console.log('Тест 8: Порожня композиція');
const f8 = compose();
console.log('compose()(42) =', f8(42));
console.log('Очікується: 42 (ідентична функція)\n');
