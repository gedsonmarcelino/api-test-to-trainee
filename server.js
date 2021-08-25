const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const TOKEN_KEY = "asdjkfhsdhfksdfksfksdfio14980273klasdfhsdhf9823l3r23l4";

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post("/auth/token", (req, res) => {
  const { username, password } = req.body;
  if (username === "teste" && password === "123456") {
    res.jsonp({
      token: TOKEN_KEY,
    });
  } else {
    res.status(500).jsonp({
      error: "Usuário/Senha inválida!",
    });
  }
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  const { authorization } = req.headers;
  if (authorization !== `Bearer ${TOKEN_KEY}` && req.path !== "/") {
    res.status(500).jsonp({
      error: "Token inválido!",
    });
  } else {
    // Continue to JSON Server router
    next();
  }
});

// Use default router
server.use(router);
server.listen(8085, () => {
  console.log("JSON Server is running in 8085");
});
