import engineModel from "../Models/carModel.js";

export const getCars = async (req, res) => {
    const cars = await carModel.find({});
    res.status(200).json(cars);
    }

export const getCarById = async (req, res) => {
    const cars = await carModel.findById(req.params.id);
    res.status(200).json(cars);
    }

export const addCar = async (req, res) => {
    const car = new engineModel(req.body);
    await car.save();
    res.status(201).json(car);
    }

export const updateCar = async (req, res) => {
    const cars = await carModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(cars);
    }

export const deleteCar = async (req, res) => {
    const cars = await carModel.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json(cars);
    }


