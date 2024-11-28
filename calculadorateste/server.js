const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/calculadorateste", (req, res) => {
    const { correntinhas, baixissimo, baixo, meioAlto, alto, duploAlto, altissimo } = req.body;

    const tempos = {
        correntinhas: 2,
        baixissimo: 2.5,
        baixo: 3,
        meioAlto: 3.5,
        alto: 4,
        duploAlto: 4.5,
        altissimo: 5,
    };

    const tempoTotal = 
        (correntinhas * tempos.correntinhas) +
        (baixissimo * tempos.baixissimo) +
        (baixo * tempos.baixo) +
        (meioAlto * tempos.meioAlto) +
        (alto * tempos.alto) +
        (duploAlto * tempos.duploAlto) +
        (altissimo * tempos.altissimo);

    const minutos = Math.floor(tempoTotal / 60);
    const segundos = Math.round(tempoTotal % 60);

    res.json({ minutos, segundos });
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
