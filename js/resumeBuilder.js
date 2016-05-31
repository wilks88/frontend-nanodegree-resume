

//google map
$("#mapDiv").append(googleMap);

// internationalize button
$("#main").append(internationalizeButton);
var inName = function() {
	var name = bio.name.trim().split(" ");
	name[2] = name[2].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	var formattedInName = name[0] + " " + name[2];
	return formattedInName;
};

// biography
var bio = {
	"name": "Bryan A. Wilkens",
	"role": "Anthropologist",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "bryan.a.wilkens@gmail.com",
		"twitter": "@bwilcats",
		"github": "wilks88",
		"soundcloud": "residencecascade",
		"location": "NY"
	},
	"bioPic": "images/my-picture.jpeg",
	"welcomeMessage": "¡Bienvenidos!",
	"skills": ["JavaScript", "HTML", "CSS", "C#", "Python"]
};

// work history
var work = {
	"jobs": [
		{
			"employer": "CVS",
			"title": "Pharmacy Technician",
			"location": "Bohemia, NY",
			"dates": "August 2015 - Present",
			"description": "I accept, prepare and distribute prescriptions for patients and help customers within the pharmacy section."
		},

		{
			"employer": "Anna Mirski MD, PMC",
			"title": "Attendant",
			"location": "Bohemia, NY",
			"dates": "January 2014 - January 2016",
			"description": "Attendant/Assistant."
		},

		{
			"employer": "Bethpage Federal Credit Union",
			"title": "Teller",
			"location": "Bethpage, NY",
			"dates": "September - December 2013",
			"description": "Bank teller."
		},

		{
			"employer": "New York Presbyterian/Columbia Medical Center",
			"title": "Nuclear Medicine Technician Intern",
			"location": "New York, NY",
			"dates": "January - May 2013",
			"description": "Intern in the Nuclear Medicine Department."
		}
	]
};

// education history
var education = {
	"schools": [
		{
			"name": "SUNY Stony Brook",
			"location": "Stony Brook, NY",
			"dates": "2007 - 2011",
			"degree": "Bachelor of Arts",
			"major": "Anthropology",
			"url": "http://www.stonybrook.edu"
		},

		{
			"name": "Manhattan College",
			"location": "Bronx, NY",
			"dates": "2012 - 2013",
			"degree": "Certificate",
			"major": "Nuclear Medicine",
			"url": "http://www.manhattan.edu"
		}
	],

	"onlineCourses": [
		{
			"title": "Introduction to Interactive Programming in Python",
			"school": "Rice University",
			"date": "September - November 2014",
			"url": "https://www.coursera.org/account/accomplishments/certificate/6CAPJP25DS"
		},

		{
			"title": "Beginning Game Programming with C#",
			"school": "University of Colorado Systems",
			"date": "February - May 2015",
			"url": "https://www.coursera.org/account/accomplishments/certificate/22X9JDK25Y"
		},

		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "October 2015 - Present",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

// projects
var projects = {
	"projects": [
		{
		"title": "Mystery Project",
		"dates": "May 2016",
		"description": "It's a secret to everyone...",
		"images": ["http://placekitten.com/100/100", "http://placebear.com/100/100"]
		}
	]
};

// bio display
bio.display = function() {
	// header
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedBioPic);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedRole);
	$("#header").append(formattedMessage);

	// contact info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedSoundCloud = HTMLblog.replace("%data%", bio.contacts.soundcloud);
	$("#topContacts").append(formattedContactLocation);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedGithub);
	//$("#topContacts").append(formattedSoundCloud);

	// skills
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
};

// education display
education.display = function() {
	$("#education").append(HTMLschoolStart);
	//$("#education").append(HTMLonlineClasses);
	for (var school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolEntry = formattedName + formattedDegree + formattedSchoolDates + formattedLocation + formattedMajor;
		$(".education-entry:first").append(formattedSchoolEntry);
	}
	$(".education-entry:first").append(HTMLonlineClasses);
	//$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var formattedOnlineEntry = formattedTitle + formattedSchool + formattedOnlineDates + formattedURL;
		$(".education-entry:last").append(formattedOnlineEntry);
	}
};

// work display
work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedWorkEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedWorkEntry);
	}
};

// projects display
projects.display = function() {
	for (var prj in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[prj].dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[prj].images.length >= 1) {
			for (var img in projects.projects[prj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[prj].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// call functions
bio.display();
education.display();
work.display();
projects.display();
inName();