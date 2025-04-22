const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
    try { await client.connect();
    } catch (e){  console.error(e);  }
}

const dbname = "sample_mflix";
const collection_name = "movies";
const collection = client.db(dbname).collection(collection_name)
const documentToUpdate = { _id: new ObjectId("573a13adf29313caabd2b765") };
const update = { $inc: { metacritic: 1 } }
const main = async () => {
  try {
    await connectToDatabase()
    let result = await collection.updateOne(documentToUpdate, update);
    console.log(result);
    result.modifiedCount === 1
      ? console.log("Updated one document")
      : console.log("No documents updated");
  } catch (err) {
    console.error(`Error updating document: ${err}`);
  } finally {
    await client.close()
    ;
  }
}
main();