import React from 'react';
import Note from './Note.js';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note)=> (
                <Note note={note} key={note.id}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList;
