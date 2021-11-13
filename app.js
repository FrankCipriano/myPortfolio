`use strict`

const express=require(`express`),
    favicon=require(`serve-favicon`),
    bodyParser=require(`body-parser`),
    morgan=require(`morgan`),
    index_router=require(`./routes/r_index`),
    favicon_url=`${__dirname}/public/assets/favicon.png`,
    public_dir=express.static(`${__dirname}/public`),
    view_dir=`${__dirname}/views`,
    port=(process.env.PORT || 3000),
    app=express()

app.set(`views`,view_dir)
    .set(`view engine`,`pug`)
    .set(`port`,port)
    .use(favicon(favicon_url))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .use(morgan(`dev`))
    .use(public_dir)
    .use(index_router)


module.exports=app