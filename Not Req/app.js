const express = require("express");
const app = express();
app.set("view engine", "ejs"); //ejs will be used to create our templates
// app.set('views','myviews') => where   views are residing, folder name as the second arguement
// by default it is views
app.listen(3000);
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
  // sendFile recieves full path but it is convenient to use relative path 
  //  therefore specify the relative path and specify the root as well
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
  // if none of the paths matches, this will execute
});
