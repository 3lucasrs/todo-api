const express = require("express");
const path = require("path");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(apiRoutes);

server.use((req, res) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

const errorHandler = (err, req, res, next) => {
  res.status(400);
  console.log(err);
  res.json({ error: "Ocorreu algum erro." });
};
server.use(errorHandler);

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
