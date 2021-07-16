import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import './database';

dotenv.config();

const APP = express();
const PORT = process.env.PORT;

APP.listen(PORT, () => console.log(`Server running at ${PORT}`));