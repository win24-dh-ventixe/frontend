import { Route, Routes } from "react-router-dom";
import EventCard from "./components/EventCard";
import AppLayout from "./pages/AppLayout";
import EventPage from "./pages/EventsPage";

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
      <Route path="/event" element={<EventCard event={sampleEvent} />} />
      <Route path="/" element={<EventPage />} />
    </Routes>
  );
}

export default App;