import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("insertDB2");
    const haiku = database.collection("haiku");
    // create a document to insert
    // const doc = {
    //   title: "Record of a Shriveled Datum",
    //   content: "No bytes, no problem. Just insert a document, in MongoDB",
    // }
    // const result = await haiku.insertOne(doc);

    //console.log(`A document was inserted with the _id: ${result.insertedId}`);
    const filter = { title: "okda" };
    const updateDoc = {
        $set: {
          title: `working ahne, such as: ${Math.random()}`
        },
      };
      const result = await haiku.insertOne(filter)
      console.log(
      result
      ); 
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
