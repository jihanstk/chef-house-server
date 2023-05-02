const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;
const chef = require("./data/Chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chef);
});

app.listen(port, () => {
  console.log("the running port is : ", port);
});
