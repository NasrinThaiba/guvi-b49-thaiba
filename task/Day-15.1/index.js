const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const firstname = document.getElementById("name1").value;
  const lastname = document.getElementById("name2").value;
  const address = document.getElementById("address").value;
  const pincode = Number(document.getElementById("pincode").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }
 const state = document.getElementById("state").value;
 const country = document.getElementById("country").value;


  const newRow = table.insertRow(); 
  const firstnameCol = newRow.insertCell();
  const lastnameCol = newRow.insertCell();
  const addressCol = newRow.insertCell();
  const pincodeCol = newRow.insertCell(); //document.createElement("td");
  const genderCol = newRow.insertCell(); //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");
  const stateCol = newRow.insertCell();
  const countryCol = newRow.insertCell();

  firstnameCol.textContent = firstname;
  lastnameCol.textContent = lastname;
  addressCol.textContent = address;
  pincodeCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  stateCol.textContent = state;
  countryCol.textContent = country;

  form.reset();
});
