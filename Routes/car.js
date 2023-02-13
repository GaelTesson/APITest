import  Express from "express"
import  { catchErrors } from  "../Helpers/helpers.js" 
import  {addCar,getCars,getCarById,updateCar,deleteCar } from  "../Controllers/carControllers.js"

    const  router = Express.Router()

    // Ajout d'une offre
    router.post( "/" , catchErrors(addCar)
    /*
	#swagger.tags = ['Cars']
	#swagger.security = [{
		"ApiTokenAuth": []
	}]
	#swagger.requestBody = {
		required: true,
		content: {
			"application/json": {
				schema: {
					$ref: "#/components/schemas/car"
				}  
			}
		}
		}
	#swagger.responses[200] = { description: 'Create a new car' }
	#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
    )


    // Récupération de toutes les offres
    router.get( "/" , catchErrors(getCars)
    /*
	#swagger.tags = ['Cars']
	#swagger.security = [{
		"ApiTokenAuth": []
	}]
	#swagger.responses[200] = { description: 'Return the car with the param ID' }
	#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

    // Récupération d'une offre par son id
    router.get( "/:id" , catchErrors(getCarById)
    /*
	#swagger.tags = ['Cars']
	#swagger.security = [{
		"ApiTokenAuth": []
	}]
	#swagger.responses[200] = { description: 'Return the car with the param ID' }
	#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

    // Modification d'une offre
    router.put( "/:id" , catchErrors(updateCar)
    /*
	#swagger.tags = ['Cars']
	#swagger.security = [{
		"ApiTokenAuth": []
	}]
	#swagger.responses[200] = { description: 'Update the car with the param ID' }
	#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

    // Suppression d'une offre
    router.delete( "/:id" , catchErrors(deleteCar)
    /*
	#swagger.tags = ['Cars']
	#swagger.security = [{
		"ApiTokenAuth": []
	}]
	#swagger.responses[200] = { description: 'Delete the car with the param ID' }
	#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

    export default router
