var Resume = {
    data: {
        "contact": {
            "name": {
                "first": "David",
                "last": "Gagne"
            },
            "title": "Full Stack Software Engineer",
            "email": "davegagne01@gmail.com",
            "phone": "(301)-305-1428",
            "location": "Belgrade, ME" 
        },
        "summary": "5 years of professional experience developing secure, scalable, consumer-facing web applications, RESTful microservices, and batch processes in the finance and higher education industries.  A team-player with broad experience who will be at home on a high-performing scrum team.",
        "skills": {
            "application": ["Python", "Java", "Groovy", "Django", "Django Rest Framework", "Spring", "Spring Boot", "Hibernate", "Perl", "ColdFusion"],
            "frontEnd": ["React", "Less", "HTML", "CSS", "Webpack", "Angular", "Jquery"],
            "databases": ["SQL", "MySql", "PostGres", "SqlServer", "Informix"],
            "tools": ["Git", "Mercurial", "Jenkins", "Intellij IDEs", ""] 
        },
        "experience": [
            {
                "employer": "CashStar, Inc. / Blackhawk Network",
                "location": "Portland, ME",
                "title": "Software Engineer",
                "tenure": "01/17--Current",
                "details": [
                    "As a member of a scrum team, build features into a digital gift card e-commerce platform on AWS, including responsive UIs in React, supporting applications in Django, and data models in MySql",
                    "Add / improve support for promotions and marketing on the CashStar platform",
                    "Develop and support new mobile-first, multi-national, accessible consumer experience",
                    "Provide production support for CashStar’s entire platform on a regular rotation"
                ]
            },
            {
                "employer": "Colby College",
                "location": "Waterville, ME",
                "title": "Information Systems Analyst",
                "tenure": "12/15--12/16",
                "details": [
                    "Developed batch processes to integrate between student information system, financial aid system, and admissions system",
                    "Developed a tracking system for student financial aid documents"
                ]
            },
            {
                "employer": "BlueTarp Financial",
                "location": "Portland, ME",
                "title": "Software Engineer",
                "tenure": "09/13--12/15",
                "details": [
                    "Developed the core of a new notification/statementing system in Java and Groovy with searchable, scalable storage on GCP",
                    "Developed a process for refunding certain transaction fees based on a configurable set of criteria",
                    "Built features for the public and customer-facing website, as well as internal tools and supporting services in Java"
                ]
            },
            {
                "employer": "University of Southern Maine",
                "location": "Portland, ME",
                "title": "Research Assistant",
                "tenure": "01/11--08/13",
                "details": [
                    "Applied AI/machine techniques to identify regulatory modules in DNA",
                    "Thesis work in rule-based agents that learn to play video games through evolutionary search"
                ]
            }
        ],
        "education": [
            {
                "school": "University of Southern Maine",
                "location": "Portland, ME",
                "year": "2018",
                "degree": "Master of Science, Computer Science"
            },
            {
                "school": "California Institute of Technology",
                "location": "Pasadena, CA",
                "year": "2001",
                "degree": "Bachelor of Science, Engineering"
            }    
        ]
    
    },

    render: function() {
        var resumeTemplate = document.getElementById("template-resume").innerHTML; 
        var resumeContent = Mustache.render(resumeTemplate, this.data);
        document.getElementById("resume").innerHTML = resumeContent;
    } 
};

Resume.render();