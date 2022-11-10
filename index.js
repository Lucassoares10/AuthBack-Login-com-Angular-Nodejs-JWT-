const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sign", (req, res) => {
  const email = "ls6359575@gmail.com";
  const password = "123";

  //Verificando os dados passados pelo corpo da requisição.
  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Lucas Soares",
      email,
      role: ["sysAdmin"],
    };

    //criando token e fazendo o seu return
    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: "Usuário ou senha incorreta" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});