import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Note = ({ note, deleteNote }) => {
    return (
        <div className="note">
            <span>{ note.text }</span>
            <div className="note-footer">
                <small>{ note.date }</small>
                <FaTrashAlt
                onClick={() => {
                    deleteNote(note.id)
                }}
                />
            </div>
        </div>
    )
}

export default Note;
