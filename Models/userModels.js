import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        trim: true
    },

    last_name:{
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
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

    birthdate: {
        type: String,
        required: true,
        trim: true,
        FormData: true,
        FormDataEvent: true

    },

    phone: {
        type: Number,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    role: {
        type: String,
        required: true,
        trim: true
    }

})


const Users = mongoose.model('Users', userSchema)

export default Users

