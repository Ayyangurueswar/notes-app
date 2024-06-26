const asyncHandler = require('express-async-handler');
const Note = require('../models/noteModel');

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({});
    res.json(notes);
    res.status(200).send();
})

const setNote = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Text is required')
    }
    const note = await Note.create(req.body);
    res.status(200).json(note);
})

const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note){
        res.status(404)
        throw new Error('Note not found')
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedNote);
})

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note){
        res.status(404)
        throw new Error('Note not found')
    }
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedNote);
})

module.exports = {
    getNotes, setNote, updateNote, deleteNote
}