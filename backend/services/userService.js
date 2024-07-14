const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'database',
  user: 'user',
  password: 'userpassword',
  database: 'mydatabase'
});

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

exports.createUser = (user) => {
  return new Promise((resolve, reject) => {
    const { name, email } = user;
    pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
      if (error) return reject(error);
      resolve({ id: results.insertId, name, email });
    });
  });
};
