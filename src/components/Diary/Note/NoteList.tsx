import Paper from '@material-ui/core/Paper';

const NoteList = (props: any) =>
  props.notes.map((note, index) => {
    console.log(note);
    return (
      <div className="note-item" key={index}>
        <Paper elevation={3}>
          <h4>{note.date.toLocaleString()}</h4>
        <div>{note.note}</div>
        </Paper>
      </div>
    );
  });

export default NoteList;
