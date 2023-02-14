import userModel from '../Models/userModels.js' // on importe le model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//#swagger.tags = ['Users']

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' }) // on genere un token avec l'id de l'utilisateur

const generatePassword = async (password) => {
    const salt = await bcrypt.genSalt(10) // on genere un salt avec bcrypt
    const hashedPassword = await bcrypt.hash(password, salt) // on hash le mot de passe avec le salt
    return hashedPassword
}


export const addUser =  async (req, res) => { // async await pour les requetes asynchrones
    const name = new userModel(req.body) // body est le corps de la requete, ici on crée un nouvel objet dans la table users
    await name.save() // save pour enregistrer dans la table users
    res.status(201).json(name) // 201 = created
}

export const getUsers = async (req, res) => {
    if (req.headers.token = process.env.API_KEY) { // si le token existe
    const users = await userModel.find({}) // find pour aller chercher dans l'objet du userModel(qui est la table users definit dans le model)
    res.status(200).send(users)
} else {
    res.status(401).send({'error': 'Unauthorized'})
}
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
    const users = await userModel.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(users)
}


export const register = (async (req, res) => {
    const { first_name, last_name, email, birthdate, phone, password, role } = req.body // on recupere les infos du body
    const { street, city, zipcode } = req.body.address
    const userExists =await userModel.findOne({ email }) // on verifie si l'email existe deja

    if (userExists) { // si l'email existe deja
        res.status(409)
        throw new Error('User already exists')
    }

    const user = await userModel.create({ // on crée un nouvel utilisateur
        first_name,
        last_name,
        email,
        address: {
            street,
            city,
            zipcode
        },
        birthdate,
        phone,
        password: await generatePassword(password),
        role
    })

    if (user) { 
        await user.save()// si l'utilisateur est crée
        res.status(201).json({ // on renvoie un status 201 et un token
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            address: {
                street: user.address.street,
                city: user.address.city,
                zipcode: user.address.zipcode
            },
            birthdate: user.birthdate,
            phone: user.phone,
            role: user.role
        })
    } else {
        res.status(400).json({
            error: 'Invalid user data'
        })
    }
})

export const login = (async (req, res) => {
    const { email, password } = req.body // on recupere les infos du body
    const user = await userModel.findOne({ email }) // on verifie si l'email existe deja

    if (user && (await bcrypt.compare(password, user.password))) { // si l'utilisateur existe et que le mot de passe est correct
        res.status(200).json({ // on renvoie un status 200 et un token
            accessToken: generateToken(user._id),
        })
    } else {
        res.status(401).json({
            error: 'Invalid email or password'
        })
    }
})

export const getUserInfos = (async (req, res) => {
    console.log(req.user._id)
    const {_id, first_name, last_name, email, address, birthdate, phone, role} = await userModel.findById(req.user._id) // on recupere les infos du body


    res.status(200).json({ // on renvoie un status 200 et un token
        _id,
        first_name,
        last_name,
        email,
        address : {
            street: address.street,
            city: address.city,
            zipcode: address.zipcode
        },
        birthdate,
        phone,
        role
    })
})


            
