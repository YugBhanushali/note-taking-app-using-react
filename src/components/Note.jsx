import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      
      <button
        onClick={function () {
          props.deleteNote(props.id);
        }}
      >
      <IconButton aria-label="delete" size="large">
          <DeleteIcon />
      </IconButton>
      </button>
    </div>
  );
}

export default Note;
