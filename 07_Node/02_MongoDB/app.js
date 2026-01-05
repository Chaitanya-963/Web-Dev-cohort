const express = require("express");
const app = express();

const userModel = require("./user.model.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Chal raha hai");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Aishwarya",
    email: "aishwarya@gmail.com",
    username: "aishwarya04",
  });

  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  let readUsers = await userModel.find();
  res.send(readUsers);
});

app.get("/update", async (req, res) => {
  try {
    // 1. Fixed the method name to findOneAndUpdate
    let updateUser = await userModel.findOneAndUpdate(
      { username: "chaitanya09" },
      { name: "Chaitanya Mehetre" },
      { new: true } // Returns the document AFTER the update
    );

    // 2. Check if the user was actually found and updated
    if (!updateUser) {
      return res.status(404).send("User not found");
    }

    res.send(updateUser);
  } catch (error) {
    // 3. Added error handling for database issues
    res.status(500).send("Internal Server Error");
  }
});


app.get("/delete", async (req, res) => {
  let deleteUser = await userModel.findOneAndDelete({
    username: "chaitanya09",
  });

  if (!deleteUser) {
    return res.status(404).send("User not found");
  }

  res.send(deleteUser);
});

app.listen(3000, function () {
  console.log("Server is running");
});
