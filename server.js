const app = require("./app");

app.listen(process.env.PORT, function () {
  console.log("Servidor Online na porta " + process.env.PORT + "!");
});
