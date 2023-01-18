import  Express from "express";
import  { catchErrors } from  "../Helpers/helpers.js" ;
import  {addCar,getCars,getCarById,updateCar,deleteCar } from  "../Controllers/carControllers.js" ;

    const  router = Express.Router();

    // Ajout d'une offre
    router.post( "/" , catchErrors(addCar));

    // Récupération de toutes les offres
    router.get( "/" , catchErrors(getCars));

    // Récupération d'une offre par son id
    router.get( "/:id" , catchErrors(getCarById));

    // Modification d'une offre
    router.put( "/:id" , catchErrors(updateCar));

    // Suppression d'une offre
    router.delete( "/:id" , catchErrors(deleteCar));

    export  default router;
