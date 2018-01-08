var bio = {
    "name" : "Lea Chung",
    "role" : "Front-End Web Developer",
    "contacts" : {
        "mobile" : "416-876-9367",
        "email" : "leachung41@gmail.com",
        "github" : "leachung41",
        "location" : "Toronto, ON"
        },
        "welcomeMessage" : "I'm the one!",
    "skills" : [
        "detail-oriented", "organized", "responsible"
    ],
    "biopic" : "img/logo.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for(var skill=0; skill<bio.skills.length; skill++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
};

var work = {
    "jobs" : [
        {
            "employer" : "Subway",
            "title" : "Sandwich Artist",
            "location" : "Toronto, ON",
            "dates" : "May 2016 - Sep 2016",
            "description" : [
                "▶ Served customers at cashier and made all kinds of sandwiches.",
                "▶ Prepared and made soups & sandwiches, stacked goods, and cleaned the store."
            ]
        },
        {
            "employer" : "Tim Hortons",
            "title" : "Store Front Employee",
            "location" : "Toronto, ON",
            "dates" : "Sep 2015 - Dec 2015",
            "description" : [
                "▶ Served customers at cashier and made all kinds of beverages including coffee.",
                "▶ Prepared and made soups & sandwiches, stacked goods, and cleaned the store."
            ]
        },
        {
            "employer" : "King George International College",
            "title" : "Dormitory Coordinator",
            "location" : "Toronto, ON",
            "dates" : "Jul 2014 - Dec 2014",
            "description" : [
                "▶ Welcomed new students, arranged rooms and managed housing issues.",
                "▶ Provided school and dormitory information and helped students to adapt school."
            ]
        }
    ]
};

work.display = function() {
    for (var job=0; job<work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation);

        for(var description=0; description<work.jobs[job].description.length; description++) {
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[description]);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects" : [
        {
            "title" : "Build a Portfolio Site",
            "dates" : "Sep 2017",
            "description" : "▶ You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS.",
            "images" : [
                "img/portfolio.jpg"
            ]
        }
    ]
};

projects.display = function() {
    for (var project=0; project<projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        for (var image=0; image<projects.projects[project].images.length; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

var education = {
    "schools" : [
        {
            "name" : "Hongik University",
            "location" : "Yeongi-gun, Chungcheongnam-do, South Korea",
            "degree" : "Bachelor of Science",
            "majors" : [
                "Computer & Information Communication Eng."
            ],
            "dates" : "Mar 01, 2006 - Feb 22, 2011"
        },
        {
            "name" : "King George International College",
            "location" : "Toronto, ON",
            "degree" : "Certificate and Diploma",
            "majors" : [
                "English as a Second Language Program", "Interpreting and Translation - Korean"
            ],
            "dates" : "May 2014 - Feb 2015"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree Program",
            "school" : "Udacity",
            "dates" : "Aug 2017 - Oct 2017",
            "url" : "http://www.udacity.com"
        },
        {
            "title" : "Full Stack Foundations Course",
            "school" : "Udacity",
            "dates" : "Aug 2017",
            "url" : "http://www.udacity.com"
        }
    ]
};

education.display = function() {
    for (var school=0; school<education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation);

        for(var major=0; major<education.schools[school].majors.length; major++) {
           var formattedMajors = HTMLschoolMajors.replace("%data%", education.schools[school].majors[major]);
           $(".education-entry:last").append(formattedMajors);
        }
    }

    if(education.onlineCourses.length > 0){
        $(".education-entry:last").append(HTMLonlineClasses);

        for (var course=0; course<education.onlineCourses.length; course++) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineschool,formattedonlineDates,formattedonlineURL);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
