import AppLayout from "../components/AppLayout";
import EventCard from "../components/EventCard";
import { API_BASE_EVENTS } from "../config/api";
import { useEffect, useState } from "react";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(API_BASE_EVENTS)
      .then((res) => {
        console.log("Statud:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Data collected:", data);
        setEvents(data);
      })
      .catch((err) => console.error("Could not fetch events", err));
  }, []);

  return (
    <AppLayout>
      <div className="event-layout">
        {events.map((event) => (
          <div className="event-slot" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default EventPage;
