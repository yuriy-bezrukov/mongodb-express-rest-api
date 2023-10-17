import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || 'mongodb+srv://brunoyam:brunoyam@brunoyam-cluster-0.psyfixh.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("tasks");

export default db;