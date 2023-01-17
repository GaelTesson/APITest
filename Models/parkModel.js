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
    cars : {
        car_id : {
            type: mongoose.Types.ObjectId,
            ref: 'Cars'
            }   
        
    }

});

const Park = mongoose.model("Park", parkSchema)

export default Park