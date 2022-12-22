import express from 'express'
import user from './user.js'
import offer from './offer.js'
import engine from './engine.js'

const router = express.Router()

router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to IzyDrive API' }))

router.use('/users', user)
router.use('/offers', offer)
router.use('/engines', engine)


export default router
