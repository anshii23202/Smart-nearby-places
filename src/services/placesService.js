import { moodMapping } from "../utils/moodMapping";

export async function fetchPlacesByMood(location, mood) {
  const tags = moodMapping[mood];

  let allPlaces = [];

  for (let tag of tags) {
    const query = `
      [out:json];
      (
        node["amenity"="${tag}"](around:3000, ${location.lat}, ${location.lng});
        way["amenity"="${tag}"](around:3000, ${location.lat}, ${location.lng});
      );
      out center;
    `;

    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query
    });

    const data = await response.json();

    const parsed = data.elements.map(el => ({
      id: el.id,
      name: el.tags?.name || "Unnamed place",
      lat: el.lat || el.center.lat,
      lng: el.lon || el.center.lon
    }));

    allPlaces = allPlaces.concat(parsed);
  }

  return allPlaces;
}
