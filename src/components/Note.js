import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Note = ({ note }) => {
    return (
        <div className="note">
            <span>{ note.text }</span>
            <div className="note-footer">
                <small>{ note.date }</small>
                <FaTrashAlt />
            </div>
        </div>
    )
}

export default Note;
