/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
  "jobs": [
    {
      "employer": "Nielsen Neuro",
      "title" : "Software Engineer",
      "dates": "2014-Present",
      "description": ""
    },
    {
      "employer": "TU Berlin",
      "title" : "Research Assistant",
      "dates": "2011-2013",
      "description": ""
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
      "title": "",
      "school": "",
      "dates": ""
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
   $("workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
   $("#workExperience:last").append(formattedEmployer+formattedTitle);
 }

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

/* var formattedContact = HTMLheaderContact.replace("%data%", bio.name);
 var formattedbioPic = HTMLbioPic.replace("%data%", bio.role);
 var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome-message);*/

 $("#header").prepend(formattedName).prepend(formattedRole);
