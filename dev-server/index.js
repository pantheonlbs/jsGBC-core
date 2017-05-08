const express = require("express");
const path = require("path");
const { log } = require("util");

const port = 7777;
const app = express();
app.use(express.static(path.join(__dirname, "../")));

app.listen(port, () => {
  log(`dev server listening on ${port}`);
});
