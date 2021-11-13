`use strict`
const nodemailer=require(`nodemailer`),
    dao=require(`../model/conexion_modelo`)

function Controlador(){}

Controlador.prototype.getIndex=(req,res,next)=>{
    const promise=new Promise((resolve,reject)=>{
        dao.getModelExperience((err,docs)=>{
            return (err)
                ? reject(new Error())
                : resolve(docs)
        })
    })
    promise.then((prev_docs)=>{
        return new Promise((resolve,reject)=>{
            dao.getModelPortfolio((err,docs)=>{
                if(err) return reject(new Error)
                
                const opciones={
                    experience_docs: prev_docs,
                    skills_docs:[
                        {title:`JavaScript`,logo:`js.svg`},
                        {title:`Node`,logo:`node.svg`},
                        {title:`Express`,logo:`express.png`},
                        {title:`MongoDB`,logo:`mongo.svg`},
                        {title:`NPM`,logo:`npm.svg`},
                        {title:`Bash`,logo:`bash.svg`},
                        {title:`Digital Ocean`,logo:`digitalocean.png`},
                        {title:`Python`,logo:`python.svg`},
                        {title:`MariaDB`,logo:`mariadb.png`},
                        {title:`Java`,logo:`java.svg`},
                        {title:`C++`,logo:`cpp.png`},
                        {title:`Git`,logo:`git.svg`},
                        {title:`GitHub`,logo:`github.png`},
                        {title:`HTML`,logo:`html.svg`},
                        {title:`CSS`,logo:`css.svg`}
                    ],
                    portfolio_docs: docs
                }
                return resolve (opciones)
            })
        })
    }).then((opciones)=>{
        return res.render(`index`,opciones)
    }).catch((err)=>{
        err.statusCode=500
        err.statusText=`No fe posible obtener los datos, es posible que el cluster de la base de datos este fuera de servicio`
            
        const opciones={
            title: err.statusCode,
            descripcion: err.statusText
        }

        return res.render(`404`,opciones)
    })
}
Controlador.prototype.getCV=(req,res,next)=>{
    res.sendFile(`frankcipriano-cv.pdf`,{root:`./src/`},(err)=>{
        if(err){
            const error=new Error()
            error.statusCode=404
            error.statusText=`Upps. no encontramos el recurso solicitado`

            const opciones={
                title:error.statusCode,
                descripcion:error.statusText
            }

            res.render(`404`,opciones)
        }
    })
}
Controlador.prototype.sendMail=(req,res,next)=>{
    const transporter=nodemailer.createTransport({
        host:`smtp.gmail.com`,
        port:465,
        secure:true,
        auth:{
            user:`francoswordfish@gmail.com`,
            pass:`uvkyqumlwogombmf`
        }
    })
    const mailoption={
        from:`"Backend FrankCipriano 👻 ${req.body.email}" <francoswordfish@gmail.com>`,
        to:'francoswordfish@gmail.com',
        subject:req.body.asunto,
        html:`<p><ul><li>Nombre: ${req.body.nombre}</li><li>Email: ${req.body.email}</li><li>Comentario: ${req.body.comentarios}</li></ul></p>`
    }
    transporter.sendMail(mailoption,(err,data)=>{
        if(err){
            return res.send({
                error:true,
                status:400,
                statusText:`An error ocurred while sending the mail. Try again later`
            })
        }
        res.send({
            error:false,
            status:200,
            message:`Your mail has been sent.!`
        })
    })
}
Controlador.prototype.error404=(req,res,next)=>{
    const error=new Error()
    error.statusCode=404
    error.statusText=`Upps. no tengo el recurso que buscas!`

    const opciones={
        title:error.statusCode,
        descripcion:error.statusText
    }
    res.render(`404`,opciones)
}

module.exports=new Controlador()