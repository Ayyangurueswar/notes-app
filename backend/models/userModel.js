const moongose = require('mongoose');

const userSchema = moongose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true
    },
}, {
    timestamps: true
})

module.exports = moongose.model('User', userSchema);