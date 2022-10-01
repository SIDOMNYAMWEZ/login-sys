import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routes/userRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dotenv.config();

app.use('/api/users', userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

mongoose.connect(process.env.MONGODB_URI_ATLAS, (err) => {
    if (err) return console.error(err);
    console.log('connected to mongoDB');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});