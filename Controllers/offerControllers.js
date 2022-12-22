import offerModels from '../Models/offerModel.js';

export const addOffer = async (req, res) => {
    const offer = new offerModels(req.body);
    await offer.save();
    res.status(201).json(offer);
}

export const getOffers = async (req, res) => {
    const offers = await offerModels.find({});
    res.status(200).json(offers);
}

export const getOfferById = async (req, res) => {
    const offers = await offerModels.findById(req.params.id);
    res.status(200).json(offers);
}

export const updateOffer = async (req, res) => {
    const offers = await offerModels.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(offers);
}

export const deleteOffer = async (req, res) => {
    const offers = await offerModels.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(offers);
}


