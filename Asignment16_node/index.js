const figlet = require("figlet");
const chalk = require("chalk");

figlet.text("Welcome to node js", {
  font: "Standard",
}, function (err, data) {
  if (err) {
    console.log("Figlet failed:", err);
    return;
  }

  console.log(chalk.green(data));
});




