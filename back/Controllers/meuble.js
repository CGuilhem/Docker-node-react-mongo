const Meuble = require("../Models/meuble");

exports.getAllMeubles = (req, res, next) => {
    console.log("Requête getAllMeubles");

    Meuble.find()
        .then(meubles => res.status(200).json(meubles))
        .catch(error => res.status(400).json({ error: error }));
}

exports.createMeuble = (req, res, next) => {
    console.log("Requête createMeuble");

    const meuble = new Meuble({
        nom: "test",
        matiere: "acier"
    });
    meuble.save()
        .then(() => res.status(201).json({ message: "Meuble enregistré" }))
        .catch(error => res.status(400).json({ error: error }));
}