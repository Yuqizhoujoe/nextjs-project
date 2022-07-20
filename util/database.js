import { MongoClient } from "mongodb";

const MONGODB_URL = process.env.MONGODB;
const DB = process.env.DB_NAME;

let client = null;
let db = null;

export async function database() {
  if (client && db) {
    return {
      client,
      db,
    };
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  client = new MongoClient(
    "mongodb+srv://yuqizhou:zqQ5FjkkB6pRmMHb@cluster0.wfb8v.mongodb.net/?retryWrites=true&w=majority",
    options
  );
  await client.connect();

  db = client.db(DB);

  return {
    client,
    db,
  };
}
