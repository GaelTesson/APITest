import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    alert_date : {
        type: Date,
        default: Date.now,
        required: true,
        trim: true,
    },
    car : {
        car_id : {
            type: mongoose.Types.ObjectId,
            ref: 'Cars'
        }
    },
    date : {
        type: Date,
        required: true,
        trim: true,
    },
    user : {
        user_id : {
            type: mongoose.Types.ObjectId,
            ref: 'Users'
        }
    },
    photos : {
        type: String,
        required: true,
        trim: true,
    },
    remarks :{
        type: String,
        required: false,
        trim: true
    }

});

const Incident = mongoose.model("Incident", incidentSchema)

export default Incident


