import express from 'express';
const app = express();
const PORT = 3010;
const topo = `<!DOCTYPE html>
    <html lang='pt-BR'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>EXPRESS</title>
        <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        body{
            background-color: lightslategray;
            font-family: Arial, Helvetica, sans-serif;
        }
        .header{
            background-color: rgb(23, 184, 238);
            padding: 20px;
            text-align: center;
        }
        .header h1{
            margin-bottom: 20px;
            color: white;
        }
        .listas{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            list-style-type: none;
        }
        .listas > li > a{
            color: white;
            text-decoration: none;
            padding: 10px;
            border-radius: 10px;
            transition: 0.5s;
        }
        .listas > li > a:hover{
            text-decoration: underline;
            background-color: black;
        }
        .menu{
            background-color: rgb(94, 91, 91);
            width: 100%;
            padding: 20px;
        }
    </style>
    </head>
    <body>`;
const nav = `
    <header class="header">
        <h1>MEU SITE EM NODE.JS</h1>
        <nav class="menu">
            <ul class="listas">
                <li><a href="/">Home</a></li>
                <li><a href="/zoologico">ZOO</a></li>
                <li><a href="/planetario">Planetário</a></li>
                <li><a href="/cinema">Cinema</a></li>
            </ul>
        </nav>
    </header>
`;
const rodape = `</body></html>`;
app.use((req, res, next) => {
    console.log(`URL REQUIRIDA: ${req.url} | MÉTODO: ${req.method}`);
    next();
})
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send(topo + nav + "<h1 style='text-align: center; margin-top: 10px;'>Meu servidor ativo.</h1>" + rodape);
});
app.get('/zoologico', (req, res) => {
    res.statusCode = 200;
    res.send(topo + nav + "<h1 style='text-align: center; margin-top: 10px;'>Passeio no zoo de São Paulo</h1>" + rodape);
});
app.get('/planetario', (req, res) => {
    res.statusCode = 200;
    res.send(topo + nav + "<h1 style='text-align: center; margin-top: 10px;'>Passeio no planetário</h1>" + rodape);
});
app.get('/cinema', (req, res) => {
    res.statusCode = 200;
    res.send(topo + nav + "<h1 style='text-align: center; margin-top: 10px;'>Filmes no cinema.</h1>" + rodape);
})

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta http://localhost:${PORT}`);
});