const express = require("express"); // IMPORTANDO o EXPRESS
const app = express(); // INICIANDO o EXPRESS


app.set('view engine', 'ejs'); // Estou dizendo para o Express usar o EJS como View Engine
app.use(express.static('public'));

app.get("/",(req, res) => {
    res.render("index")
});
app.get("/catalogo",(req, res) => {
    res.render("catalogo")
});
app.get("/carrinho",(req, res) => {
    res.render("carrinho")
});

app.listen(8080,()=>{console.log("App Rodando!");}); // INICIANDO O SERVIDOR