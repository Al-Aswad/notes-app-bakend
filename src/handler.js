const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'Success',
            message: 'Note added successfully',
            data: {
                noteID: id,
            },
        });
        response.code(201);
        response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
        return response;
    }

    const response = h.response({
        status: 'Fail',
        message: 'Note not added',
    });

    response.code(500);
    response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
    return response;
};

const getAllNotesHandler = () => ({
    status: 'Success',
    message: 'All notes fetched successfully',
    data: notes,
});

module.exports = { addNoteHandler, getAllNotesHandler };
