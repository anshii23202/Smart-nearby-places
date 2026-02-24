function PlaceCard({ place }) {
  return (
    <div
      style={{
        background: "white",
        padding: "12px",
        borderRadius: "10px",
        marginBottom: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
      }}
    >
      <h4 style={{ margin: "0 0 6px" }}>{place.name}</h4>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
        📏 {place.distance.toFixed(2)} km away
      </p>
    </div>
  );
}

export default PlaceCard;
