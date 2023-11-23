const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
// 3rd party middleware
app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser for parsing form data


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
