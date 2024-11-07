const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('../middlewares/errorMiddleware');
const connectDB = require('../config/db');
const cors = require('cors');
const path = require('path');
dotenv.config({
    path: './backend/.env'
})

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: true,
    credentials: true
}));

app.use('/api/users', require('../routes/userRoutes'))
app.use('/api/notes', require('../routes/noteRoutes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../frontend/build')));
    app.get('*', (req, res) =>
        res.sendFile(
        path.resolve(__dirname, '../../', 'frontend', 'build', 'index.html')
        )
    );
    } else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

// app.listen(5000, () => {
//     console.log(`Server running`);
// })

export default (req, res) => {
    return app(req, res);
}