const express = require("express");
const auth=require('./routes/api/auth');
const bodyparser=require('body-parser');
const mongoose = require('mongoose');

const app = express()
app.use(bodyparser.urlencoded({extended :false}))
app.use(bodyparser.json())
const mongoAtlasUri = require("./setup/key").mongoURL;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}
const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log(`Connection error ${err}`));

dbConnection.once("open", () => console.log("Connected to DB!"));
 app.use('/add',(auth))
app.listen(3000, function() {

    console.log("Server started running");
});