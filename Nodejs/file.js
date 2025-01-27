const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hey Yash");

// fs.writeFile("./test.txt", "Hey Yash async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

const res = fs.appendFileSync("./test.txt", " Yash Bhawsar");
