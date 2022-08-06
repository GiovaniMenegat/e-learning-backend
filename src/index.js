require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const userRoutes = require('./routes/users.routes');

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));