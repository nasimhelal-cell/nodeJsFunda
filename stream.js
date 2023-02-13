const fs = require("fs");

const myReadStream = fs.createReadStream("./texts/text3.txt", {
  encoding: "utf8",
});

const myWriteStream = fs.createWriteStream("./texts/nASIM.txt");

// myReadStream.on("data", (chunk) => {
//   console.log("==================================chunk==============");

//   myWriteStream.write(chunk);
// });

myReadStream.pipe(myWriteStream);
