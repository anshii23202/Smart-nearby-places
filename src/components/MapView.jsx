import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView({ location, places }) {
  if (!location) return null;

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={14}
      style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map(place => (
        <Marker key={place.id} position={[place.lat, place.lng]}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
