
const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 3000;
const MONGO_USERNAME = process.env.MONGO_USERNAME || "admin";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "password";
const MONODB_HOST = process.env.MONODB_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
// const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017`;
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONODB_HOST}:${MONGO_PORT}`;
console.log(MONGO_URI);
app.use(bodyParser.json());

app.get("/", function (_req, res) {
  res.send({
    message: "Hello World",
  });
});

app.get("/get-profile/:userid", async (_req, res) => {
  console.log(_req.params);
  const userid = _req.params.userid;
  console.log(userid);
  const query = { userid: userid };
  console.log(query);
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("user-account");
  const result = await db.collection("users").findOne(query);
  client.close();
  res.send(result);
});

app.post("/update-profile", async (req, res) => {
  var response = res;
  console.log(req.body);
  const userid = req.body.userid;
  const name = req.body.name;
  const email = req.body.email;
  const query = { userid: userid };
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("user-account");
  const result = await db.collection("users").updateOne(query, { $set: { name: name, email: email } }, { upsert: true });
  const result2 = await db.collection("users").findOne(query);
  client.close();
  console.log(result2);
  return response.send(result2);
});


app.listen(port, () => {
  console.log("Server is running on port " + port);
});
