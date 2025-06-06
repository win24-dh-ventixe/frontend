import { Route, Routes } from "react-router-dom";
import EventCard from "./components/EventCard";
import EventPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";

const sampleEvent = {
  id: 1,
  name: "Festival Trappramlarn",
  category: "Musik",
  location: "Etern",
  date: "2025-07-11T15:00:00Z",
  price: 299,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventPage />} />
      <Route path="/event" element={<EventCard event={sampleEvent} />} />
      <Route path="/events/:eventId" element={<EventDetailsPage />} />
    </Routes>
  );
}

export default App;