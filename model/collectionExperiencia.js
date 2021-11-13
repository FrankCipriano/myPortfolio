show databases
use myWebsite
db.Experience.find()
db.Experience.insertMany([{
        'title':'Facultad de Ingeniería UMG',
        'poster':'umg.png',
        'as':'As Developer Student',
        'description':[
            'Participation as Developer Student in analysis, design, development and implementation of different projects carried out in the software laboratory.',
            'Eternal Self-taught'
        ]
    },{
        'title':'INDICOOP',
        'poster':'indicoop.png',
        'as':"As programming's teacher",
        'description':[
            'I am a programming teacher at INDICOOP, I have extensive experience in high School, private sector and online education.',
        ]
    },{
        'title':'Freelance',
        'poster':'brackets.png',
        'as':'As Backend Developer',
        'description':[
            'Development and deployment of application web',
            'I also collaborate on projects such as Freelance. I am more Backend oriented.'
        ]
    }])