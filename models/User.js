const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Username must be at least 3 charachters long!']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true,
    }


});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);
module.exports = User;