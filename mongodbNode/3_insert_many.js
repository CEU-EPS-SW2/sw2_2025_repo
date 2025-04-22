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
const sampleAccounts = [
 {
   account_id: "MDB011235813",
   account_holder: "Ada Lovelace",
   account_type: "checking",
   balance: 60218,
 },{
   account_id: "MDB829000001",
   account_holder: "Muhammad ibn Musa al-Khwarizmi",
   account_type: "savings",
   balance: 267914296,
 }];
const main = async () => {
 try {
   await connectToDatabase();
   let result = await accountsCollection.insertMany(sampleAccounts);
   console.log(`Inserted ${result.insertedCount} documents`);
   console.log(result);
 } catch (err) { console.error(`Error inserting documents: ${err}`);
 } finally { await client.close();
 }
}
main();