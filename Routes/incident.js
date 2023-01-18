import Express from "express";
import { catchErrors } from "../Helpers/helpers.js";
import { addIncident, getIncidents, getIncidentById, updateIncident, deleteIncident } from "../Controllers/incidentControllers.js";

const router = Express.Router();

// Ajout d'une offre
router.post("/", catchErrors(addIncident));

// Récupération de toutes les offres
router.get("/", catchErrors(getIncidents));

// Récupération d'une offre par son id
router.get("/:id", catchErrors(getIncidentById));

// Modification d'une offre
router.put("/:id", catchErrors(updateIncident));

// Suppression d'une offre
router.delete("/:id", catchErrors(deleteIncident));

export default router
