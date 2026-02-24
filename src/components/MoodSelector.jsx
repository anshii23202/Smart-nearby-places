const moods = [
  { key: "work", label: "💻 Work" },
  { key: "date", label: "❤️ Date" },
  { key: "quickbite", label: "🍔 Quick Bite" },
  { key: "budget", label: "💸 Budget" }
];

function MoodSelector({ setMood }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select your mood</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {moods.map(m => (
          <button key={m.key} onClick={() => setMood(m.key)}>
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
