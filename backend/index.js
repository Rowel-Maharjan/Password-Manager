import express from 'express';
import mongoose from 'mongoose';
import passwordController from './controllers/password.controller.js'
import bodyParser from 'body-parser'
import 'dotenv/config'
import cors from 'cors'

const { createPassword, deletePassword, editPassword, getPassword } = passwordController;

const app = express();
const port = 3000

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connection success")
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch(() => {
        console.log("Error in connection of Database")
    })


app.get('/', getPassword);
app.post('/', createPassword)
app.delete('/:id', deletePassword)
app.put('/:id', editPassword)

