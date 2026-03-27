import express from 'express';
const app = express();
const port = 3011;

app.get('/adm', (req, res) => {
    res.statusCode = 200;
    res.send("<h1>Página de ADIMINISTRADOR.</h1>");
});
app.get('/usuario', (req, res) => {
    res.statusCode = 200;
    res.send("<h1>Página de Usuário.</h1>");
});
app.listen(port, () => {
    console.log(`Servidor ativo na porta http://localhost:${port}`);
});