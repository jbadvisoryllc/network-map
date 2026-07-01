const MAP_IMAGE_URL = "./assets/world-map-transparent-2x.png";

const root = document.getElementById("partner-map-app");

root.innerHTML = `
  <div class="map-module">
    <div class="map-stage">
      <img
        src="${MAP_IMAGE_URL}"
        class="map-image"
        alt="Interactive global partner network map"
      />
    </div>
  </div>
`;
