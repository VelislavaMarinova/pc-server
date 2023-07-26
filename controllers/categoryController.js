const categoryController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, create} = require('../services/categoryService');
const { parseError } = require('../util/parser');


categoryController.get('/', async (req, res) => {
    let items = [];

        items = await getAll();
    
    res.json(items);
});

categoryController.post('/', hasUser(), async (req, res) => {

    try {
        const data = {...req.body};
        const item = await create(data);
        res.json(item);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});



module.exports = categoryController;