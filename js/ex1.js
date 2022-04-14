// fetch the url
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  // access and return JSON content
  .then(response => response.json())
  .then(paintings => {
    const paintingsElement = document.getElementById("paintings");
    // loop through the painting
    paintings.forEach(painting => {
      // create table elements per each loop
      const paintingElement = document.createElement("tr");
      paintingElement.innerHTML = `<td>${painting.name}</td>
        <td>${painting.year}</td>
        <td>${painting.artist}</td>`;
      // add info to the page
      paintingsElement.appendChild(paintingElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });