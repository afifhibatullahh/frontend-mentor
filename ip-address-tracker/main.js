const MapLocation = () => {
  const API = `
    https://geo.ipify.org/api/v2/country,city?apiKey=at_i2vSXbeF51zpYigvxqeXAZc2W6lJT`;

  const IPGeolocation = {
    ip: "103.169.238.66",
    location: {
      country: "ID",
      region: "Provinsi Lampung",
      city: "Kelurahan Perumnas Way Halim",
      lat: -5.37833,
      lng: 105.2775,
      postalCode: "",
      timezone: "+07:00",
      geonameId: 7666678,
    },
    as: {
      asn: 138881,
      name: "TRANSNET-AS-ID",
      route: "103.169.238.0/24",
      domain: "http://itn.net.id",
      type: "Cable/DSL/ISP",
    },
    isp: "PT INDONESIA TRANS NETWORK",
  };

  let lat = IPGeolocation.location.lat;
  let lng = IPGeolocation.location.lng;

  document.getElementById("ipAddress").innerHTML = IPGeolocation.ip;
  document.getElementById("timezone").innerHTML =
    IPGeolocation.location.timezone;
  document.getElementById("provinces").innerHTML =
    IPGeolocation.location.region;
  document.getElementById("isp").innerHTML = IPGeolocation.as.name;

  let map = L.map("container-map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  let iconLocation = L.icon({
    iconUrl: "./images/icon-location.svg",
  });

  L.marker([lat, lng], {
    icon: iconLocation,
  }).addTo(map);
};

MapLocation();
