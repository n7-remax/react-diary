import { useState } from "react";
import NoteList from "./NoteList";
import DateTimePicker from "react-datetime-picker";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

const Note = () => {
  const [note, setNote] = useState<string>("");
  const [noteList, setNoteList] = useState<object[]>([]);
  const [filteredList, setFilteredList] = useState<object[]>([]);
  const [date, setDate] = useState(new Date("2021-01-01T00:00"));
  const [dateFrom, setDateFrom] = useState(new Date("2021-01-01T00:00"));
  const [dateTo, setDateTo] = useState(new Date("2021-02-01T00:00"));

  const addNote = () => {
    const currentNoteList = noteList;
    const currentNote = note;

    const newData = { note: currentNote as string, date: date as Date };

    setNoteList([...currentNoteList, newData]);
    onDatePickerChange([...currentNoteList, newData]);
    setNote("");
  };
  const onTextAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const OnNoteClear = () => {
    setNote("");
  };

  // Filtering notelist in range
  const onDatePickerChange = (
    notes = noteList,
    from = dateFrom,
    to = dateTo
  ) => {
    const result = notes.filter((item: any) => {
      return (
        item.date.getTime() >= from.getTime() &&
        item.date.getTime() <= to.getTime()
      );
    });
    console.log("result: ", result);
    setFilteredList(result);
    console.log("filtered list: ", result);
  };

  // Update datepicker range when it changes
  const onDateFromChange = (value) => {
    const parsedDate = new Date(value);
    if (parsedDate! <= dateTo) {
      console.log("dateFrom changed");
      setDateFrom(parsedDate);
      onDatePickerChange(undefined, parsedDate);
    }
  };

  // Update datepicker range when it changes
  const onDateToChange = (value) => {
    const parsedDate = new Date(value);
    if (parsedDate! >= dateFrom) {
      console.log("dateTo changed");
      setDateTo(parsedDate);
      onDatePickerChange(undefined, undefined, parsedDate);
    }
  };
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
            disabled={note ? false : true}
          >
            Clear
          </Button>
        </div>
        <div className="datepicker">
          <DateTimePicker
            value={date}
            onChange={setDate}
            isCalendarOpen={false}
            maxDetail="hour"
            locale="en-EN"
          />
        </div>
      </div>

      <div className="notes-list">
        <h2>Notes</h2>
        <div className="datetime-picker">
          <TextField
            id="datetime-local-from"
            label="From"
            type="datetime-local"
            value={moment(dateFrom).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => onDateFromChange(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local-to"
            label="To"
            type="datetime-local"
            value={moment(dateTo).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => onDateToChange(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        {/* @ts-ignore */}
        {filteredList.length !== 0 ? <NoteList notes={filteredList} /> : null}
      </div>
    </div>
  );
};

export default Note;
