import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Note from "./Note/Note";

const Diary = () => {
  const [date, onDateChange] = useState(new Date());
  console.log(date);
  return (
    <div className="diary">
      <DateTimePicker
        value={date}
        onChange={onDateChange}
        isCalendarOpen={false}
        maxDetail="hour"
        locale="en-EN"
      />
      <Note date={date}/>
    </div>
  );
};

export default Diary;
