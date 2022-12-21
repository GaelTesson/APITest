import express from 'express'
import user from './user.js'

const router = express.Router()

router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to IzyDrive API' }))

router.use('/users', user)

export default router
