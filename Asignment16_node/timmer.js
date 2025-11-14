console.log("Node.js Version:", process.version);
console.log("File Name:", __filename);
console.log("Directory:", __dirname);

const intervalId = setInterval(() => {
  console.log("Welcome to Node.js!");
}, 3000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Timer stopped after 10 seconds.");
}, 10000);




