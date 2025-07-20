import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', ContactSchema);

