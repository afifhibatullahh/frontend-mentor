const API = `
    https://geo.ipify.org/api/v2/country,city?apiKey=at_i2vSXbeF51zpYigvxqeXAZc2W6lJT`;
const search = document.getElementById("searchVal");
let map, iconLocation, marker;

async function fetchGL(ipAddress = "0", domain = "0") {
  const res = await fetch(`${API}&ipAddress=${ipAddress}&domain=${domain}`);
  json = await res.json();

  return json;
}

async function main() {
  const IPGeolocation = await fetchGL(0, 0);
  let lat = IPGeolocation.location.lat;
  let lng = IPGeolocation.location.lng;

  document.getElementById("ipAddress").innerHTML = IPGeolocation.ip;
  document.getElementById("timezone").innerHTML =
    IPGeolocation.location.timezone;
  document.getElementById("provinces").innerHTML =
    IPGeolocation.location.region;
  document.getElementById("isp").innerHTML = IPGeolocation.as.name;

  map = L.map("container-map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  iconLocation = L.icon({
    iconUrl: "./images/icon-location.svg",
  });

  marker = L.marker([lat, lng], {
    icon: iconLocation,
  });
  map.addLayer(marker);
}

async function moveMap(param1) {
  const ipReg =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const domainReg =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

  if (domainReg.test(param1) || ipReg.test(param1)) {
    let res;
    if (ipReg.test(param1)) {
      res = await fetchGL(param1, 0);
    } else res = await fetchGL(0, param1);

    document.getElementById("ipAddress").innerHTML = res.ip;
    document.getElementById("timezone").innerHTML = res.location.timezone;
    document.getElementById("provinces").innerHTML = res.location.region;
    document.getElementById("isp").innerHTML = res.isp;

    map.panTo(new L.LatLng(res.location.lat, res.location.lng));
    let iconLocation = L.icon({
      iconUrl: "./images/icon-location.svg",
    });

    map.removeLayer(marker);

    marker = L.marker([res.location.lat, res.location.lng], {
      icon: iconLocation,
    });
    map.addLayer(marker);

    return;
  }
  alert("You have entered an invalid domain or IP address!");
  return false;
}

main();

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode == 13) moveMap(search.value);
});

document
  .getElementById("btn-search")
  .addEventListener("click", () => moveMap(search.value));
