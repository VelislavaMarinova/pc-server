const { Schema, model, Types: { ObjectId }, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+/i;
const categorySchema = new Schema({
    catName: {
        type: String,
        // enum: {
        //     values: ['drinks', 'main-dishes', 'healthy-recipes','quick-recipes','salads','desserts'],
        //     // message: 'Invalid category name!',
        //     // required: [true, 'category name is required!']
        // }
    },
    catTitle: {
        type: String,
        // values: ['Drinks and coctails', 'Main Dishes', 'Healthy-recipes','Quick-recipes','Salads','Desserts'],
        //     // message: 'Invalid category name!',
        //     // required: [true, 'category name is required!']
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