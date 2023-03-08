const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  /*
  // res.setHeader('Location','about') 
  => this will redirect to location page  
  THis is one way to send html data which is quite messy..
  res.write("<p>This is a paragraph</p>");
  res.write("<p>This is also a paragraph</p>");
  res.end();
  */
  // second way is to pass the html file

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      res.end(data); // this command is shorthand of two commands res.write and res.end


    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port number 3000");
});
