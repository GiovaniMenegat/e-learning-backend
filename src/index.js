require('dotenv').config();
var cors = require('cors')
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(express.json());

const userRoutes = require('./routes/users.routes');
const classesRoutes = require('./routes/classes.routes');

app.use('/user', userRoutes);

app.use('/class', classesRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));