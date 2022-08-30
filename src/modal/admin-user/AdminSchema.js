import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    status: {
        type: String,
        default: "inactive"
    },
    fName: {
        type: String,
        required: true,
        maxlength: [20, "First name must be less than 20 characters"]
    },
    lName: {
        type: String,
        required: true,
        maxlength: [20, "Last name must be less than 20 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: [20, "Email must be less than 50 characters"],
        index: 1
    },
    password: {
        type: String,
        required: true,
        maxlength: [20, "Password must be less than 20 characters"]
    },
    phone: {
        type: String,
        required: true,
        maxlength: [20, "Phone must be less than 20 characters"]
    },
    address: {
        type: String,
        required: true,
        maxlength: [20, "Address must be less than 20 characters"]
    },
    dob: {
        type: Date,
        required: true,
        default: null,
    },
    // emailValidationCode: {
    //     type: String,
    //     required: true,
    //     default: "n/a",
    // },
}, {
    timestamps: true
})

export default mongoose.model("Admin", AdminSchema);