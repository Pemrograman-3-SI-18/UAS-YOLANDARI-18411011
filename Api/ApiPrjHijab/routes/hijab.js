const multer= require('multer')
const fs= require('fs')
const router= require('express').Router()
const hijab= require('../controller/hijab')

var storage=multer.diskStorage({
    filename: function (req, file, cb ) {
        let ext= file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() +ext);
    },
    destination: function (req, file, cb) {
        cb(null, './gambar')
    }
})

var upload= multer({storage: storage}).single("gambar")


router.post("/input", upload, (req,res) => {
    hijab.InputDataJilbab(req.body, req.file.filename)
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
})

router.get("/datajilbab", (req, res)=>{
    hijab.lihatDataJilbab()
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
})

router.get("/datajilbab/:id", (req, res)=>{
    hijab.lihatDetailDataJilbab(req.params.id)
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
})

router.delete("/delete/:id", (req, res)=>{
    hijab.deletehijab(req.params.id)
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
})

router.put("/update/:id", upload, (req, res) =>{
    let filename;
    if (req.body.gambar){
        fileName = req.body.gambar;
    } else {
        fileName = req.file.filename;
    }
    hijab.updatehijab(req.params.id, req.body, fileName)
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
})

module.exports= router
