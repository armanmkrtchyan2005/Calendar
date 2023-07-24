import "../scss/styles.scss";
import { Calendar } from "fullcalendar";

var calendarEl = document.getElementById("calendar");
const json = document.getElementById("json");
console.log(json);

const eventsData = JSON.parse(json.textContent);

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

const calendar = new Calendar(calendarEl, {
  initialView: "timeGridWeek",
  headerToolbar: {
    start: "prev,next,today",

    center: "title",
    end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  },
  buttonText: {
    month: "Month",
    week: "Week",
    day: "Day",
    list: "List",
    today: "Today",
  },

  validRange: {
    start: new Date(y, m - 1), // Replace with your desired start date
    end: new Date(y, m + 2), // Replace with your desired end date
  },

  events: eventsData,
});

const events = calendar.getEvents();

events.forEach((event) => {
  if (event.start < date) {
    event.setProp("backgroundColor", "rgba(0, 0, 255, 0.2)");
  }
});

calendar.render();
