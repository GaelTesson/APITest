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
    },

    birthdate: {
        type: String,
        required: true,
        trim: true,
        FormData: true,
        FormDataEvent: true

    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    id_card: {
		image_kit_id: {
			type: String,
			trim: true
		},
		image_kit_url: {
			type: String,
			trim: true
		}
	},
	driver_license: {
		image_kit_id: {
			type: String,
			trim: true
		},
		image_kit_url: {
			type: String,
			trim: true
		}
	},

    role: {
        type: String,
        required: true,
        trim: true
    }

})


const Users = mongoose.model('Users', userSchema)

export default Users

 