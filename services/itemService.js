const Item = require('../models/Item');


async function getAll() {
    return Item.find({});
}

async function getByUserId(userId) {
    return Item.find({ _ownerId: userId });
}

async function getByCategorySortedByDate(category){
    return Item.find({ category: category }).sort({ createdAt: -1 });
}
async function getLatestByLimit(limit){
    return Item.find({}).sort({ createdAt: -1 }).limit(limit);
}



async function getById(id) {
    return Item.findById(id);
}

async function create(item) {
    return Item.create(item);
}

async function update(id, item) {
    const existing = await Item.findById(id);

    existing.title = item.title;
    existing.category = item.category;
    existing.dificulty = item.dificulty;
    existing.prepare = item.prepare;
    existing.cook = item.cook;
    existing.serves = item.serves;
    existing.description = item.description;
    existing.ingredients = item.ingredients;
    existing.imageUrl = item.imageUrl;
    existing.method = item.method;

    
    return existing.save();
}

async function deleteById(id) {
    return Item.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    deleteById,
    getByCategorySortedByDate,
   getLatestByLimit
};