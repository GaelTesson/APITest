import express from 'express'
import {addPark,getPark,getParkById,updatePark,deletePark } from '../Controllers/parkControllers.js'
import {catchErrors} from '../Helpers/helpers.js'

const router = express.Router()

// Ajout d'une offre
router.post('/', catchErrors(addPark)
/*
#swagger.tags = ['Parks']
#swagger.security = [{
    "ApiTokenAuth": []
}]
#swagger.responses[200] = { description: 'Create a new park' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

// Récupération de toutes les offres
router.get('/', catchErrors(getPark)
/*
#swagger.tags = ['Parks']
#swagger.security = [{
    "ApiTokenAuth": []
}]
#swagger.responses[200] = { description: 'Get park' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

// Récupération d'une offre par son id
router.get('/:id', catchErrors(getParkById)
/*
#swagger.tags = ['Parks']
#swagger.security = [{
    "ApiTokenAuth": []
}]
#swagger.responses[200] = { description: 'Display park' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

// Modification d'une offre
router.put('/:id', catchErrors(updatePark)
/*
#swagger.tags = ['Parks']
#swagger.security = [{
    "ApiTokenAuth": []
}]
#swagger.responses[200] = { description: 'Update park' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

// Suppression d'une offre
router.delete('/:id', catchErrors(deletePark)/*
#swagger.tags = ['Parks']
#swagger.security = [{
    "ApiTokenAuth": []
}]
#swagger.responses[200] = { description: 'Delete park' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/)

export default router


