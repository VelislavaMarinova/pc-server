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
        // const data = Object.assign({ _ownerId: req.user._id}, req.body);
        const data = {...req.body};
        const item = await create(data);
        res.json(item);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

// categoryController.get('/:id', async (req, res, next) => {
//     const item = await getById(req.params.id);
//     res.json(item);
// });

// categoryController.put('/:id', hasUser(), async (req, res, next) => {
//     const item = await getById(req.params.id);
//     if (req.user._id != item._ownerId) {
//         return res.status(403).json({ message: 'You cannot modify this record' });
//     }

//     try {
//         const result = await update(req.params.id, req.body);
//         res.json(result);
//     } catch (err) {
//         const message = parseError(err);
//         res.status(400).json({ message });
//     }
// });

// categoryController.delete('/:id', hasUser(), async (req, res) => {
//     const item = await getById(req.params.id);
//     if (req.user._id != item._ownerId) {
//         return res.status(403).json({ message: 'You cannot modify this record' });
//     }

//     try {
//         await deleteById(req.params.id);
//         res.status(204).end();
//     } catch (err) {
//         const message = parseError(err);
//         res.status(400).json({ message });
//     }
// });

module.exports = categoryController;