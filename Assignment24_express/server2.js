const express = require("express");
const app = express();

app.use("/materials", express.static("challenge2/materials"));

app.listen(5002, () => {
    console.log("Challenge 2 running at http://localhost:5002");
});