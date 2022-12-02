import inventory from "./inventory";

//referencing form
const form = document.querySelector("form");
//get a reference to the inventory list element
const inventoryList = document.querySelector("#inventory-list");

form.addEventListener("submit", (event) => {
  //prevent the form from submitting on reload

  event.preventDefault();

  //Get values from the input fields
  const name = document.querySelector("#input-name").value;
  const quantity = document.querySelector("#input-quantity").value;
  const photo = document.querySelector("#input-photo").files[0];
});
