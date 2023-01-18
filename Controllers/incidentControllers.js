import Incident from "../Models/incidentModel.js";
//
export const getIncidents = async (req, res) => {
    const incidents = await Incident.find({});
    res.status(200).json(incidents);
    }
//
export const getIncidentById = async (req, res) => {
    const incidents = await Incident.findById(req.params.id);
    res.status(200).json(incidents);
    }

//
export const addIncident = async (req, res) => {
    const incident = new Incident(req.body);
    await incident.save();
    res.status(201).json(incident);
    }
//
export const updateIncident = async (req, res) => {
    const incidents = await Incident.findByIdAndUpdate
    (req.params.id, req.body)
    res.status(200).json(incidents);
    }
//
export const deleteIncident = async (req, res) => {
    const incidents = await Incident.findByIdAndDelete
    (req.params.id, req.body)
    res.status(200).json(incidents);
    }
//