var mysql = require('mysql');

//membuat koneksi ke database mysql

//membuat konfgurasi untuk koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mahasiswa'
});

//aksi koneksi
conn.connect((err)=>{
    if(err) throw err;
    console.log('Koneksi Ke Database MYSQL Berhasil');
});

//mengexport koneksi ke aplikasi
module.exports = conn;
