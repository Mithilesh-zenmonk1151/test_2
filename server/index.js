const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors= require("cors")
dotenv.config();
var cookieParser = require('cookie-parser');
const database = require("./config/database");

const PORT = process.env.PORT || 4001;
database.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());

 app.use("/api", require("./routes"));
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
 
  