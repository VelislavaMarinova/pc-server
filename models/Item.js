const { Schema, model, Types: { ObjectId }, Types } = require('mongoose');


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
        required: [true, 'Image URL is required']
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
    // year: {
    //     type: Number,
    //     required: true, validate: {
    //         validator: value => value >= 1950 && value <= 2050,
    //         message: 'Year must be between 1950 and 2050'
    //     }
    // },
    // description: {
    //     type: String,
    //     required: true,
    //     minlength: [10, 'Description must be at least 10 characters long']
    // },
    // price: {
    //     type: Number,
    //     required: true,
    //     min: [0.01, 'Price must be a positive number']
    // },
    // img: {
    //     type: String,
    //     required: [true, 'Image URL is required']
    // },
    // material: {
    //     type: String,
    //     default: ''
    // },
    // _ownerId: {
    //     type: ObjectId,
    //     ref: 'User', required: true
    // }
});

const Item = model('Item', itemSchema);

module.exports = Item;