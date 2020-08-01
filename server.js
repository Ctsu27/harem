const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();
const directory = __dirname + "/dist/harem";

app.use(express.static(directory));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: directory });
});

app.listen(PORT);
