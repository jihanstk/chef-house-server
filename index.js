const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;
const chefs = require("./data/Chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefs);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chefs.find((c) => c.id == id);
  res.send(singleChef);
});

app.listen(port, () => {
  console.log("the running port is : ", port);
});
