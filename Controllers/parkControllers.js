import offerModels from '../Models/parkModel.js';

export const addPark = async (req, res) => {
    const park = new parkModels(req.body);
    await park.save();
    res.status(201).json(offer);
}

export const getPark = async (req, res) => {
    const parks = await parkModels.find({});
    res.status(200).json(parks);
}

export const getParkById = async (req, res) => { 
    const parks = await parkModels.findById(req.params.id);
    res.status(200).json(parks);
}

export const updatePark = async (req, res) => {
    const parks = await parkModels.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(parks);
}

export const deletePark = async (req, res) => {
    const parks = await parkModels.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(parks);
}


