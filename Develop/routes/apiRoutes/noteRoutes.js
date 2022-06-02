const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const uuid = require('../../helpers/uuid.js');

router.get('/notes', (req, res) => {
    res.json(notes)
});

outer.post('/notes', (req, res) => {

    const { title, text, id } = req.body;
    const newNote = {
        title,
        text,
        id: uuid()
    };

        const note = createNewNote(newNote, notes);

        res.json(note);
    });

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
        if (result) {
            res.json(result);
        } else {
            res.send(404);
        }
});