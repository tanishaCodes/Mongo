const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Note.find(req.query)
        .sort({ date: -1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    findByID: function (req, res) {
        db.Note.find({_id: req.params.id})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));

    },
    create: function (req, res) {
        db.Note.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    update: function (req, res) {
        db.Note.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    remove: function (req, res) {
        db.Note.findById({_id: req.params.id})
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
}