const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const categoryController = require('./controllers/categoryController')
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');


const connectionString = 'mongodb://localhost:27017/pc-db';

start();

async function start() {
    await mongoose.connect(connectionString);
    // console.log('Database connected');

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(trimBody());
    app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/users', authController);
    app.use('/data/recipes', dataController);
    app.use('/data/categories', categoryController);

    app.listen(3000, () => console.log('PC server is listening on port 3000...'));
}