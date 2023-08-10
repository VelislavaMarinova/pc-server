const dataController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const {
    getAll,
    create,
    getById,
    update,
    deleteById,
    getByUserId,
    getByCategorySortedByDate,
    getLatestByLimit
} = require('../services/itemService');
const { parseError } = require('../util/parser');


dataController.get('/', async (req, res) => {

    let items = [];
    if (req.query.where) {

        const where = req.query.where.split('=')[0]

        if (where === '_ownerId') {
            const userId = JSON.parse(req.query.where.split('=')[1]);
            items = await getByUserId(userId);
        } else if (where === 'category') {

            const category = JSON.parse(req.query.where.split('=')[1]);
            items = await getByCategorySortedByDate(category);
        }

    } else if (req.query.limit) {
        items = await getLatestByLimit(req.query.limit)
    } else {
        items = await getAll();
    }
    res.json(items);
});

dataController.post('/', hasUser(), async (req, res) => {

    try {
        const data = {
            ...req.body,
            _ownerId: req.user._id,
            author: req.user.username
        };
        const item = await create(data);
        res.json(item);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

dataController.get('/:id', async (req, res, next) => {
    const item = await getById(req.params.id);
    res.json(item);
});

dataController.put('/:id', hasUser(), async (req, res, next) => {
    const item = await getById(req.params.id);
    if (req.user._id != item._ownerId) {
        return res.status(403).json({ message: 'You cannot modify this record' });
    }

    try {
        const result = await update(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

dataController.delete('/:id', hasUser(), async (req, res) => {

    const item = await getById(req.params.id);
    if (req.user._id != item._ownerId) {
        return res.status(403).json({ message: 'You cannot modify this record' });
    }

    try {
        await deleteById(req.params.id);
        res.status(204).end();
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = dataController;