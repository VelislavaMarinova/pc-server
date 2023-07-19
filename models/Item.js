const { Schema, model, Types: { ObjectId }, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+/i;
const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    dificulty: {
        type: String,
        enum: {
            values: ['easy', 'medium', 'hard'],
            message: 'Invalid dificulty!',
            required: [true, 'Dificulty is required!']
        }
    },
    prepare: {
        type: String,
        required: [true, 'Prepare is required!']
    },
    cook: {
        type: String,
        required: [true, 'Cook is required!']
    },
    serves: {
        type: String,
        required: [true, 'Serves are required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    ingredients: [
        { type: String }
    ],
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'ImageUrl is not valid',
        }
    },
    method: [
        { type: String }
    ],
    author: {
        type: String,
        ref: 'User',
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    }
   
});

const Item = model('Item', itemSchema);

module.exports = Item;