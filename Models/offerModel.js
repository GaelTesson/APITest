import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    type : {
        type: String,
        required: true,
        trim: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    start_date : {
        type: String,
        required: false,
        trim: true
    },
    end_date : {
        type: String,
        required: false,
        trim: true
    },
    price : {
        type: Number,
        required: true,
        trim: true
    },
    qr_code : {
        type: String,
        required: true,
        trim: true
    },
    user_id : {
        type: String,
        required: true,
        trim: true
    },
    incident : {
        type: String,
        required: false,
        trim: true
    }
});

const Offer = mongoose.model("Offers", offerSchema)

export default Offer