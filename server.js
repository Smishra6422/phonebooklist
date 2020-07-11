require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const phonebookRoutes = require("./routes/phonebook");
const path = require("path");

//DB Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

//Server Port
const port = process.env.PORT || 5002;

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//My Routes
app.use("/api", phonebookRoutes);

//Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Server
app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});
