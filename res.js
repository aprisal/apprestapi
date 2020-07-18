//membuat kode javascript lebih ketat
'use strict'

//membuat respon jika hasilnya adalah berhasil atau OK
exports.ok = function(values, res){
    
    //membungkus respon dalam variabel data
    var data = {
        'status' : 200,
        'values' : values
    };

    //membuat variabel data dalam bentuk json
     res.json(data);
     res.end();
};