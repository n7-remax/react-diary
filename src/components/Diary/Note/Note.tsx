import { useState } from "react";
import NoteList from "./NoteList";

const Note = (props: any) => {
  const [note, onNoteChange] = useState<string>("");
  const [noteList, onNoteListChange] = useState<Array<object>>([]);
  const addNote = () => {
    const currentNoteList = noteList;
    const currentNote = note;

    const newData = { note: currentNote as string, date: props.date as Date };

    onNoteListChange([...currentNoteList, newData]);
  };

  console.log(noteList);
  return (
    <div className="note">
      <h3>{props.date.toLocaleString()}</h3>
      <textarea
        value={note}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
          onNoteChange(e.target.value)
        }
      />
      <button onClick={addNote}>Save</button>

      {noteList.length !== 0 ? <NoteList notes={noteList} /> : null}
    </div>
  );
};

export default Note;
