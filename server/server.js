const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/products", (req, res) => {
  console.log(req.body.name);
  res.json({ message: "I got your name boy" });
});
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
