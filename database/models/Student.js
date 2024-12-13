/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/High_school_students%2C_SAS_Pudong.jpg/640px-High_school_students%2C_SAS_Pudong.jpg"
  },

  gpa: {
    type: Sequelize.DECIMAL(2,1),
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;