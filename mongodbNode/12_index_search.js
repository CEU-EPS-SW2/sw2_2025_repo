const { MongoClient} = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const connectToDatabase = async () => {
  try { await client.connect();
  } catch (e){ console.error(e);
  }
};
const dbname = "sample_mflix";
const collection_name = "movies";
const movies = client.db(dbname).collection(collection_name);
const main = async () => {
  try {
    await connectToDatabase();
    const query = { title: /^Batman.*/ };
    const sort = { year: 1 };
    const projection = { _id: 0, title: 1, year:1};
    let result = movies.find(query).sort(sort).project(projection);
    await result.forEach((doc) => console.log(doc));
  } catch (err) { console.error(`Error finding documents: ${err}`);
  } finally { await client.close();
  }
};
main();
