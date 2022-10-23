import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import noteService from "./services/notes";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState();
  useEffect(() => {
    noteService.getAll().then((data) => {
      console.log("data ->", data);
      setNotes(data);
    });
  });
  return (
    <div className="App">
      React App
      {notes && <Notes notes={notes} />}
    </div>
  );
}

export default App;
