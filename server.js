import express from "express";
import logger from "morgan";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(logger("dev"));

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

const posts = [
  {
    id: "s8c5ee5c-98dc-62a6-b284-05a231e3abb6",
    title: "Lorem Ipsum Dolor",
    imgURL: "https://www.unsplash.com/92hd.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Bruno Galvao",
  },
  {
    id: "n855ee5c-98dc-62a6-b284-0da231e3abb6",
    title: "Ut Enim Ad Minim",
    imgURL: "https://www.unsplash.com/64ea.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Bruno Galvao",
  },
  {
    id: "p8c5ee5c-98dc-64a6-b284-0da231e2abb6",
    title: " Vulputate odio ut enim blandit",
    imgURL: "https://www.unsplash.com/64ea.png",
    content:
      "Quis enim lobortis scelerisque fermentum dui. Sit amet consectetur adipiscing elit ut. Iaculis eu non diam phasellus vestibulum lorem sed.",
    author: "Arya Bayati",
  },
  {
    id: "g8c5ee5c-98dc-62a6-b284-0da236e3abb6",
    title: " Integer eget aliquet nibh ",
    imgURL: "https://www.unsplash.com/64ea.png",
    content:
      "Consectetur adipiscing elit ut aliquam purus sit amet. Donec enim diam vulputate ut pharetra sit. Et tortor consequat id porta. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. ",
    author: "Anna Schneider",
  },
];

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/posts", (req, res) => {
  res.json(posts);
});
app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id === id);
  res.json(post);
});
app.post("/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.json(posts);
});

app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex((post) => post.id === id);
  const post = { ...posts[postIndex], ...req.body };
  posts.splice(postIndex, 1, post);
  res.json(post);
});
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex((post) => post.id === id);
  users.splice(postIndex, 1);
  res.json(posts);
});
