import mongoose from "mongoose";

const carSchema = new mongoose.Schema({

    category : { // utilitaire, citadine...etc
        type: String,
        required: true,
        trim: true
    },
    model : {
        type: String,
        required: true,
        trim: true
    },
    brand : {
        type: String,
        required: true,
        trim: true
    },
    availability : {
        type: Boolean,
        required: true,
        trim: true
    },
    park : {
        park_id : {
        type: mongoose.Types.ObjectId,
        ref: 'Park'
        }   
    },
    doc: {
        insurance: {
            type: String,
            required: true,
            trim: true
        },
        certificate: {
            type: String,
            required: true,
            trim: true
        }
        },
    car_image : {
        display: {
            image_kit_id: {
            type: String,
            required: true,
            trim: true
            },
        image_kit_url: {
            type: String,
            required: true,
            trim: true
            },
        },
    },

    specs: {
        engine: { // diesel, electrique, essence...etc
            type: String,
            required: true,
            trim: true
        },
        gearbox: {
            type: String,
            required: true,
            trim: true
        },
        seats: {
            type: Number,
            required: true,
            trim: true
        },
        door: {
            type: Number,
            required: true,
            trim: true
        }
    }
});

const Car = mongoose.model("Cars", carSchema) // Cars est le nom de la table, et carSchema le type de données envoyées

export default Car