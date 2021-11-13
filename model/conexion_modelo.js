`use strict`

const {experience,portfolio}=require(`./modelo`)

function DAO(){}

DAO.prototype.getModelExperience=(callback)=>{
    experience.find().exec((err,docs)=>{
        callback(err,docs)
    })
}
DAO.prototype.getModelPortfolio=(callback)=>{
    portfolio.find().exec((err,docs)=>{
        callback(err,docs)
    })
}
module.exports= new DAO()