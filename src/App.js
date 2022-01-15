import NotesList from "./components/NotesList";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState([
    {
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		}
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleAddNote = (text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
        <Search searchText={searchText} setSearchText={setSearchText} />
        <NotesList notes={notes.filter((note) => (note.text.toLowerCase()).includes(searchText.toLowerCase()))} handleAddNote={handleAddNote} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
