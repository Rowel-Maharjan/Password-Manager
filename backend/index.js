import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import passwordController  from './controllers/password.controller.js'
const {createPassword, deletePassword, editPassword, getPassword} = passwordController;

const app = express();

app.use(express.json());
app.use(urlencoded())

mongoose.connect('mongodb://127.0.0.1:27017/check')
    .then(() => {
        console.log("connection success")
        app.listen(3000, () =>
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


