import express from 'express';
import dotenv from 'dotenv';
import error from './src/middleware/error.js';
dotenv.config();

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de geração de senhas!'
  })
});

server.use(error);

server.listen(process.env.PORT, (err) => {
  if (err) {
    console.error('Erro ao iniciar o server: ', err.message)
  }
  console.log(`Servidor ativo em: http://localhost:${process.env.PORT}`);
});