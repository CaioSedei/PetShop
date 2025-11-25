import express from 'express';
import router from './router/router.js';
import database from './config/database.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/api', router);


database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(PORT, () => {
            console.info("Servidor rodando na porta "+PORT)
        })
    })
    .catch((e)=> {
        console.log("não conectou com o banco"+ e)
    })