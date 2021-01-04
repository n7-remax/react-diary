import { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const Diary = () => {
  const [date, onDateChange] = useState(new Date());
  console.log(date);
  return (
    <div className="diary">
      <DateTimePicker
        value={date}
        onChange={onDateChange}
        isCalendarOpen={true}
        maxDetail="hour"
        locale="en-EN"
      />
    </div>
  );
};

export default Diary;
