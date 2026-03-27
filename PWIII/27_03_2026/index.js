import express from 'express';
import { dataStudents as std} from './students.js';
import { products as ptd } from './products.js';

const app = express();
const PORT = 3020;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Mensagens: ${new Date().toISOString}, ${req.method}, ${req.url}`);
    next();
    res.status(404).send({
        status: 404,
        error: "Rota não encontrada",
        url: req.originalUrl
    })
});

app.get('/api/alunos', (req, res) => {
    res.json(std);
});
app.get('/api/produtos', (req, res) => {
    res.json(ptd);
});

app.listen(PORT, () => {
    console.log(`O servidor está ativo na porta ${PORT}`);
});