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
