//membuat kode javascript lebih ketat
'use strict'

//memanggil file res.js dan koneksi.js
var response = require('./res');
var connection = require('./koneksi');

//mengexport respon dari controller
exports.index = function(req,res){
    response.ok("Berhasil",res)
};