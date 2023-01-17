import Express from "express";
import { catchErrors } from "../Helpers/helpers.js";
import { addRent, getRentById, getRents, deleteRent, updateRent } from "../Controllers/rentControllers.js";

const router = Express.Router();

// Ajout d'une offre
router.post("/", catchErrors(addRent));

// Récupération de toutes les offres
router.get("/", catchErrors(getRents));

// Récupération d'une offre par son id
router.get("/:id", catchErrors(getRentById));

// Modification d'une offre
router.put("/:id", catchErrors(updateRent));

// Suppression d'une offre
router.delete("/:id", catchErrors(deleteRent));

export default router;
