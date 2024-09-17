const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;






app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    db.connectDB();
    res.send('/');
});

app.post('/api/signup/', async (req, res) => {
    const user = req.body;
    const password_hash = await bcrypt.hash(user.password, saltRounds);

    await db.createNewUser(user).then((id) => {
        if (id >= 0) {
            return res.status(200).send('User created');
        }
    }).catch((err) => {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).send('Email is already registered');
        }
        return res.status(500).send('Error creating user');
    });

});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});