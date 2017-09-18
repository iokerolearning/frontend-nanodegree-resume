var bio = {
  "name" : "Wenceslao Paez",
  "role" : "Software Developer",
  "contacts" : {
    "mobile": "983437401",
    "email": "wcpaez@gmail.com",
    "github": "https://github.com/wcpaez",
    "twitter": "",
    "location": "Huancayo",
  },
  "welcomeMessage": "Hola, soy un super desarrollador",
  "skills": ["JS", "RoR", "Testing"],
  "biopic": ""
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

$("#header").append(headerName);
$("#header").append(headerRole);


