import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import './database';
import { routes } from './routes';

dotenv.config();

const APP = express();
const PORT = process.env.PORT;

APP.use(express.json());
APP.use(routes);

APP.listen(PORT, () => console.log(`Server running at ${PORT}`));