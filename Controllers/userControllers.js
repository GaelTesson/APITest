import userModel from '../Models/userModels.js' // on importe le model

export const addUser =  async (req, res) => { // async await pour les requetes asynchrones
    const name = new userModel(req.body) // body est le corps de la requete, ici on crée un nouvel objet dans la table users
    await name.save() // save pour enregistrer dans la table users
    res.status(201).json(name) // 201 = created
}

export const getUsers = async (req, res) => {
    const users = await userModel.find({}) // find pour aller chercher dans l'objet du userModel(qui est la table users definit dans le model)
    res.status(200).json(users)
}

export const getUserById = async (req, res) => {
    const users = await userModel.findById(req.params.id) // ici on associe le marqueur de la route a la const id
    res.status(200).json(users)
}

export const updateUser = async (req, res) => {
    const users = await userModel.findByIdAndUpdate(req.params.id, req.body); // ici on associe le marqueur de la route a la const id
    res.status(200).json(users)
}

export const deleteUser = async (req, res) => {
    const users = await userModel.findByIdAndDelete
        (req.params.id, req.body);
    res.status(200).json(users)
}
