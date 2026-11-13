# 🌍 Earth Explorer

A free, interactive world map that finds you and shows what's around. Search any place, switch map views, and get 😋 recommendations for food, cafés, parks, and sights nearby. It's a single HTML file with no build step and no backend.

**Live demo:** `https://YOUR-USERNAME.github.io/earth-explorer/`

## Features

- 📍 **My location** with live tracking and an accuracy circle
- 🔍 **Search** for places and addresses
- 🗺️ **Map views:** Streets, Satellite, Terrain, and Dark
- 😋 **Recommendations** near you by category (Top picks, Food, Cafés, Bars, Parks, Sights, Shops, Stay), ranked by how much is known about a place and how close it is
- 📸 **Place details:** photos, Wikipedia summary, hours, phone, website, directions, and a Google Maps link
- ⭐ **Reviews:** star ratings and written reviews, saved on your device
- 💾 **Saved places** for your favorites
- 📏 **Measure tool** for distances between points
- 🌤️ **Weather** at your location
- 👋 **Welcome tour** the first time you open it (replay it with the **?** button)
- Tap anywhere on the map to get its address and coordinates

## Run it

Open `index.html` in a browser, or host it for free with GitHub Pages:

1. Push `index.html` to a repository.
2. Go to **Settings → Pages**.
3. Set the source to **Deploy from a branch → main → / (root)** and save.

Location access works best over HTTPS, which GitHub Pages provides.

## Optional: Google photos and reviews

Tap the **⚙︎** button and paste a Google Maps Platform API key with the **Places API (New)** enabled. Place details will then also show Google's photos, rating, and up to 5 reviews.

- The key is stored only in your browser (`localStorage`).
- Restrict the key to your site's address (HTTP referrer) in the Google Cloud console so others can't reuse it.
- Without a key, photos come from Wikipedia and Wikimedia Commons.

## Data sources and credits

| Feature | Source |
| --- | --- |
| Map engine | [Leaflet](https://leafletjs.com/) |
| Street map and place data | [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors |
| Place and address search | [Nominatim](https://nominatim.org/) |
| Nearby places | [Overpass API](https://overpass-api.de/) |
| Satellite tiles | Esri World Imagery |
| Terrain tiles | [OpenTopoMap](https://opentopomap.org/) |
| Dark tiles | [CARTO](https://carto.com/) |
| Weather | [Open-Meteo](https://open-meteo.com/) |
| Photos and summaries | [Wikipedia](https://www.wikipedia.org/) and [Wikimedia Commons](https://commons.wikimedia.org/) |
| Optional photos and reviews | Google Places API |

Please follow the usage policies of these services. Nominatim and Overpass are free public services intended for light use.

## Good to know

- Reviews you write are saved only on your device. They aren't shared with other people.
- Recommendations come from OpenStreetMap, so coverage varies by area.
- Your location stays in your browser. Place lookups send map coordinates to the services listed above.

## License

Add a license of your choice (for example MIT) before sharing publicly.
