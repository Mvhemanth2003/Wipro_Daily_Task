const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  console.log("File content:", data);

  // delay
  setTimeout(() => {
    console.log("Read operation completed");
  }, 2000);
});

console.log("This runs first (asynchronous proof)");










