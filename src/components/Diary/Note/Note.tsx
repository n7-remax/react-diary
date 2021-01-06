import { useState } from "react";
import NoteList from "./NoteList";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const Note = (props: any) => {
  const [note, onNoteChange] = useState<string>("");
  const [noteList, onNoteListChange] = useState<Array<object>>([]);
  const addNote = () => {
    const currentNoteList = noteList;
    const currentNote = note;

    const newData = { note: currentNote as string, date: props.date as Date };

    onNoteListChange([...currentNoteList, newData]);
    onNoteChange("")
  };
  const onTextAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNoteChange(event.target.value);
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
      {/* <textarea
        value={note}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
          onNoteChange(e.target.value)
        }
      /> */}
      <button onClick={addNote}>Save</button>

      {noteList.length !== 0 ? <NoteList notes={noteList} /> : null}
    </div>
  );
};

export default Note;
