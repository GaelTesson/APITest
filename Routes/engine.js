import  Express from "express";
import  { catchErrors } from  "../Helpers/helpers.js" ;
import  {addEngine,getEngines,getEngineById,updateEngine,deleteEngine } from  "../Controllers/engineControllers.js" ;

    const  router = Express.Router();

    // Ajout d'une offre
    router.post( "/" , catchErrors(addEngine));

    // Récupération de toutes les offres
    router.get( "/" , catchErrors(getEngines));

    // Récupération d'une offre par son id
    router.get( "/:id" , catchErrors(getEngineById));

    // Modification d'une offre
    router.put( "/:id" , catchErrors(updateEngine));

    // Suppression d'une offre
    router.delete( "/:id" , catchErrors(deleteEngine));

    export  default router;
