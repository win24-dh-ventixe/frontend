import { Route, Routes } from "react-router-dom";
import EventCard from "./components/EventCard";

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
      <Route path="/" element={<EventCard event={sampleEvent} />} />
    </Routes>
  );
}

export default App;