import express from 'express'
import {addOffer,getOffers,getOfferById,updateOffer,deleteOffer } from '../Controllers/offerControllers.js'
import {catchErrors} from '../Helpers/helpers.js'

const router = express.Router()

// Ajout d'une offre
router.post('/', catchErrors(addOffer))

// Récupération de toutes les offres
router.get('/', catchErrors(getOffers))

// Récupération d'une offre par son id
router.get('/:id', catchErrors(getOfferById))

// Modification d'une offre
router.put('/:id', catchErrors(updateOffer))

// Suppression d'une offre
router.delete('/:id', catchErrors(deleteOffer))

export default router


