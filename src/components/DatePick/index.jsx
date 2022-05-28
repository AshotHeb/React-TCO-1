import DatePicker from "react-datepicker";

export const DatePick = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat={"yyyy-mm-dd"}
    />
  );
};
