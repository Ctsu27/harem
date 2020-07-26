const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
const directory = __dirname + "/dist/harem";

app.use(express.static(directory));
app.get("*", (req, res) => {
  res.sendFile(path.join(directory));
});

app.listen(PORT);
