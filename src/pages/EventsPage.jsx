import AppLayout from "./AppLayout";
import EventCard from "../components/EventCard";

const dummyEvents = [
  { id: 1, name: "Trappramlarn Fest", location: "Etern", price: 299, date: "2025-07-11T17:00", category: "Musik" },
  { id: 2, name: "Grill med Trapp", location: "Trappträsk", price: 99, date: "2025-08-01T18:00", category: "Outdoor" },
  { id: 3, name: "Trappmässa", location: "Trappköping", price: 149, date: "2025-09-10T14:00", category: "Expo" },
];

const EventPage = () => {
  return (
    <AppLayout>
      {dummyEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </AppLayout>
  );
};

export default EventPage;