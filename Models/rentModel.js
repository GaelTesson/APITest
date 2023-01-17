import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
    start_date : {
        type: Date,
        required: true,
        trim: true
    },
    end_date : {
        type: Date,
        required: true,
        trim: true
    },
    has_started : {
        type: Boolean,
        required: true,
        trim: true
    },
    start_date_confirmed : {
        type: String,
        required: true,
        trim: true
    },
    end_date_confirmed : {
        type: String,
        required: true,
        trim: true
    },
    price : {
        type: Number,
        required: true,
        trim: true
    },
    car : {
        car_id : {
            type: String,
            required: true,
            trim: true
        }
    },
    user : {
        user_id : {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    },
    park : {
        park_id : {
            type: mongoose.Types.ObjectId,
            ref: 'Park'
        }
    },
    incident : {
        incident_id : {
            type: mongoose.Types.ObjectId,
            ref: 'Incident'
        }
    },
    starting_pics_car : {
        left_side: {
            image_id: {
            type: String,
            required: true,
            trim: true
            },
            image_url: {
            type: String,
            required: true,
            trim: true
            },
        },
        right_side: {
            image_id: {
            type: String,
            required: true,
            trim: true
            },
            image_url: {
            type: String,
            required: true,
            trim: true
            },
        },
        front_side: {
            image_id: {
            type: String,
            required: true,
            trim: true
            },
            image_url: {
            type: String,
            required: true,
            trim: true
            },
        },
        back_side: {
            image_id: {
            type: String,
            required: true,
            trim: true
            },
            image_url: {
            type: String,
            required: true,
            trim: true
            }
        }
    },
    ending_pics_car : {
        left_side: {
            image_id: {
            type: String,
            required: true,
            trim: true
            },
            image_url: {
            type: String,
            required: true,
            trim: true
            },
            right_side: {
                image_id: {
                type: String,
                required: true,
                trim: true
                },
                image_url: {
                type: String,
                required: true,
                trim: true
                },
            },
            front_side: {
                image_id: {
                type: String,
                required: true,
                trim: true
                },
                image_url: {
                type: String,
                required: true,
                trim: true
                },
            },
            back_side: {
                image_id: {
                type: String,
                required: true,
                trim: true
                },
                image_url: {
                type: String,
                required: true,
                trim: true
                }
            }
        }
    }
});

const Rent = mongoose.model("Rent", rentSchema)

export default Rent

    