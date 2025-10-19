const makeToken = (size, pool) => {
  let token = '';
  for (let i = 0; i < size; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    token += pool[idx];
  }
  return token;
};

const pool = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('token(12):', makeToken(12, pool));
console.log('token(24):', makeToken(24, pool));
console.log('token(8,"ABC123"):', makeToken(8, 'ABC123'));

module.exports = { makeToken };
