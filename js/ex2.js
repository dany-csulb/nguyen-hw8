// return form element within document
const formElement = document.querySelector("form");
// submit button
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const username = formElement.elements.login.value;
  
  // fetch data from the API
  fetch(`https://api.github.com/users/${username}`)
    // translate JSON into javascript
    .then(response => response.json())
    .then(user => {
      // create user info DOM elememts
      // create image element
      const imageElement = document.createElement("img");
      imageElement.src = user.avatar_url;
      // create name element
      const nameElement = document.createElement("tr");
      nameElement.innerHTML = `<td>Name</td><td>${user.name}</td>`;
      // create blog element
      const blogElement = document.createElement("tr");
      blogElement.innerHTML = `<td>Blog</td><td>${user.blog}</td>`;
      // create created element
      const createdElement = document.createElement("tr");
      createdElement.innerHTML = `<td>Created</td><td>${user.created_at}</td>`;
      // clear the previous data
      const infoElement = document.getElementById("info");
      infoElement.innerHTML = "";
      // add info to the page
      infoElement.appendChild(imageElement);
      infoElement.appendChild(nameElement);
      infoElement.appendChild(blogElement);
      infoElement.appendChild(createdElement);
    })
    .catch(err => {
      console.error(err.message);
    });
});