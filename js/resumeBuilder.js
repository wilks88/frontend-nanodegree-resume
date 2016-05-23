

//google map
$("mapDiv").append(googleMap);

// internationalize button
$("#main").append(internationalizeButton);
var inName = function() {
	var name = bio.name.trim().split(" ");
	name[2] = name[2].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	var formattedInName = name[0] + " " + name[2];
	return formattedInName;
}

// biography
var bio = {
	"name": "Bryan A. Wilkens",
	"role": ["Web Developer", " Anthropologist", " Independent Musician"],
	"contacts": {
		"email": "bryan.a.wilkens@gmail.com",
		"twitter": "@bwilcats",
		"github": "wilks88",
		"soundcloud": "residencecascade",
		"location": "NY"
	},
	"bioPic": "images/my-picture.jpeg",
	"welcomeMessage": "¡Bienvenidos!",
	"skills": ["JavaScript", "HTML", "CSS", "C#", "Python"]
}

// work history
var work = {
	"jobs": [
		{
			"employer": "CVS",
			"title": "Pharmacy Technician",
			"location": "Bohemia, NY, US",
			"dates": "August 2015 - Present",
			"description": "I accept, prepare and distribute prescriptions for patients and help customers within the pharmacy section."
		},

		{
			"employer": "Anna Mirski MD, PMC",
			"title": "Attendant",
			"location": "Bohemia, NY, US",
			"dates": "January 2014 - January 2016",
			"description": "Attendant and valet."
		},

		{
			"employer": "Bethpage Federal Credit Union",
			"title": "Teller",
			"location": "Bethpage, NY, US",
			"dates": "September - December 2013",
			"description": "Bank teller."
		}
	]
}

// education history
var education = {
	"schools": [
		{
			"name": "SUNY Stony Brook",
			"city": "Stony Brook, NY, US",
			"dates": "2007 - 2011",
			"degree": "Bachelor of Arts",
			"major": "Anthropology",
			"minor": "Biology"
		},

		{
			"name": "Manhattan College",
			"city": "Bronx, NY, US",
			"dates": "2012 - 2013",
			"degree": "",
			"major": "Nuclear Medicine"
		}
	],

	"onlineCourses": [
		{
			"title": "Introduction to Interactive Programming in Python",
			"school": "Rice University",
			"dates": "September - November 2014",
			"url": "https://www.coursera.org/account/accomplishments/certificate/6CAPJP25DS"
		},

		{
			"title": "Beginning Game Programming with C#",
			"school": "University of Colorado Systems",
			"dates": "February - May 2015",
			"url": "https://www.coursera.org/account/accomplishments/certificate/22X9JDK25Y"
		},

		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "October 2015 - Present",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

// projects
var projects = {
	"projects": [
		{
		"title": "Portfolio Site",
		"dates": "March 2016",
		"description": "A portfolio site featuring my profile and projects",
		"images": ""
		},

		{
		"title": "project2",
		"dates": "project date",
		"description": "project text",
		"images": ""
		}
	]
}

// header display
bio.displayHeader = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedBioPic);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedRole);
	$("#header").append(formattedMessage);
}

// contact information display
bio.displayContactInfo = function() {
	//$("#topContacts").append(HTMLcontactGeneric);
	var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedSoundCloud = HTMLblog.replace("%data%", bio.contacts.soundcloud);
	$("#topContacts").append(formattedContactLocation);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedSoundCloud);
}

// education display
education.display = function() {
	$("#education").append(HTMLschoolStart);
	//$("#education").append(HTMLonlineClasses);
	for (var school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolEntry = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
		$(".education-entry:first").append(formattedSchoolEntry);
	}
	$(".education-entry:first").append(HTMLonlineClasses);
	//$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var formattedOnlineEntry = formattedTitle + formattedSchool + formattedDates + formattedURL;
		$(".education-entry:last").append(formattedOnlineEntry);
	}
}


// skills display
bio.displaySkills = function() {
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}
}

// work display
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedWorkEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedWorkEntry);
	}
}

// projects display
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

// call functions
bio.displayHeader();
bio.displayContactInfo();
bio.displaySkills();
education.display();
work.display();
projects.display();
inName();