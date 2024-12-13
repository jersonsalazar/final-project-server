/*==================================================
/routes/campuses.js

It defines all the campuses-related routes.
==================================================*/
// Import Express module
const express = require('express');
// Create an Express router function called "router"
const router = express.Router();
// Import database models
const { Student, Campus } = require('../database/models');

// Import a middleware to replace "try and catch" for request handler, for a concise coding (fewer lines of code)
const ash = require('express-async-handler');

/* GET ALL CAMPUSES */
router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});  // Get all campuses and their associated students
  res.status(200).json(campuses);  // Status code 200 OK - request succeeded
}));

/* GET CAMPUS BY ID */
router.get('/:id', ash(async(req, res) => {
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});  // Get the campus and its associated students
  res.status(200).json(campus);  // Status code 200 OK - request succeeded
}));

/* DELETE CAMPUS */
router.delete('/:id', ash(async(req, res) => {
  await Campus.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json("Deleted a campus!");
}));

/* ADD NEW CAMPUS */
//--------------  Validation function to check required fields
function validateCampusData(req, res, next) {
  const { name, address } = req.body;
  if (!name || !address) {
    return res.status(400).json({ message: "Missing required fields: name and address are both required." });
  }
  // Additional validations can be added here
  next();
}
router.post('/', validateCampusData, ash(async(req, res) => {
  let newCampus = await Campus.create(req.body);
  res.status(201).json(newCampus);  // Status code 201 Created - resource created
}));
//-------------- 

/* EDIT CAMPUS */
router.put('/:id', ash(async(req, res) => {
  await Campus.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});  // Get the campus and its associated students
  res.status(201).json(campus);  // Status code 201 Created - successful creation of a resource
}));

// Export router, so that it can be imported to construct the apiRouter (app.js)
module.exports = router;