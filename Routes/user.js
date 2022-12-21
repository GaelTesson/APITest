import express from 'express'
import {addUser,getUsers,getUserById,updateUser,deleteUser } from '../Controllers/userControllers.js'
import {catchErrors} from '../Helpers/helpers.js'

const router = express.Router()


// Ajour d'un utilisateur
router.post('/', catchErrors(addUser)) 

// Récupération de tous les utilisateurs
router.get('/', catchErrors(getUsers))

// Récupération d'un utilisateur par son id
router.get('/:id', catchErrors(getUserById))

// Modification d'un utilisateur
router.put('/:id', catchErrors(updateUser))

// Suppression d'un utilisateur
router.delete('/:id', catchErrors(deleteUser))

export default router