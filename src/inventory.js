// we need to create an inventory object to store our items

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
};
