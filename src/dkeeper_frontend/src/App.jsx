// import React from 'react';
// import  Header  from "./components/Header";
// function App() {
  //   return (
    //     <div className="App">
    //       <Header></Header>
    //        <Router>
    //         <Routes>
    //           <Route path="/" element={<Header/>}/>
    //         </Routes>
    //       </Router>
    //     </div>
    //   );
    // }
    
    // export default App;
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import ReactDOM from 'react-dom';
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
