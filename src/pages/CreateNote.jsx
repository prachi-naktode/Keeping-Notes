import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link , useNavigate} from "react-router-dom";
import { v4 as uuid } from 'uuid';
import CreateDate from "../components/CreateDate";

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = CreateDate();
  const navigate = useNavigate();

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const updateDetails = (e) => {
    setDetails(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    //form validation
    if (title) {
      //Create an obj to store the notes
      const note = { id: uuid(), title, details, date };  
      //add this note to nodes array using setNodes
      setNotes(prevNotes => [note, ...prevNotes]);
      //console.log(note);
      //After saving redirect to home page
      navigate('/');
    }
  };



  return (
    <section>
      <header className="create-edit-note-header">
        <Link to="/" className="btn back-arrow">
          <IoMdArrowRoundBack />
        </Link>
        <button className="btn btn-save" onClick={handleSubmit}>
          Save
        </button>
      </header>

      <form className="create-edit-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={updateTitle}
          autoFocus
        />
        <p>{date}</p>
        <textarea
          name="textarea"
          rows="30"
          placeholder="Write details..."
          value={details}
          onChange={updateDetails}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
