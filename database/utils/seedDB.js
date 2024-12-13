/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg.optimal.jpg",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg",
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://www.brooklyn.edu/wp-content/uploads/2022/06/50-50-4.jpg",
	});
	// Create a new student for a campus
	const dummy_student = await Student.create({
	  	firstname: "Joe",
		lastname: "Smith",
		email: "joe_smith@example.com",
		gpa: 3.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
		lastname: "Johnson",
		email: "mary_johnson@example.com",
		gpa: 3.7
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;