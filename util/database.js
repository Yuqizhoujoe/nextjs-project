import { MongoClient } from "mongodb";
import { createRouter } from "next-connect";

const client = new MongoClient(
  "mongodb+srv://yuqizhou:Whan5201314!@cluster0.wfb8v.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const database = async (req, res, next) => {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db();
    return next();
}

const middleware = createRouter();

middleware.use(database);

export default middleware;
