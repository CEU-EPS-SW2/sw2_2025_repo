const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
    try { await client.connect();
    } catch (e){  console.error(e);  }
}
const listDatabases = async (client) => {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
const main = async () => {
    try {
        await connectToDatabase();
        await listDatabases(client);
    } catch (e){  console.error(e);
    } finally {  client.close();
    }
}
main();