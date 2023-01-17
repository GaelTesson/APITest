import express from 'express'
import {addPark,getPark,getParkById,updatePark,deletePark } from '../Controllers/parkControllers.js'
import {catchErrors} from '../Helpers/helpers.js'

const router = express.Router()

// Ajout d'une offre
router.post('/', catchErrors(addPark))

// Récupération de toutes les offres
router.get('/', catchErrors(getPark))

// Récupération d'une offre par son id
router.get('/:id', catchErrors(getParkById))

// Modification d'une offre
router.put('/:id', catchErrors(updatePark))

// Suppression d'une offre
router.delete('/:id', catchErrors(deletePark))

export default router


