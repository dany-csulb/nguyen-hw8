// handle form submission
document.querySelector("form").addEventListener("submit", e => {
  // cancel default behavior of sending a synch POST request
  e.preventDefault();
  // create a formData object, passing the form as a parameter
  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const payment = document.querySelector("input[name='payment']").value;
  const subscribe = document.querySelector("input[name='subscribe']").checked;
  const subValue = subscribe ? "on" : "off";
  const location = document.querySelector("#locations");
  const locValue = location.options[location.selectedIndex].value;
  
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('payment', payment);
  formData.append('promotion', subValue);
  formData.append('location', locValue);
  
  const resultElement = document.getElementById("result");

  for(var pair of formData.entries()) {
    const tableElement = document.createElement("tr");
    tableElement.innerHTML = `<td>${pair[0]}</td><td>${pair[1]}</td>`;

    resultElement.appendChild(tableElement);
  }
});

