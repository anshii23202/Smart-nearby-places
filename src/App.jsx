import { useEffect, useState } from "react";
import MoodSelector from "./components/MoodSelector";
import Filters from "./components/Filters";
import PlacesList from "./components/PlacesList";
import MapView from "./components/MapView";
import { fetchPlacesByMood } from "./services/placesService";
import { calculateDistance } from "./utils/distance";

function App() {
  const [location, setLocation] = useState(null);
  const [mood, setMood] = useState("");
  const [places, setPlaces] = useState([]);
  const [filters, setFilters] = useState({
    sortBy: "distance"
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });
  }, []);

  useEffect(() => {
    if (!location || !mood) return;

    async function load() {
      const results = await fetchPlacesByMood(location, mood);

      const enriched = results.map(p => ({
        ...p,
        distance: calculateDistance(
          location.lat,
          location.lng,
          p.lat,
          p.lng
        )
      }));

      setPlaces(enriched);
    }

    load();
  }, [mood, location]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📍 Smart Nearby Places Recommender</h1>

      <MoodSelector setMood={setMood} />
      <Filters filters={filters} setFilters={setFilters} />

      <div style={{ display: "flex", gap: "20px" }}>
        <PlacesList places={places} filters={filters} />
        <MapView location={location} places={places} />
      </div>
    </div>
  );
}

export default App;
