import Express from "express";
import { catchErrors } from "../Helpers/helpers.js";
import { addIncident, getIncidents, getIncidentById, updateIncident, deleteIncident } from "../Controllers/incidentControllers.js";

const router = Express.Router();

// Ajout d'une offre
router.post("/", catchErrors(addIncident)
/* 
    #swagger.tags = ['Incidents']
    #swagger.security = [{
        "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Create a new incident' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

// Récupération de toutes les offres
router.get("/", catchErrors(getIncidents)
/* 
    #swagger.tags = ['Incidents']
    #swagger.security = [{
        "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Get all incident' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

// Récupération d'une offre par son id
router.get("/:id", catchErrors(getIncidentById)
/* 
    #swagger.tags = ['Incidents']
    #swagger.security = [{
        "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Get 1 incident' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/);

// Modification d'une offre
router.put("/:id", catchErrors(updateIncident)
/* 
    #swagger.tags = ['Incidents']
    #swagger.security = [{
        "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Update an incident' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

// Suppression d'une offre
router.delete("/:id", catchErrors(deleteIncident)
/* 
    #swagger.tags = ['Incidents']
    #swagger.security = [{
        "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Delete an incident' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
);

export default router
