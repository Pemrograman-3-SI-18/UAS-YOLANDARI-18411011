const mongoose= require('mongoose')

const userSchema=mongoose.Schema({

    kodejilbab: {
        type: String
    },
    Jenis:  {
        type: String
    },
     merk:  {
        type:String
   },
    ukuran: {
        type: String
    },
    warna: {
        type: String
    },
    harga: {
        type: String
    },
    gambar: {
        type: String
    }
})

module.exports = mongoose.model('hijab', userSchema)