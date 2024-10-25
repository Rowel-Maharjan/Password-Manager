import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import passwordController from './controllers/password.controller.js'
import bodyParser from 'body-parser'
const { createPassword, deletePassword, editPassword, getPassword } = passwordController;
import 'dotenv/config'
import cors from 'cors'

const app = express();
const port = 3000

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connection success")
        app.listen(port, () =>
            console.log('Example app listening on port 3000!'),
        );
    })
    .catch(() => {
        console.log("Error")
    })


app.get('/', getPassword);
app.post('/', createPassword)
app.delete('/:id', deletePassword)
app.put('/:id', editPassword)

