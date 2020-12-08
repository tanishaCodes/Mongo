const router = require('express').Router();
const NoteController = require('../../controllers');


router
    .route('/')
    .get(NoteController.Note.findAll)
    .post(NoteController.Note.create);

router
    .route('/:id')
    .get(NoteController.Note.findById)
    .put(NoteController.Note.update)
    .delete(NoteController.Note.remove);

module.exports = router;