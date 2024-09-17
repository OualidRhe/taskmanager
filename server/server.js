const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db/db');

app.use(cors());

app.get('/', (req, res) => {
    db.connectDB();
    res.send('/');
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});