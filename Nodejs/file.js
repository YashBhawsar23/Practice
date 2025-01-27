const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hey Yash");

fs.writeFile("./test.txt", "Hey Yash async", (err) => {});
