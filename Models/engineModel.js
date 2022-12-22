import mongoose from "mongoose";

const engineSchema = new mongoose.Schema({
    engine_name : {
        type: String,
        required: true,
        trim: true
    },
    engine_availability : {
        type: Boolean,
        required: true,
        trim: true
    },
    engine_stock : {
        type: Number,
        required: true,
        trim: true
    },
    engine_desc : {
        type: String,
        required: true,
        trim: true
    },
    engine_price : {
        type: Number,
        required: true,
        trim: true
    },
    engine_image : {
        engine_img_id : {
            type: String,
            required: false,
            trim: true
        },
        engine_img_url : {
            type: String,
            required: false,
            trim: true
        }
    },
    engine_qr_code : {
        type: String,
        required: true,
        trim: true
    },
    rents : {
        rent_id : {
            type: String,
            required: false,
            trim: true
        },
    }
});

const Engine = mongoose.model("Engines", engineSchema)

export default Engine