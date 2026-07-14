const express = require("express");
const personRoutes = require("../routes/personRouter");

module.exports = app => {
    app.use(
        express.json(),
        personRoutes
    );
};
