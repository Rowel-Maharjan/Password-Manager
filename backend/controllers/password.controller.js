import password from "../models/Password.model.js";

const createPassword = async (req, res) => {
    try {
        const Password = await password.create(req.body);
        res.status(200).json(Password)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPassword = async (req, res) => {
    try {
        const Password = await password.find()
        res.status(200).json(Password)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deletePassword = async (req, res) => {
    try {
        const Password = await password.findByIdAndDelete(req.params.id)
        if (!Password) {
            return res.status(404).json({ message: "Product not found" })
            res.status(200).json({ message: "Product successfully deleted" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const editPassword = async (req, res) => {
    try {
        const Password = await password.findByIdAndUpdate(req.params.id, req.body)
        if (!Password) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json({ message: "Product successfully edited" })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default { createPassword, deletePassword, editPassword, getPassword }