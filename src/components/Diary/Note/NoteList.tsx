const NoteList = (props: any) =>
  props.notes.map((note, index) => {
    console.log(note);
    return (
      <div className="note-item" key={index}>
          <h4>{note.date.toLocaleString()}</h4>
        <div>{note.note}</div>
      </div>
    );
  });

export default NoteList;
