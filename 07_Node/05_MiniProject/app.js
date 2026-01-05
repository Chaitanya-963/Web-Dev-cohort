const express = require("express");
const userModel = require("./model/user.model.js");
const postModel = require("./model/post.model.js");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/profile", isLoggedIn, async function (req, res) {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async function (req, res) {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");

  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }

  await post.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async function (req, res) {
  try {
    // Find the specific post by ID
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");

    // Pass the post data to the edit view
    res.render("edit", { post });
  } catch (error) {
    req.flash("error", "Post not found");
    res.redirect("/profile");
  }
});

app.post("/update/:id", isLoggedIn, async function (req, res) {
  try {
    const { title, content } = req.body;
    
    // Update the post where ID matches
    await postModel.findOneAndUpdate(
        { _id: req.params.id }, 
        { title, content }, 
        { new: true }
    );

    req.flash("success", "Post updated successfully!");
    res.redirect("/profile");
  } catch (error) {
    req.flash("error", "Failed to update post");
    res.redirect("/profile");
  }
});
app.post("/create-post", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  let { title, content } = req.body;
  let post = await postModel.create({
    user: user._id,
    content,
    title,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.post("/register", async function (req, res) {
  let { email, password, age, name, username, gender } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).send({
      message: "User already registered",
    });
  }

  let hashPassword = await bcrypt.hash(password, 10);

  let createUser = await userModel.create({
    username,
    name,
    email,
    password: hashPassword,
    age,
    gender,
  });

  let token = jwt.sign({ email, userid: createUser._id }, "shhhh", {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true, secure: true });

  res
    .status(201)
    .send({ message: "User registered successfully", user: createUser });
});

app.post("/login", async function (req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    req.flash("error", "Something went wrong");
    return res.redirect("/login");
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email, userid: user._id }, "shhhh", {
        expiresIn: "1h",
      });

      res.cookie("token", token, { httpOnly: true, secure: true });

      return res.redirect("/profile");
    } else {
      req.flash("error", "Invalid credentials");
      res.redirect("/login");
    }
  });
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  if (!req.cookies || !req.cookies.token) {
    req.flash("error", "Please Log in first");
    return res.redirect("/login");
  }

  try {
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  } catch (error) {
    req.flash("error", "Something went wrong. Please login again");
    res.redirect("/login");
  }
}

app.listen(3000, function () {
  console.log(`Server is running http://localhost:3000/`);
});
