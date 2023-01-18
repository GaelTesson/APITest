import mongoose from "mongoose";

const parkSchema = new mongoose.Schema({

    phone : {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        zipcode: {
            type: Number,
            required: true,
            trim: true
    }},

});

const Park = mongoose.model("Park", parkSchema)

export default Park