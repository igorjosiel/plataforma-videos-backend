const { Router } = require("express");

const PersonController = require("../controllers/PersonController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const personController = new PersonController();
const registrationController = new RegistrationController();

const router = Router();

router.get("/pessoas", (req, res) => personController.getAll(req, res));
router.get("/pessoas/todos", (req, res) => personController.getAllPeople(req, res));
router.get("/pessoas/:id", (req, res) => personController.getById(req, res));
router.post("/pessoas", (req, res) => personController.create(req, res));
router.put("/pessoas/:id", (req, res) => personController.update(req, res));
router.delete("/pessoas/:id", (req, res) => personController.delete(req, res));

router.get("/pessoas/:studentId/matriculas", (req, res) => personController.getActiveRegistrations(req, res));
router.get("/pessoas/:studentId/matriculas/todas", (req, res) => personController.getAllRegistrations(req, res));
router.post("/pessoas/:studentId/matriculas", (req, res) => registrationController.create(req, res));

module.exports = router;
