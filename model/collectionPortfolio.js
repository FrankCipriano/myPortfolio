show databases
use myWebsite
show collections
db.Portfolio.find()
db.Portfolio.insertMany([{
            'title': 'Chat',
            'description':'Prove my simple chat with your friends or family, sign up and get started',
            'technologies':[
                'Node.js',
                'Express.js',
                'Socket.io',
                'Digital Ocean',
                'HTML',
                'CSS'
            ],
            'repository':'https://github.com/FrankCipriano/Simple-Chat-con-Socket.io.git',
            'demo':null
        },{
            'title':'API RESTful',
            'description':'Help me to collect the best movies in my album, you can add, update or delete a movie in my album',
            'technologies':[
                'Node.js',
                'Express.js',
                'MongoDB',
                'Pug',
                'Digital Ocean'
            ],
            'repository':'https://github.com/FrankCipriano/API-REST-Nodejs-MongoDB.git',
            'demo':null
        },{
            'title':'API RESTful',
            'description':'Help me to collect the best movies in my album #2, you can add, update or delete a movie in my album',
            'technologies':[
                'Node.js',
                'Express.js',
                'MariaDB',
                'Pug',
                'Digital Ocean'
            ],
            'repository':'https://github.com/FrankCipriano/API-REST-Node.js-MariaDB.git',
            'demo':null
        },{
            'title':'Database Schema-Point of sale',
            'description':'Data model for generic POS System',
            'technologies':[
                'MariaDB',
            ],
            'repository':'https://github.com/FrankCipriano/DB-Punto-de-Venta.git',
            'demo':null
        }])