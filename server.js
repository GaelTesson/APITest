// API = Application Programming Interface
import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/routes.js';
import './config/passport.js'

import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.json())
app.use(cors({
	origin: '*',
	options: 'GET,POST,PATCH,DELETE',
	allowedHeaders: 'Content-type,Authorization,token',
	credentials: true
})) 

mongoose.connect(process.env.MONGODB_URI);

app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log("Serveur opérationel sur le port " + PORT + " chef")
})

export default app

