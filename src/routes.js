const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
];

module.exports = routes;
