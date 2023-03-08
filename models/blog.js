const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema); // usually name with capital letter
// model ke andar jo bhi name doge, usko smallcase me convert karke plural form me lakar db create karega

module.exports = Blog;
