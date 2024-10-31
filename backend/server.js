const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
    } else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(port, () => {
    console.log(`listening on ${port}`);
})