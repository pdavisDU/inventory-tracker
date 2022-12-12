// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const connectionString = "mongodb://localhost:27017/my-inventory-db";

// mongoose.connect(connectionString, { useNewUrlParser: true });

// const InventoryItemSchema = new Schema({
//   name: String,
//   quantity: Number,
//   photo: Buffer,
// });

// const InventoryItem = mongoose.model("InventoryItem", InventoryItemSchema);

// const inventory = {
//   //addItem is a method that we use to add a new item to the inventory. passing in name, quantity, and photo as arguments.
//   addItem(name, quantity, photo) {
//     //create a new inventory item using the provided data
//     const item = new InventoryItem({
//       name,
//       quantity,
//       photo,
//     });

//     //save the item to the database
//     item.save((error) => {
//       if (error) {
//         //handle the error
//       }
//     });
//   },

//   //update quantity of an item in the inventory
//   updateQuantity(name, quantity) {
//     //find the item in the database using the specified name
//     InventoryItem.findOne({ name: name }, (error, item) => {
//       if (error) {
//         //handle the error
//       }

//       //if the item exists, update its quantity
//       if (item) {
//         item.quantity = quantity;

//         //save the updated item to the database
//         item.save((error) => {
//           if (error) {
//           }
//         });
//       }
//     });
//   },

//   //need to get the current inventory
//   getInventory() {
//     //return a promise that resolves with the items from the database
//     return new Promise((resolve, reject) => {
//       InventoryItem.find({}, (error, items) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(items);
//         }
//       });
//     });
//   },
// };

// const form = document.querySelector("form");
// const inventoryList = document.querySelector("#inventory-list");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = document.querySelector("#input-name").value;
//   const quantity = parseInt(document.querySelector("#input-quantity").value);
//   const photo = document.querySelector("#input-photo").files[0];

//   if (!name || !quantity || !photo) {
//     alert("Please fill out all of the fields before adding an item");
//     return;
//   }

//   //add the item to the inventory
//   inventory.addItem(name, quantity, photo);

//   //clear form fields
//   form.reset();
//   //Render the inventory list
//   renderInventory();
// });

// //create the renderInventory function
// function renderInventory() {
//   //get items from the inventory
//   const items = inventory.getInventory();

//   //clear the inventory list
//   inventoryList.innerHTML = "";

//   //loop through the items to render them to the page
//   for (const item of items) {
//     //create a list item element
//     const li = document.createElement("li");

//     const img = document.createElement("img");

//     img.src = URL.createObjectURL(item.photo);

//     li.appendChild(img);

//     //set the inner html of the list item to the name and quantity of the item
//     li.innerHTML += `${item.name}: ${item.quantity}`;

//     //append the list item element to the inventory list
//     inventoryList.appendChild(li);
//   }
// }

// //render the initial inventory
// renderInventory();

//Yes, the two pieces of code would accomplish the same thing. The first code example uses the mongodb driver directly, while the second uses the mongoose object modeling library. mongoose provides a more intuitive and convenient way to interact with a MongoDB database, but using the mongodb driver directly is also possible.

const mongodb = require("mongodb");
const connectionStringURI = "mongodb://localhost:27017/my-inventory-db";
const client = new mongodb.MongoClient(connectionStringURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    //handle the error
  }

  //use the client object to interact with the database
});
