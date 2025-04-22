const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
  try { await client.connect();
  } catch (e){ console.error(e);
  }
}
const dbname = "bank";
const collection_name = "accounts";
const accounts = client.db(dbname).collection(collection_name);
const pipeline = [
  { $match: { balance: {$gt: 1000}}},
  { $group: {
    _id: "$account_type",
    total_balance: { $sum: "$balance"},
    avg_balance: { $avg: "$balance"}
  }}];
const main = async () => {
  try {
    await connectToDatabase();
    let result = await accounts.aggregate(pipeline);
    await result.forEach((doc) => console.log(doc));
  } catch (err) {
    console.error(`Error finding documents: ${err}`);
  } finally {
    await client.close();
  }
}; main();