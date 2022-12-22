import engineModel from "../Models/engineModel.js";

export const getEngines = async (req, res) => {
    const engines = await engineModel.find({});
    res.status(200).json(engines);
    }

export const getEngineById = async (req, res) => {
    const engines = await engineModel.findById(req.params.id);
    res.status(200).json(engines);
    }

export const addEngine = async (req, res) => {
    const engine = new engineModel(req.body);
    await engine.save();
    res.status(201).json(engine);
    }

export const updateEngine = async (req, res) => {
    const engines = await engineModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(engines);
    }

export const deleteEngine = async (req, res) => {
    const engines = await engineModel.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json(engines);
    }


