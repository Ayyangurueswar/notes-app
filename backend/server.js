const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: true,
    credentials: true
}));


app.use('/api/notes', require('./routes/noteRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})