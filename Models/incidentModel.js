import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    alert_date : {
        type: Date,
        required: true,
        trim: true,
    },
    car_id : {
        type: String,
        required: true,
        trim: true,
    },
    date : {
        type: Date,
        required: true,
        trim: true,
    },
    user_id : {
        type: String,
        required: true,
        trim: true,
    },
    photos : {
        type: String,
        required: true,
        trim: true,
    }

});

const Incident = mongoose.model("Incident", incidentSchema)

export default Incident


