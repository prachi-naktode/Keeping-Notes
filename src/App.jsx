import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useState, useEffect } from "react";

//import dummyNotes from './dummy';

const App = () => {
  
  // var notesArray = []
  // const list = localStorage.getItem('notes')
  // if (list !== null) {
  //   notesArray = JSON.parse(list);
  // }
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  //if state of note changes then save notes in local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])


  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-notes" element={<CreateNote setNotes={setNotes} />} />
          <Route path="/edit-notes/:id" element={<EditNote notes={notes} setNotes={setNotes } />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
