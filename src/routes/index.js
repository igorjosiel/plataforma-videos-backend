const express = require("express");

const personRoutes = require("./personRouter.js");
const categoryRouter = require("./categoryRouter.js");
const courseRouter = require("./courseRouter.js");

module.exports = app => {
    app.use(
        express.json(),
        personRoutes,
        categoryRouter,
        courseRouter
    );
};
