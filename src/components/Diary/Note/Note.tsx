import { useState } from "react";
import NoteList from "./NoteList";
import DateTimePicker from "react-datetime-picker";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Note = () => {
  const [note, onNoteChange] = useState<string>("");
  const [noteList, onNoteListChange] = useState<Array<object>>([]);
  const [date, onDateChange] = useState(new Date("2021-01-01T00:00:00"));
  const addNote = () => {
    const currentNoteList = noteList;
    const currentNote = note;

    const newData = { note: currentNote as string, date: date as Date };

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
      <div className="text-field">
        <TextField
          id="outlined-multiline-static"
          label="Make an entry"
          multiline
          rows={4}
          variant="filled"
          fullWidth={true}
          value={note}
          onChange={onTextAreaChange}
        />
      </div>
      <div className="text-area-controls">
        <div className="buttons">
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
        <div className="datepicker">
          <DateTimePicker
            value={date}
            onChange={onDateChange}
            isCalendarOpen={false}
            maxDetail="hour"
            locale="en-EN"
          />
        </div>
      </div>
      <div className="notes-list">
        {noteList.length !== 0 ? <NoteList notes={noteList} /> : null}
      </div>
    </div>
  );
};

export default Note;
