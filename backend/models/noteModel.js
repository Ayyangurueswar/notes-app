const moongose = require('mongoose');

const noteSchema = moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Text is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    }
}, {
    timestamps: true
})

module.exports = moongose.model('Note', noteSchema)