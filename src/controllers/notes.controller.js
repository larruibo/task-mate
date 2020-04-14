const notesCtrl = {};

// Luis Ruiz: No se me había ocurrido sacar todo esto del archivo de rutas y ponerlo aparte. 
// Me parece que le da mucho orden al código. 


const mu = require("../db/MongoUtils");

notesCtrl.getNotes = (req, res) => {
    mu.getNotes().then((notes) => {
        res.json(notes);
    });
};

notesCtrl.createNote = async(req, res) => {
    const note = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        author: req.body.author,
    };
    mu.createNote(note).then(res.json({ message: "User Saved" }));
};

notesCtrl.getNote = (req, res) => {
    mu.getNote(req.params.id).then((note) => res.json(note));
};

notesCtrl.updateNote = async(req, res) => {
    const note = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        author: req.body.author,
    };
    mu.updateNote(req.params.id, note);
    res.json({ message: "Note Updated" });
};

notesCtrl.deleteNote = (req, res) => {
    mu.deleteNote(req.params.id);
    res.json({ message: "User Deleted" });
};

module.exports = notesCtrl;
