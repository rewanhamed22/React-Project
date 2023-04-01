const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

server.post("/posts", (req, res) => {
  const db = router.db;
  const { title, value, imageUrl, userId } = req.body;
  const id = Date.now().toString();
  const post = { id, title, value, imageUrl, userId };
  db.get("posts").push(post).write();
  res.json(post);
});

server.post("/logout", (req, res) => {
  localStorage.removeItem("userToken");
  res.status(200).send({});
});
server.listen(3000);
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });
