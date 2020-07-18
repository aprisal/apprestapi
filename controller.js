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
            }else if(!rows.length){
                response.nodata("Data Tidak Ditemukan",res)
            }else {
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

//MENGUBAH DATA BERDASARKAN ID
exports.ubah = function(req,res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim,nama,jurusan,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("Data Diupdate",res);
            }
        });    
};

//HAPUS DATA BERDASARKAN ID
exports.hapus = function(req,res){
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data Terhapus", res);
            }
        });
};