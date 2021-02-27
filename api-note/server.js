const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// create express app
const app = express();
app.use(cors());
// Setup server port
const port = process.env.PORT || 4000;

const Note = require('./app/models/note.model');

var number = 0;

var notes = [];

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())


app.get('/notes', (req, res) => {
  res.json({notes});
});


app.post('/note', (req, res) => {
    var incomingNote = new Note(req.body);
    notes.push(incomingNote);
    res.json(notes);
    //res.sendStatus(200);
});


app.put('/note',(req,res) => {
    var newNote = new Note(req.body);
    console.log(newNote);
    var item = notes.find(x => x.id === newNote.id);
    console.log(item);
    if(item){
        item.title = newNote.title;
        item.content = newNote.content;
    }
    //res.sendStatus(200);
    res.json(notes);
})

app.delete('/note',(req,res) => {
    console.log('delete');
    var deleteNote = new Note(req.body);
    console.log('deletenote',deleteNote);
    notes = notes.filter(note => {
        return note.id !== deleteNote.id;
    })
    res.json(notes);
    //res.sendStatus(200);
})

// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});