import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Note = () => {
    return (
        <div className="note">
            <span>Hello! This is a note</span>
            <div className="note-footer">
                <small>13, January, 2015</small>
                <FaTrashAlt />
            </div>
        </div>
    )
}

export default Note;
