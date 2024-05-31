import { IoSearchSharp } from "react-icons/io5";
import NoteItem from "../components/noteItem";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

function Notes({ notes }) {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const toggleSearchBar = () => {
        setShowSearch(prevState => !prevState);
    }

    const SettingSearchText = (e) => {
        setText(e.target.value);
    }

    const handleSearch = (e) => {
        setFilteredNotes(notes.filter((note) => {
            if (note.title.toLowerCase().match(text.toLowerCase())){
                return note;
            }
        }))
    }

    //
    useEffect(handleSearch, [text]);

    return (
        <section>
            <header className="notes-header">
                {!showSearch && <h2>My Notes</h2>}
                {showSearch &&
                    <input type="text"
                    placeholder="Search the note by title"
                    onChange={(e) => {
                        SettingSearchText(e);
                        handleSearch(e);
                      }}
                    autoFocus />}
                <button className="btn btn-search"
                    onClick={toggleSearchBar}>
                    {showSearch ? <AiOutlineClose /> : <IoSearchSharp />}
                </button>
            </header>
            <div className="notes-container">
                {filteredNotes.length === 0 && 
                    <p className="empty-notes">No notes found</p>
                }
                { 
                    // filteredNotes.map(note => <NoteItem key={note.id} notes={note/>)
                    filteredNotes.map((note) => {
                        //console.log(note);
                        return <NoteItem key={note.id} notes={note} />;
                    })
                }
            </div>
            <Link to="/create-notes" className="btn plusBtn">
                <IoIosCreate />
            </Link>
        </section>
    );
}

export default Notes;
