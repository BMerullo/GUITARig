const Setup = require("../models/setups.model")
const jwt = require('jsonwebtoken');



module.exports = {

    findAllSetups: (req, res) => {
        Setup.find({})
            .populate("createdBy","username _id")
            .then((allSetups) => {
                console.log(allSetups);
                res.json(allSetups)
            })
            .catch((err) => {
                res.json({ message: "Something went wrong in findAllSetups", error: err });
            })
    },

    findAllSetupsByUser: (req, res) => {
        Setup.find({ createdBy: req.params.userId })
            .then((allUserSetups) => {
                console.log(allUserSetups);
                res.json(allUserSetups);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    findOneSetup: (req, res) => {
        Setup.findOne({ _id: req.params.id })
            .then((oneSetup) => {
                console.log(oneSetup)
                res.json(oneSetup)
            })
            .catch((err) => {
                console.log("findOneSetup failed")
                res.json({ message: "Something went wrong in findOneSetup", error: err });
            })
    },

    createNewSetup: (req, res) => {

        const newSetupObj = new Setup(req.body);
        const decodedJWT = jwt.decode(req.cookies.usertoken, {
            complete: true
        })
        newSetupObj.createdBy = decodedJWT.payload.id

        newSetupObj.save()
            .then((newSetup) => {
                console.log(newSetup);
                res.json(newSetup);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewSetup");
                res.status(400).json(err)
            })
    },

    updateSetup: (req, res) => {
        Setup.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedSetup) => {
                console.log(updatedSetup);
                res.json(updatedSetup);
            })
            .catch((err) => {
                res.status(400).json(err);
                res.json({ message: "Something went wrong in updateSetup", error: err });
            })
    },

    deleteSetup: (req, res) => {
        Setup.deleteOne({ _id: req.params.id })
            .then((deletedSetup) => {
                console.log(deletedSetup)
                res.json(deletedSetup)
            })
            .catch((err) => {
                console.log("deleteSetup failed")
                res.json({ message: "Something went wrong with deleteSetup", error: err });
            })
    },
}
