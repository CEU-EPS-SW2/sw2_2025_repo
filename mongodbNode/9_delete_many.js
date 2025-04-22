const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
    try { await client.connect();
    } catch (e){  console.error(e);  }
}

const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);
const documentsToDelete = { balance: { $gt: 90000 } };
const main = async () => {
 try {
   await connectToDatabase()
   let result = await accountsCollection.deleteMany(documentsToDelete);
   console.log(result);
   result.deletedCount > 0
     ? console.log(`Deleted ${result.deletedCount} documents`)
     : console.log("No documents deleted");
 } catch (err) {
   console.error(`Error deleting documents: ${err}`);
 } finally {
   await client.close();
 }
} 
main();