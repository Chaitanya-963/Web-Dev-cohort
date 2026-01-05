const fs = require("fs");

// fs.writeFile("demo.txt", "Hey, I use FS module!", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });
// fs.appendFile("demo.txt", "Great Work Brother!", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// fs.rename("demo.txt", "test.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// fs.copyFile("test.txt", "./copy/copy.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// fs.unlink("test.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// fs.rm("./copy", { recursive: true }, function (err) {
//   if (err) console.error(err);
//   else console.log("remove");
// });

fs.readFile("demo.txt", "utf8", function (err, data) {
  if (err) console.error(err);
  else console.log(data);
});
