import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema({
    site: {
        type: String,
        minlength: [3, "Site name must be at least 3 characters long"],
        required: [true, "Enter site name"]
    },
    username: {
        type: String,
        minlength: [3, "username must be at least 3 characters long"],
        required: [true, "Enter username"]
    },
    password: {
        type: String,
        minlength: [3, "password must be at least 3 characters long"],
        required: [true, "Enter password"]
    }
}, {
    timestamps: true
});

const password = mongoose.model("password", PasswordSchema);

export default password