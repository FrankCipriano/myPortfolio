`use strict`

const app=require(`./app`)

app.listen(app.get(`port`),()=>{
    console.log(`Servidor corriendo en http://127.0.0.1:${app.get(`port`)}`)
})
