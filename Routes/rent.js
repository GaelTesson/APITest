import Express from "express";
import { catchErrors } from "../Helpers/helpers.js";
import { addRent, getRentById, getRents, deleteRent, updateRent } from "../Controllers/rentControllers.js";

const router = Express.Router();

// Ajout d'une offre
router.post("/", catchErrors(addRent)
/*
    #swagger.tags = ['Rents']
    #swagger.security = [{
        "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Create a new rent' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

// Récupération de toutes les offres
router.get("/", catchErrors(getRents)
/*
    
    #swagger.tags = ['Rents']
    #swagger.security = [{
        "ApiTokenAuth": []
        }]
        #swagger.responses[200] = { description: 'Get all rents' }
        #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

// Récupération d'une offre par son id
router.get("/:id", catchErrors(getRentById)
/*
    
    #swagger.tags = ['Rents']
    #swagger.security = [{
        "ApiTokenAuth": []
        }]
        #swagger.responses[200] = { description: 'Get 1 rent' }
        #swagger.responses[401] = { description: 'Error : unauthorized access' }
        */
);

// Modification d'une offre
router.put("/:id", catchErrors(updateRent)
/*
    
    #swagger.tags = ['Rents']
    #swagger.security = [{
        "ApiTokenAuth": []
        }]
        #swagger.responses[200] = { description: 'Update a rent' }
        #swagger.responses[401] = { description: 'Error : unauthorized access' }
        */
);

// Suppression d'une offre
router.delete("/:id", catchErrors(deleteRent)
/*
    
    #swagger.tags = ['Rents']
    #swagger.security = [{
        "ApiTokenAuth": []
        }]
        #swagger.responses[200] = { description: 'Delete a rent' }
        #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

export default router;
