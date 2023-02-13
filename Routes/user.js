import express from 'express'
import passport from 'passport'
import {addUser,getUsers,getUserById,updateUser,deleteUser, register, login, getUserInfos } from '../Controllers/userControllers.js'
import {catchErrors} from '../Helpers/helpers.js'

const router = express.Router()

// Ajout d'un utilisateur
router.post('/', catchErrors(addUser)
/*
#swagger.tags = ['Users']
#swagger.security = [{
    "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Create a new user' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
    */
) 

// Récupération de tous les utilisateurs
router.get('/', catchErrors(getUsers)
/*
#swagger.tags = ['Users']
#swagger.security = [{
    "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Get users' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
    */
)

// Récupération d'un utilisateur par son id
router.get('/:id', catchErrors(getUserById)
/*
#swagger.tags = ['Users']
#swagger.security = [{
    "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Display user' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
    */
)

// Modification d'un utilisateur
router.put('/:id', catchErrors(updateUser)
/*
#swagger.tags = ['Users']
#swagger.security = [{
    "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Update user' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
    */
)

// Suppression d'un utilisateur
router.delete('/:id', catchErrors(deleteUser)
/*
#swagger.tags = ['Users']
#swagger.security = [{
    "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Delete user' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
    */
)

// Inscription d'un utilisateur
router.post('/register', catchErrors(register)
/*
#swagger.tags = ['Users']
#swagger.responses[200] = { description: 'Register a new user' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

// Connexion d'un utilisateur
router.post('/login', catchErrors(login)
/*
#swagger.tags = ['Users']
#swagger.responses[200] = { description: 'Login a user' }
#swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)

// Récupération des infos d'un utilisateur
router.get('/:id/infos', passport.authenticate('jwt', { session: false }), catchErrors(getUserInfos)
/*
#swagger.tags = ['Users']
#swagger.security = [{
    "ApiTokenAuth": []
    }]
    #swagger.responses[200] = { description: 'Get user infos' }
    #swagger.responses[401] = { description: 'Error : unauthorized access' }
*/
)


export default router
