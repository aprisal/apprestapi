//membuat kode javascript lebih ketat
'use strict'

//membuat function untuk mengakomodasi routing applikasi
module.exports = function(app){
    var jsonku = require ('./controller');

    //membuat rute ketika yg diakses adalah http:localhost:8080/
    app.route('/')
    //rute dialihkan ke export.index di controller.js
        .get(jsonku.index);

    app.route('/get')
        .get(jsonku.tampildata);

    app.route('/get/:id')
        .get(jsonku.tampilid);

    app.route('/post')
        .post(jsonku.tambah);

    app.route('/put')
        .put(jsonku.ubah);
    
    app.route('/delete')
        .delete(jsonku.hapus);
}