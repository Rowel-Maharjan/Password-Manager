import password from "../models/Password.model.js";

//Create all the password
const createPassword = async (req, res) => {
    try {
        const Password = await password.create(req.body)
        res.status(200).json(Password)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get all the password
const getPassword = async (req, res) => {
    try {
        const Password = await password.find()
        res.status(200).json(Password)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Delete Password
const deletePassword = async (req, res) => {
    try {
        const Password = await password.findByIdAndDelete(req.params.id)
        if (!Password) {
            return res.status(404).json({ message: "Password not found" })
        }
        res.status(200).json({ message: "Password successfully deleted" })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

//Edit password
const editPassword = async (req, res) => {
    try {
        const Password = await password.findByIdAndUpdate(req.params.id, req.body)
        if (!Password) {
            return res.status(404).json({ message: "Password not found" })
        }
        res.status(200).json(Password)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default { createPassword, deletePassword, editPassword, getPassword }