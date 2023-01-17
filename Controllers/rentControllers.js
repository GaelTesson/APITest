import Rent from "../Models/rentModel";

export const getRents = async (req, res) => {
    const rents = await Rent.find({});
    res.status(200).json(rents);
    }
    
export const getRentById = async (req, res) => {
    const rents = await Rent.findById(req.params.id);
    res.status(200).json(rents);
    }

export const addRent = async (req, res) => {
    const rent = new Rent(req.body);
    await rent.save();
    res.status(201).json(rent);
    }

export const updateRent = async (req, res) => {
    const rents = await Rent.findByIdAndUpdate
    (req.params.id, req.body)
    res.status(200).json(rents);
    }

export const deleteRent = async (req, res) => {
    const rents = await Rent.findByIdAndDelete
    (req.params.id, req.body)
    res.status(200).json(rents);
    }
    