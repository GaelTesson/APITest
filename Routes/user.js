import express from 'express'
import passport from 'passport'
import {addUser,getUsers,getUserById,updateUser,deleteUser, register, login, getUserInfos } from '../Controllers/userControllers.js'
import {catchErrors} from '../Helpers/helpers.js'

const router = express.Router()


// Ajout d'un utilisateur
router.post('/', catchErrors(addUser)) 

// Récupération de tous les utilisateurs
router.get('/', catchErrors(getUsers))

// Récupération d'un utilisateur par son id
router.get('/:id', catchErrors(getUserById))

// Modification d'un utilisateur
router.put('/:id', catchErrors(updateUser))

// Suppression d'un utilisateur
router.delete('/:id', catchErrors(deleteUser))

// Inscription d'un utilisateur
router.post('/register', catchErrors(register))

// Connexion d'un utilisateur
router.post('/login', catchErrors(login))

// Récupération des infos d'un utilisateur
router.get('/infos', passport.authenticate('jwt', { session: false }), catchErrors(getUserInfos))


export default router
