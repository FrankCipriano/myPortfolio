`use strict`

const controlador=require(`../controllers/c_index`),
    express=require(`express`),
    router=express.Router(),
    multer=require(`multer`),
    upload=multer()

router.get(`/`,controlador.getIndex)
    .get(`/frankcipriano-cv`,controlador.getCV)
    .post(`/send_mail`,upload.none(),controlador.sendMail)
    .use(controlador.error404)

module.exports=router