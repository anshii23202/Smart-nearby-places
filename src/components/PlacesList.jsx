import PlaceCard from "./PlaceCard";

function PlacesList({ places, filters }) {
  const sorted = [...places].sort((a, b) => a.distance - b.distance);

  return (
    <div
      style={{
        width: "350px",
        maxHeight: "400px",
        overflowY: "auto",
        paddingRight: "6px"
      }}
    >
      <h3>Nearby places</h3>

      {sorted.length === 0 && (
        <p style={{ color: "#777" }}>No places found</p>
      )}

      {sorted.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default PlacesList;
