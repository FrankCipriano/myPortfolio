`use strict`

const mongoose=require(`mongoose`),
    db_options=require(`./dboptions.json`),
    Schema=mongoose.Schema,
    schema_experience=new Schema({
        title: String,
        poster: String,
        description: Array,
        as:String
    },{
        collection:`Experience`
    }),
    schema_portfolio=new Schema({
        title: String,
        description: String,
        technologies: Array,
        repository: String,
        demo: String
    },{
        collection:`Portfolio`
    }),
    models={
        experience: mongoose.model(`Experience`,schema_experience),
        portfolio: mongoose.model(`Portfolio`,schema_portfolio)
    }

//-CONEXION CON ATLAS
//mongoose.connect(`mongodb+srv://FrankCipriano:Swordfish19.@websitefrank.1ikam.mongodb.net/myWebsite?retryWrites=true&w=majority`)
mongoose.connect(`mongodb://${db_options.host1}/${db_options.database}`)

module.exports=models