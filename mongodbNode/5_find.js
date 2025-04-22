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
const documentsToFind = { year: 2015 };
 
const main = async () => {
  try {
    await connectToDatabase()
    let result = collection.find(documentsToFind).limit(5);
    let docCount = collection.countDocuments(documentsToFind);
    await result.forEach((doc) => console.log(doc));
    console.log(`Found ${await docCount} documents`);
  } catch (err) {
    console.error(`Error finding documents: ${err}`);
  } finally {
    await client.close();
  }
}
main();