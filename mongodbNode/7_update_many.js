const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
    try { await client.connect();
    } catch (e){  console.error(e);  }
}

const dbname = "sample_mflix";
const collection_name = "movies";
const collection = client.db(dbname).collection(collection_name);
const documentsToUpdate = { year: 2015 };
const update = { $inc: { metacritic: 1 } };
const main = async () => {
  try {
    await connectToDatabase()
    let result = await collection.updateMany(documentsToUpdate, update);
    result.modifiedCount > 0
      ? console.log(`Updated ${result.modifiedCount} documents`)
      : console.log("No documents updated");
  } catch (err) {
    console.error(`Error updating documents: ${err}`);
  } finally {
    await client.close();
  }
}
main();