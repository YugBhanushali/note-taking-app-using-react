import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [eachNote, renderingNotes] = React.useState([
    {
      titleOfNote: "First Note Title",
      contentOfNote: "First Note Content"
    }
  ]);

  function addNote(event) {
    const Title = event.target[0].value;
    const Content = event.target[1].value;
    event.preventDefault();
    renderingNotes(function (prev) {
      return [
        ...prev,
        {
          titleOfNote: Title,
          contentOfNote: Content
        }
      ];
    });
    // console.log(eachNote);
    event.target[0].value = "";
    event.target[1].value = "";
  }

  function deletingNote(id) {
    // console.log(id);
    eachNote.splice(id, 1);
    renderingNotes(function (prev) {
      return [...prev];
    });
    // console.log(eachNote);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {eachNote.map(function (each, index) {
        return (
          <Note
            key={index}
            id={index}
            title={each.titleOfNote}
            content={each.contentOfNote}
            deleteNote={deletingNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
