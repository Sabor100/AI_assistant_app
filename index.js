// index.js
const express = require("express");
const path = require("path");
const app = express();

// const port = 1337;  // Ta bort eller kommentera ut denna om du inte vill ha 1337
const port3000 = 3000;

// Servera upp alla statiska filer från katalogen "public"
app.use(express.static(path.join(__dirname, "public")));

// Om du vill ha en rutt till "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Starta servern enbart på port 3000
app.listen(port3000, () => {
  console.log(`Server körs på http://localhost:${port3000}`);
});
