import React from 'react';
import Note from './Note.js';
import AddNote from './AddNote';

const NotesList = ({ notes }) => {
    return (
        <div className="notes-list">
            {notes.map((note)=> (
                <Note note={note} />
            ))}
            <AddNote />
        </div>
    )
}

export default NotesList;
