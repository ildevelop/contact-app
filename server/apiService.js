const user = "ilya_radu";
const pwd = "uAoWu6epJocXqNIe";
const collectionName = "candidate10";
const MongoClient = require("mongodb").MongoClient;
const dbName = "test";

class api {
  constructor() {
    this.uri =
      "mongodb+srv://" +
      user +
      ":" +
      pwd +
      "@candidates-r379z.gcp.mongodb.net/" +
      dbName +
      "?retryWrites=true&w=majority";
  }
  getContacts(response) {
    const client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    client
      .connect()
      .then(() => {
        let collection = client.db(dbName).collection(collectionName);
        collection.find().toArray(function(err, res) {
          if (err) {
            response.status(500).send("Something broke with DB!");
          }
          response.send({ contact: res });
        });
      })
      .then(() => {
        console.log("disconnecting");
        client.close();
      });
  }
  updateContact(contact, response) {
    const client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    client
      .connect()
      .then(() => {
        let collection = client.db(dbName).collection(collectionName);
        collection.findOneAndUpdate(
          {
            first: contact.first_old,
            last: contact.last_old
          },
          {
            $set: {
              last: contact.last,
              first: contact.first,
              cell: contact.cell,
              birthday: contact.birthday
            }
          },
          { returnNewDocument: true },
          function(err, doc) {
            if (err) {
              throw err;
            } else {
              response.send({ status: "Updated" });
            }
          }
        );
      })
      .then(() => {
        console.log("disconnecting");
        client.close();
      });
  }
}
module.exports = api;
