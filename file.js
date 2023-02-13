const fs = require("fs");
//read====================

// fs.readFile("./texts/text.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });
// console.log("nasim");

//write===============

// fs.writeFile("./texts/text1.txt", "Islamic University,Bangladesh", () => {
//   console.log("file read ");
// });
// fs.writeFile("./texts/text4.txt", "Dhaka University,Dhaka", () => {
//   console.log("text4 is write ");
// });

//directory===================

if (!fs.existsSync("./nasim")) {
  //create
  fs.mkdir("./nasim", (err) => {
    err ? console.log(err) : console.log("dir maked");
  });
} else {
  //remove==============
  fs.rmdir("./nasim", (err) => {
    err ? console.log(err) : console.log("removed");
  });
}
