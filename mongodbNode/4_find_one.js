const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
    try { await client.connect();
    } catch (e){  console.error(e);  }
}

const dbname = "sample_mflix";
const collection_name = "movies";
const accountsCollection = client.db(dbname).collection(collection_name);
const documentToFind = { _id: new ObjectId("573a13adf29313caabd2b765") };

const main = async () => {
 try {
   await connectToDatabase();
   let result = await accountsCollection.findOne(documentToFind);
   console.log("Found the following document:\n", result);
 } catch (err) {
   console.error(`Error finding document: ${err}`);
 } finally {
   await client.close();
 }
}
main();