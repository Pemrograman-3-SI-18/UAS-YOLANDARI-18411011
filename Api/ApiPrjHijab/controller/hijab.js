const hijab = require( '../model/hijab.js')
const response = require('../config/respons')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.InputDataJilbab= (data, gambar) =>
    new Promise(async (resolve, reject)=>{

        const hijabbaru= new hijab({
            kodejilbab: data.kodejilbab,
            Jenis: data.Jenis,
            merk: data.merk,
            ukuran: data.ukuran,
            warna: data.warna,
            harga: data.harga,
            gambar: gambar
        })
        await hijab.findOne({kodejilbab: data.kodejilbab})
            .then(hijab => {
                if (hijab){
                    reject(response.commonErrorMsg('Kode Jilbab sudah digunakan'))
                } else {
                    hijabbaru.save()
                        .then(r=>{
                            resolve(response.commonErrorMsg('Berhasil Menginput Data'))
                        }).catch(err=> {
                        reject(response.commonErrorMsg('Maaf Input Hijab Gagal'))
                    })
                }
        }).catch(err => {
            reject(response.commonErrorMsg('Maaf Input Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.lihatDataJilbab = () =>
    new Promise(async (resolve, reject)=>{
       await hijab.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=> reject(response.commonErrorMsg('Maaf Input Terjadi Kesalahan Pada Server Kami')) )
    })

exports.lihatDetailDataJilbab = (kodejilbab) =>
    new Promise(async (resolve, reject)=>{
        await hijab.findOne({kodejilbab: kodejilbab})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=> reject(response.commonErrorMsg('Maaf Input Terjadi Kesalahan Pada Server Kami')) )
    })

exports.updatehijab = (id, data, gambar) =>
    new Promise(async (resolve, reject)=>{
        await hijab.updateOne(
            {_id: ObjectId (id)},
            {
                $set: {
                    kodejilbab: data.kodejilbab,
                    Jenis: data.Jenis,
                    merk: data.merk,
                    ukuran: data.ukuran,
                    warna: data.warna,
                    harga: data.harga,
                    gambar: gambar
                }
            }
        ).then(hijab =>{
            resolve(response.commonErrorMsg('Berhasil Mengubah Data'))
        }).catch(err =>{
            reject(response.commonErrorMsg('Maaf Input Terjadi Kesalahan Pada Server Kami'))

        })
    })

exports.deletehijab = (_id) =>
    new Promise(async (resolve, reject)=>{
        await hijab.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonErrorMsg('Berhasil Menghapus Data'))
            }).catch(() =>{
                reject(response.commonErrorMsg('Maaf Input Terjadi Kesalahan Pada Server Kami'))
            })
    })
