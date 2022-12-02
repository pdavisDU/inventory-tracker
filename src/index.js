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

  //add the item to the inventory
  inventoryList.addItem(name, quantity, photo);

  //clear form fields
  form.reset();
  //Render the inventory list
  renderInventory();
});

//create the renderInventory function
function renderInventory() {
  //get items from the inventory
  const items = inventory.getInventory();

  //clear the inventory list
  inventoryList.innerHTML = "";

  //loop through the items to render them to the page
  for (const item of items) {
    //create a list item element
    const li = document.createElement("li");

    //set the inner html of the list item to the name and quantity of the item
    li.innerHTML = `${item.name}: ${item.quantity}`;

    //append the list item element to the inventory list
    inventoryList.appendChild(li);
  }
}

//render the initial inventory
renderInventory();
