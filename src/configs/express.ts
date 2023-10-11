import express from 'express';
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
