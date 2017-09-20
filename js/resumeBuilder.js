var bio = {
  "name" : "Wenceslao Paez",
  "role" : "Software Developer",
  "contacts" : {
    "mobile": "983437401",
    "email": "wcpaez@gmail.com",
    "github": "wcpaez",
    "twitter": "wcpaez",
    "location": "Huancayo"
  },
  "welcomeMessage": "Hola, soy un super desarrollador",
  "skills": ["JS", "RoR", "Testing"],
  "biopic": "https://avatars1.githubusercontent.com/u/1188909?v=4&s=460"
}

var education = {
  "schools": [
    {
      "name": "Colegio Particular Andino",
      "location": "Huancayo",
      "degree": "Primaria y secundaria",
      "majors": [],
      "dates": "1996 - 2016"
    },
    {
      "name": "Colegio Particular Andino",
      "location": "Huancayo",
      "degree": "Primaria y secundaria",
      "majors": [],
      "dates": "1996 - 2016"
    }
  ],
  "onlineCourses": [
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Osiptel",
      "title": "Practicante profesional",
      "location": 'Lima',
      "dates": "2012-2013",
      "description": 'Practicate profesional en el area de telecomunicaciones'  
    },
    {
      "employer": "iokero",
      "title": "Software Developer",
      "location": 'Lima y Huancayo',
      "dates": "2013-presente",
      "description": 'Software developer con ROR'  
    },
    {
      "employer": "Waggl INC",
      "title": "Software developer",
      "location": 'Lima, SF',
      "dates": "2015-2017",
      "description": 'Software developer with ROR'  
    },
    {
      "employer": "Campodata INC",
      "title": "Software developer",
      "location": 'Lima, Puerto Rico',
      "dates": "2017-presente",
      "description": 'Software developer with ROR'  
    },
    {
      "employer": "Instituto San Pedro",
      "title": "Docente",
      "location": 'Huancayo',
      "dates": "2017-presente",
      "description": 'Docente de Tecnologias WEB'  
    }
  ]
}

var projects = {

}

var headerName = HTMLheaderName.replace("%data%", bio.name);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(headerRole);
$("#header").prepend(headerName);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
var email = HTMLemail.replace("%data%", bio.contacts.email)
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
var github = HTMLgithub.replace("%data%", bio.contacts.github)
var locationText = HTMLlocation.replace("%data%", bio.contacts.location)

$("#header ul#topContacts").append(mobile);
$("#header ul#topContacts").append(email);
$("#header ul#topContacts").append(twitter);
$("#header ul#topContacts").append(github);
$("#header ul#topContacts").append(locationText);

var bioPic = HTMLbioPic.replace("%data%", bio.biopic)
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)

$("#header").append(bioPic);
$("#header").append(welcomeMessage);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (index in bio.skills) {
    var tmpSkill = HTMLskills.replace("%data%", bio.skills[index])
    $("#header #skills").append(tmpSkill);
  }
}

function renderWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart)
    var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].title)
    var employerTitle = employer + title
    $(".work-entry:last").append(employerTitle)
    var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
    var description = HTMLworkDescription.replace("%data%", work.jobs[job].description)
    $(".work-entry:last").append(dates)
    $(".work-entry:last").append(description)
  }
}

renderWork()
