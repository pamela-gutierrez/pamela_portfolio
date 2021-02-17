var path = require("path");

module.export = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    })

    app.get("/projects", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/projects.html"));
    })




    // public / index.html












}
