const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const uuid = require('../../helpers/uuid.js');

router.get('/notes', (req, res) => {
    res.json(notes)
});