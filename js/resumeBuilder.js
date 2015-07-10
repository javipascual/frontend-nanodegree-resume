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
    "city": "Barcelona",
    "dates": 2002,
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
 "contacts" : {"email" : "javipascualg@gmail.com", "location":"Berlin"},
 "pic_url" : "images/fry.jpg",
 "welcome-message" : "Hey!",
 "skills" : ["C++", "JS", "Matlab", "Python"]
};



 if (bio.skills.length > 0){
   $("skills").append(HTMLskillsStart);
   for (i=0;i<bio.skills.length;i++){
     var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
     $("#skills").append(formattedSkill);
   }
 } else {
   $("header").append("no skills");
 }

 for (i=0;i<work.jobs.length;i++){
   $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
   var formattedLocation = HTMLworkLocation .replace("%data%", work.jobs[i].location);
   var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[i].description);
   $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescr);
 }

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

/* var formattedContact = HTMLheaderContact.replace("%data%", bio.name);
 var formattedbioPic = HTMLbioPic.replace("%data%", bio.role);
 var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome-message);*/

 $("#header").prepend(formattedName).prepend(formattedRole);
