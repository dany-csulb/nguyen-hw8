// create my traveler info
const traveler = {
  name: "Dany",
  countries: [
    {
      name: "Indonesia",
      year: 2015
    },
    {
      name: "Ireland",
      year: 2017
    },
    {
      name: "Costa Rica",
      year: 2017
    },
    {
      name: "Canada",
      year: 2018
    },
    {
      name: "Singapore",
      year: 2018
    }
  ]
};

// send object as JSON data to server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });