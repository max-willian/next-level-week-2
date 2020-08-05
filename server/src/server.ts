import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.send('continuar a aula em 58min');
})

app.listen(3333);