USE mydatabase;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'userpassword';
FLUSH PRIVILEGES;
