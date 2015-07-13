var bio = {
  "name" : "Javier Pascual",
  "role" : "Software Engineer",
  "contacts" : { "mobile":"+40 0176 11223344",
                 "email" : "javipascualg@gmail.com",
                 "github":"https://github.com/javipascual/",
                 "twitter":"@javipascualg",
                 "location":"Berlin, Germany"
                  },
  "welcomeMessage" : "Hey!",
  "biopic" : "images/me.jpg",
  "skills" : ["C++", "JS", "Matlab", "Python"],
};

bio.display = function(){

  // HEADER
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedName+formattedRole+formattedbioPic);
  $("#header").append(formattedwelcomeMsg);

  // CONTACT
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedMail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#topContacts").append(formattedMobile+formattedMail+formattedGithub+formattedTwitter+formattedLocation);

  // SKILLS
  $("#header").append(HTMLskillsStart);
  for (i=0;i<bio.skills.length;i++){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }

}

var education = {
  "schools" : [
    {
    "name": "UPC",
    "location": "Barcelona, Spain",
    "degree": "Masters",
    "majors": ["CompSci"],
    "dates": 2002,
    "url" : "fib.upc.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Programming Mobile Applications for Android Handheld Systems: Part 1",
      "school": "University of Maryland (coursera.org)",
      "date": 2015,
      "url": "https://www.coursera.org/course/androidpart1"
    }
  ]
};

education.display = function() {
  for (i=0;i<education.schools.length;i++){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedLocation = HTMLschoolLocation .replace("%data%", education.schools[i].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors.join());
    $(".education-entry:last").append(formattedName+formattedDegree+formattedDates+formattedLocation+formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);
  for (i=0;i<education.onlineCourses.length;i++){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedName+formattedSchool+formattedDates+formattedURL);
  }
}

var work = {
  "jobs": [
    {
      "employer": "Nielsen Neuro",
      "title" : "Software Engineer",
      "location" : "Berlin, Germany",
      "dates": "March 2013 - Present",
      "description": "Design and implement features for an EEG recording software. Analyze EEG data."
    },
    {
      "employer": "TU Berlin",
      "title" : "Research Assistant",
      "location" : "Berlin, Germany",
      "dates": "April 2010 - February 2013",
      "description": "Design and implement a Brain Computer Interface for object selection, integrated in a neuroprosthesis. Research and develope new methods to remove afferent activity caused by Neuromuscular Electrical Stimulation."
    },
    {
      "employer": "NTR Global",
      "title" : "Software Engineer",
      "location" : "Barcelona, Spain",
      "dates": "July 2006 - March 2009",
      "description": "Design and develop of new functionalities for a Remote Control Software."
    },
    {
      "employer": "Tango/04",
      "title" : "Software Engineer",
      "location" : "Barcelona, Spain",
      "dates": "May 2002 - September 2005",
      "description": "Developing and maintaining a network devices real-time monitoring framework."
    }
  ]
};

work.display = function(){
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
}

var projects =  {
  "projects": [
    {
      "title" : "Sample Project",
      "dates": "March 2013 - Present",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat tincidunt sapien, vitae porttitor augue sodales at. Aliquam fringilla consequat mi, quis consequat tortor vulputate et.",
      "images": ["images/nielsen.jpg", "images/tu.jpg"]
    }
  ]
}

projects.display = function() {
  for (i=0;i<projects.projects.length;i++){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedDescr = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedImgs = "";
    for (j=0;j<projects.projects[i].images.length;j++){
      formattedImgs = formattedImgs +  HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
    }
    $(".project-entry:last").append(formattedTitle+formattedDates+formattedDescr+formattedImgs);

  }
}

bio.display();
work.display();
projects.display();
education.display();


$("#map-div").append(googleMap);
