import React from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';







function CreateArea(props) {

  var [n,changer]=React.useState(false);

  function forAnimation(){
    changer(true);
  }

  return (
    <div>
      <form onSubmit={props.addNote}>
        <input 
          style={n ? null :{display:"none"}}
          name="title" 
          placeholder="Title"
         />
        <textarea onClick={forAnimation} name="content" placeholder="Take a note..." rows={n ? 3 : 1} />
        <div style={n ? null :{display:"none"}}>
          <Zoom in={n ? "true" : null }>
            <button  type="submit">
                <AddIcon/>
            </button>
          </Zoom>
        </div>
          
      </form>
    </div>
  );
}

export default CreateArea;
