const express = require("express");
const userModel = require("./models/user.model.js");
const postModel = require("./models/post.model.js");

const app = express();

app.get("/", function (req, res) {
  res.send("hey");
});

app.get("/create", async function (req, res) {
  let user = await userModel.create({
    username: "chaitanya",
    email: "chaitanya@chaitanya.com",
    age: 22,
  });
  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postdata: "Hello ji, Kese ho aap sab",
    user: "695a48fa8feb7d78b797b74f",
  });

  let user = await userModel.findOne({ _id: "695a48fa8feb7d78b797b74f" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000, function () {
  console.log("Server is running");
});
