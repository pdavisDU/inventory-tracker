const inventory = {
  //we create an empty array to store our items in
  items: [],
  //addItem is a method thatwe use to add a new item to the inventory. passing in name, quantity, and photo as arguments.
  addItem(name, quantity, photo) {
    //need to be able to push a new object with specified properties to the items array
    this.items.push({
      name,
      quantity,
      photo,
    });
  },

  //update quantity of an item in the inventory
  updateQuantity(name, quantity) {
    //find the item in the items array with the specified name
    const item = this.items.find((i) => i.name === name);

    //if the item exists, update its quantity
    if (item) {
      item.quantity = quantity;
    }
  },

  //need to get the current inventory
  getInventory() {
    //return the items array
    return this.items;
  },
};

//referencing form
const form = document.querySelector("form");
//get a reference to the inventory list element
const inventoryList = document.querySelector("#inventory-list");

form.addEventListener("submit", (event) => {
  //prevent the form from submitting on reload

  event.preventDefault();

  //Get values from the input fields
  const name = document.querySelector("#input-name").value;
  const quantity = parseInt(document.querySelector("#input-quantity").value);
  const photo = document.querySelector("#input-photo").files[0];

  if (!name || !quantity || !photo) {
    alert("Please fill out all of the fields before adding an item");
    return;
  }

  //add the item to the inventory
  inventory.addItem(name, quantity, photo);

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

    const img = document.createElement("img");

    img.src = URL.createObjectURL(item.photo);

    li.appendChild(img);

    //set the inner html of the list item to the name and quantity of the item
    li.innerHTML += `${item.name}: ${item.quantity}`;

    //append the list item element to the inventory list
    inventoryList.appendChild(li);
  }
}

//render the initial inventory
renderInventory();
