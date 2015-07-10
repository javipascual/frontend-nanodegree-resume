var work = {
  "jobs": [
    {
      "employer": "Nielsen Neuro",
      "title" : "Software Engineer",
      "dates": "March 2013 - Present",
      "location" : "Berlin, Germany",
      "description": "Design and implement features for an EEG recording software. Analyze EEG data."
    },
    {
      "employer": "TU Berlin",
      "title" : "Research Assistant",
      "dates": "April 2010 - February 2013",
      "location" : "Berlin, Germany",
      "description": "Design and implement a Brain Computer Interface for object selection, integrated in a neuroprosthesis. Research and develope new methods to remove afferent activity caused by Neuromuscular Electrical Stimulation."
    },
    {
      "employer": "NTR Global",
      "title" : "Software Engineer",
      "dates": "July 2006 - March 2009",
      "location" : "Barcelona, Spain",
      "description": "Design and develop of new functionalities for a Remote Control Software."
    },
    {
      "employer": "Tango/04",
      "title" : "Software Engineer",
      "dates": "May 2002 - September 2005",
      "location" : "Barcelona, Spain",
      "description": "Developing and maintaining a network devices real-time monitoring framework."
    }
  ],
};

var projects = {
};

var education = {
  "schools" : [
    {
    "name": "UPC",
    "location": "Barcelona",
    "dates": "2002",
    "degree": "Masters",
    "major": "CompSci"}
  ],
  "onlineCourses" : [
    {
      "title": "Programming Mobile Applications for Android Handheld Systems: Part 1",
      "school": "University of Maryland (coursera.org)",
      "dates": "June 2015"
    }
  ]
};

var bio = {
  "name" : "Javier Pascual",
  "role" : "Software Engineer",
  "contacts" : {"email" : "javipascualg@gmail.com", "location":"Berlin", "github":"https://github.com/javipascual/", "mobile":"+40 0176 11223344"},
  "pic_url" : "images/fry.jpg",
  "message" : "Hey!",
  "skills" : ["C++", "JS", "Matlab", "Python"]
};

// HEADER
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.pic_url);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);

$("#header").prepend(formattedName+formattedRole+formattedbioPic);

// CONTACT
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedMail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedMobile+formattedMail+formattedGithub+formattedLocation);

// BIO
$("#header").append(HTMLskillsStart);
for (i=0;i<bio.skills.length;i++){
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills-h3").append(formattedSkill);
}

// WORK
for (i=0;i<work.jobs.length;i++){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  var formattedLocation = HTMLworkLocation .replace("%data%", work.jobs[i].location);
  var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescr);
}

// EDUCATION
for (i=0;i<education.schools.length;i++){
  $("#education").append(HTMLschoolStart);
  var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
  var formattedLocation = HTMLschoolLocation .replace("%data%", education.schools[i].location);
  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
  $(".education-entry:last").append(formattedName+formattedDegree+formattedDates+formattedLocation+formattedMajor);
}
