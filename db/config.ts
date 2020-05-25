import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const client = new MongoClient();

client.connectWithUri(
  "mongodb+srv://addy:Whiteheartking%401005@cluster0-v6acy.mongodb.net/test?retryWrites=true&w=majority",
);
const db = client.database("shopping-list");

export default db;
