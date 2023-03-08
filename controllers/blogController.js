const Blog = require("../models/blog");
const getHome = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("../views/blogs/index", { title: "All blogs", blogs: result });
    })
    .catch((err) => console.log(err));
  // Blog.finfById("ID"), will give you a unique blog with given id
};

const postHome = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const getCreate = (req, res) => {
  res.render("../views/blogs/create", { title: "Create" });
};

const getById = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      console.log(result);
      res.render("../views/blogs/details", {
        title: "Details page",
        blogs: result,
      });
    })
    .catch((err) => console.log(err));
};
const deleteById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
};
module.exports = { getHome, postHome, getCreate, getById, deleteById };
