const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const app = express();

const dbURI =
  "mongodb+srv://saini16:5721@node.aixwqtg.mongodb.net/node-tut?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
app.set("view engine", "ejs"); //ejs will be used to create our templates
// app.set('views','myviews') => where   views are residing, folder name as the second arguement
// by default it is views

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// usually express can not excess static file, but now it can access if it is placed inside the public folder

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog title",
//     snippet: "this is just a snippet!",
//     body: "whooah, my first ever blog!!",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.get('/all-blogs',(req,res)=>{
//   Blog
//     .find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));

//   // Blog.finfById("ID"), will give you a unique blog with given id
// })

app.get("/", (req, res) => {
  // const blogs = [
  //   // {title:"mario blog", body:"htis isj ohsjdkhjrf"},
  //   // {title:"joey blog", body:"htis isj joey ohsjdkhjrf"},
  //   // {title:"monica blog", body:"htis isj monica ohsjdkhjrf"},
  // ];
  // res.sendFile("./views/index.html", { root: __dirname });

  // sendFile recieves full path but it is convenient to use relative path
  //  therefore specify the relative path and specify the root as well
  // earlier we were sending the file, now we will render the view
  //  the syntax is filename - the extension
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs");
  //  whatever object you pass, you can access that object from the page that you are rendering
});
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => console.log(err));
  // Blog.finfById("ID"), will give you a unique blog with given id
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      console.log(result);
      res.render("details", { title: "Details page", blogs: result });
    })
    .catch((err) => console.log(err));
});
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
  // if none of the paths matches, this will execute
});
