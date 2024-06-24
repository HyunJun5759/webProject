import { MongoClient } from "mongodb";

// async function connectMongoDB() {
//   const dbName = process.env.DATABASE;
//   const uri = process.env.MONGODB_URI as string;
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const db = client.db(dbName);
//     // 이후 작업을 수행할 수 있습니다.

//     return db;
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//   }
// }

// const db = connectMongoDB();

const uri = process.env.MONGODB_URI; // your mongodb connection string
const options = {};

class Singleton {
  static _instance;
  client;
  clientPromise;

  constructor() {
    this.client = new MongoClient(uri, options);
    this.clientPromise = this.client.connect();
    if (process.env.NODE_ENV === "development") {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      global._mongoClientPromise = this.clientPromise;
    }
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance.clientPromise;
  }
}
const clientPromise = Singleton.instance;

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
