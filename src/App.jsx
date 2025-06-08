import { Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventPage />} />
      <Route path="/events/:eventId" element={<EventDetailsPage />} />
    </Routes>
  );
}

export default App;