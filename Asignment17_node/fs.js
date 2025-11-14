const fs = require("fs").promises;

const input = process.argv[2];

async function run() {
  await fs.writeFile("feedback.txt", input);
  console.log("Data written successfully.");

  console.log("Reading file...");
  const data = await fs.readFile("feedback.txt", "utf-8");
  console.log(data);
}

run();



