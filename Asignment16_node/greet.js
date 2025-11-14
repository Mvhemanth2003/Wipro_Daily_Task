const moment = require("moment");

const name = process.argv[2];

const now = moment().format("ddd MMM D YYYY, h:mm A");

console.log(`Hello, ${name}! Today is ${now}`);
