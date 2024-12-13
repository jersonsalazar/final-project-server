/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UK-2014-Oxford-Pembroke_College_04.jpg/640px-UK-2014-Oxford-Pembroke_College_04.jpg"
  }
});

// Export the campus model
module.exports = Campus;