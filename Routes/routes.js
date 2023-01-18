import express from 'express'
import user from './user.js'
import park from './park.js'
import car from './car.js'
import incident from './incident.js'
import rent from './rent.js'


const router = express.Router()

router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to IzyDrive API' }))

router.use('/users', user)
router.use('/parks', park)
router.use('/cars', car)
router.use('/incidents', incident)
router.use('/rent', rent)


export default router
