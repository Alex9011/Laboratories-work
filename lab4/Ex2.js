function max(matrix) {
  if (!matrix || matrix.length === 0) {
    return undefined;
  }
  
  let maxValue = -Infinity;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  
  return maxValue;
}

function maxForOf(matrix) {
  if (!matrix || matrix.length === 0) {
    return undefined;
  }
  
  let maxValue = -Infinity;
  
  for (const row of matrix) {
    for (const value of row) {
      if (value > maxValue) {
        maxValue = value;
      }
    }
  }
  
  return maxValue;
}

function maxReduce(matrix) {
  if (!matrix || matrix.length === 0) {
    return undefined;
  }
  
  return matrix.reduce((max, row) => {
    const rowMax = row.reduce((a, b) => Math.max(a, b), -Infinity);
    return Math.max(max, rowMax);
  }, -Infinity);
}

function maxFlat(matrix) {
  if (!matrix || matrix.length === 0) {
    return undefined;
  }
  
  return Math.max(...matrix.flat());
}

console.log('= Тестування функцій пошуку максимуму в двовимірному масиві =\n');

const testMatrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const testMatrix2 = [[10, 5, 3], [2, 15, 1], [8, 4, 12]];
const testMatrix3 = [[-5, -2, -8], [-1, -10, -3]];
const testMatrix4 = [[100]];

console.log('1. Класичний варіант (for):');
console.log('max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) =', max(testMatrix1));
console.log('max([[10, 5, 3], [2, 15, 1], [8, 4, 12]]) =', max(testMatrix2));
console.log('max([[-5, -2, -8], [-1, -10, -3]]) =', max(testMatrix3));
console.log('max([[100]]) =', max(testMatrix4));

console.log('\n2. Варіант з for..of:');
console.log('maxForOf([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) =', maxForOf(testMatrix1));

console.log('\n3. Варіант з reduce:');
console.log('maxReduce([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) =', maxReduce(testMatrix1));

console.log('\n4. Варіант з flat():');
console.log('maxFlat([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) =', maxFlat(testMatrix1));

console.log('\n= Основний тест із завдання =');
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);