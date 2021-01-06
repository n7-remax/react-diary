import { useState } from "react";
import NoteList from "./NoteList";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

const Note = (props: any) => {
  const [note, onNoteChange] = useState<string>("");
  const [noteList, onNoteListChange] = useState<Array<object>>([]);
  const addNote = () => {
    const currentNoteList = noteList;
    const currentNote = note;

    const newData = { note: currentNote as string, date: props.date as Date };

    onNoteListChange([...currentNoteList, newData]);
    onNoteChange("");
  };
  const onTextAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNoteChange(event.target.value);
  };
  const OnNoteClear = () => {
    onNoteChange("");
  };

  console.log(noteList);
  return (
    <div className="note">
      <h3>{props.date.toLocaleString()}</h3>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Make an entry"
          multiline
          rows={4}
          variant="outlined"
          fullWidth={true}
          value={note}
          onChange={onTextAreaChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={addNote}
          disabled={note ? false : true}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={OnNoteClear}
        >
          Clear
        </Button>
      </div>

      {noteList.length !== 0 ? <NoteList notes={noteList} /> : null}
    </div>
  );
};

export default Note;
