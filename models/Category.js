const { Schema, model, Types: { ObjectId }, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+/i;
const categorySchema = new Schema({
    catName: {
        type: String,
     
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'ImageUrl is not valid',
        }
    }
   
});

const Category = model('Category', categorySchema);

module.exports = Category;