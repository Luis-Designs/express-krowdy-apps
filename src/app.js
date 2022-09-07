import 'dotenv/config'
import Express, { json } from "express";
import cors from "cors";
import miniApp from './routes/index.js';

const server = Express();

server.use(cors());
server.use(json());

server.use(miniApp);

const { PORT } = process.env

server.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Listening at`, ` http://localhost:8077`);
})