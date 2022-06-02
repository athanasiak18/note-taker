const { notes } = require('../../db/db.json');
const fs = require('fs');
const path = require('path')
const { findById, createNewNote } = require('../../lib/notes');
const uuid = require('../../helpers/uuid.js');
const router = require('express').Router();

router
.route('/notes')
.get((req, res) => {
    res.json(notes);
});

router
.post('/notes', (req, res) => {

    const { title, text, id } = req.body;

    const newNote = {
        title,
        text,
        id: uuid()
    };
    
    const note = createNewNote(newNote, notes);

    res.json(note);
});

router
.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
        if (result) {
            res.json(result);
        }

        
});

module.exports = router;