//membuat kode javascript lebih ketat
'use strict'

//memanggil file res.js dan koneksi.js
var response = require('./res');
var connection = require('./koneksi');

//mengexport respon test server dari controller
exports.index = function(req,res){
    response.ok("Berhasil",res)
};

//GET ALL Data
exports.tampildata = function(req,res){
    connection.query('SELECT * FROM mahasiswa', 
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

//GET DATA BY ID
exports.tampilid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], 
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows,res);
            }
        });
};

//MENAMBAH DATA TANPA VALIDASI
exports.tambah = function(req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES (?,?,?)',
    [nim,nama,jurusan],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Data ditambahkan",res);
        }
    });    
};