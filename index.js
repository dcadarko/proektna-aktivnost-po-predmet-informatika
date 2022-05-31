var slika = "";

var povikajAPIpocetno = () => {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=UJD8WvGKbte94viL06jZivsMO55r64hPTlN7rbRY`
  )
    .then((response) => response.json())
    .then((data) => (slika = data.url));
  setTimeout(() => {
    document.getElementById("slika").src = slika;
  }, 1000);
};

var povikajAPI = () => {
  fetch(
    `https://api.nasa.gov/planetary/apod?date=${
      document.getElementById("datum").value
    }&api_key=UJD8WvGKbte94viL06jZivsMO55r64hPTlN7rbRY`
  )
    .then((response) => response.json())
    .then((data) => (slika = data.url));
  setTimeout(() => {
    document.getElementById("slika").src = slika;
  }, 1000);
};
