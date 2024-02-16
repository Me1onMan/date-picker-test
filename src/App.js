import logo from "./logo.svg";
import "./App.css";
import {
  calendar,
  // CalendarManager,
  DatePicker,
  withWeekends,
  withTodos,
  RangePicker,
  withHolidays,
} from "date-picker-library-shklyar";

calendar.addDecorator(withWeekends);
const Calendar2 = calendar.getCalendar();

calendar.addDecorator(withTodos);
calendar.addDecorator(withHolidays);
const Calendar = calendar.getCalendar();

const maxDate = new Date(2024, 1, 26);

function App() {
  return (
    <div className="App">
      <DatePicker CalendarView={Calendar} maxDate={maxDate} />
      <RangePicker CalendarView={Calendar2} />
    </div>
  );
}

export default App;
