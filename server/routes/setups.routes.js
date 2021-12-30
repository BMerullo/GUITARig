const setupsController = require("../controllers/setups.controller");
const {authenticate} = require("../config/jwt.config");


module.exports = (app) => {

    app.get("/api/setups", setupsController.findAllSetups);
    app.post("/api/setups", authenticate, setupsController.createNewSetup);
    app.get("/api/user/setups/:userId", setupsController.findAllSetupsByUser);
    app.get("/api/setups/:id", setupsController.findOneSetup);
    app.put("/api/setups/:id", setupsController.updateSetup);
    app.delete("/api/setups/:id", setupsController.deleteSetup);

}