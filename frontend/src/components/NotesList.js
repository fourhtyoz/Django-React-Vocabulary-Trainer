import React from "react";
import axios from 'axios'
import Note from "./Note";

export default function NoteList() {
    const [notes, setNotes] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/notes/')
             .then(res => setNotes(res.data))
    }, [notes])

    function addNote() {
        let data = {title: 'test', text: 'test', completed: false}
        axios.post('/api/notes/', data)
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }

    function deleteNote(id) {
        axios.delete(`/api/notes/${id}/`)
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }

    function updateNote(id) {
        let data = {title: `updated `, text: `new Note`, completed: false}
        axios.put(`/api/notes/${id}/`, data)
             .catch(err => console.log(err))
    }

    return (
        <div className="list">
            {notes.map(note => <Note update={updateNote} delete={deleteNote} id={note.id} key={note.id} title={note.title} text={note.text} completed={note.completed} />)}
            <button onClick={addNote}>Add a new note</button>
        </div>
        
    )

}