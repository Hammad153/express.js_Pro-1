import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const letterNumber = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { letterNumber });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;
