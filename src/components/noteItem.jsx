import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ notes }) {
  return (
    <div className="note-div">

      <Link to={`/edit-notes/${notes.id}`} className="note-link">
        <div className="note">
          <p className="details">
            {
              notes.details.length > 140
              ? notes.details.trimStart().substr(0, 140) + "..."
              : notes.details.trimStart()
            }
          </p>
        </div>
      </Link>

      <h4 className="notes-page-title">
        {notes.title.length > 40
          ? notes.title.substr(0, 40) + "..."
          : notes.title}{" "}
      </h4>
      <p className="notes-page-date">{notes.date}</p>
    </div>
  );
}

export default NoteItem;
