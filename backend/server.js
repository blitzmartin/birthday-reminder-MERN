import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import personRouter from './routes/personRoutes.js';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.DB_SERVER)
    .then(() => {
        console.log('Connected to MongoDB Atlas...')
    })
    .catch(err => {
        console.log(err.message)
    });

const app = express();

// ========== CORS SETUP ==========

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    next();
   });
   
   app.use(
    cors({
      credentials: true,
      allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
    })
   );
   app.set("trust proxy", 1);
   
   // =================================

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/contacts', personRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}...`)
});