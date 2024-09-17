//mysql -u root -p
const bcrypt = require('bcrypt');

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '!mySQL@1',
    database: 'taskmanager',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

const connectDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL Connected...');
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1); // Exit process with failure
    }
};

const createNewUser = async (user) => {
    try {
        const connection = await pool.getConnection();
        console.log('Creating new user:', user.email);
        const [results, fields] = await connection.execute('INSERT INTO users (email, password_hash) VALUES (?, ?)', [user.email, user.password]);
        connection.release();
        return results.insertId;
    } catch (err) {
        throw err;
    }
}

const loginUser = async (user) => {
    try {
        console.log(user.email, user.password);
        const connection = await pool.getConnection();
        const [result] = await connection.execute('SELECT email, role, password_hash, created_at FROM users WHERE email = (?)', [user.email]);
        if (result) {
            console.log("result", result[0].password_hash);

            const match = await bcrypt.compare(user.password, result[0].password_hash);
            if (match) {
                result[0].password_hash = undefined;
                connection.release();
                return result[0];
            }
        }
        connection.release();
        return null;
    } catch (err) {
        console.log(err);
        throw err;
    }
}





module.exports = { connectDB, pool, createNewUser, loginUser };

/*
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,              -- Unique user identifier
  email VARCHAR(255) UNIQUE NOT NULL,             -- User's email (unique)
  password_hash VARCHAR(255) NOT NULL,            -- Hashed password for security
  role ENUM('user', 'admin') DEFAULT 'user',      -- User role
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Account creation time
); 
*/