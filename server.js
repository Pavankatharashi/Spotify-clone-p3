const bodyParser = require("body-parser");
const express = require("express");
const ConnectDb = require("./config/dbConnection");
const cors = require("cors");
const app = express();
const PORT = 3000;

ConnectDb();
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/user-routes"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
