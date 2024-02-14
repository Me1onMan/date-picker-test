import logo from "./logo.svg";
import "./App.css";
import {
  CalendarManager,
  DatePicker,
  withWeekends,
  withTodos,
} from "date-picker-library-shklyar";

const calendar = new CalendarManager();
calendar.addDecorator(withWeekends);
calendar.addDecorator(withTodos);
const Calendar = calendar.getCalendar();

const maxDate = new Date(2024, 1, 26);

function App() {
  return (
    <div className="App">
      <DatePicker CalendarView={Calendar} maxDate={maxDate} />
    </div>
  );
}

export default App;
