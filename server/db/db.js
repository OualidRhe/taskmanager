//mysql -u root -p
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


module.exports = { connectDB, pool };