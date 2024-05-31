import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import CreateDate from "../components/CreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();

  //find those note whose id is same as the editPage note id
  const note = notes.find((item) => item.id === id);
  //set title
  const [title, setTitle] = useState(note.title);
  //set details
  const [details, setDetails] = useState(note.details);
  const date = CreateDate();
  const navigate = useNavigate();

  const handleSaveForm = (e) => {
    e.preventDefault();

    if (title) {
      const newNote = { ...note, title, details, date };
      //update this edited note in notes
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }
    //redirect to home page when save button is clicked
    navigate('/');
  };

  const handleDelete = (e) => {
    
    if (window.confirm('Are you sure to delete this note')) {
      //only keep the notes whose id is not equal to the node want to be deleted 
      const newNotes = notes.filter(item => item.id !== id);
      setNotes(newNotes);
      navigate('/');
    }
  }

  return (
    <section>
      <header className="create-edit-note-header">
        <Link to="/" className="btn back-arrow">
          <IoMdArrowRoundBack />
        </Link>

        <div className="edit-page-btns">
          <button className="btn btn-save"
            onClick={handleSaveForm}>
            Save
          </button>

          <button className="btn btn-delete"
            onClick={handleDelete}>
            Delete
          </button>
        </div>

      </header>

      <form className="create-edit-note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
        />
        <p>{date}</p>
        <textarea
          name="textarea"
          id="detail"
          rows="30"
          placeholder="Write details..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
