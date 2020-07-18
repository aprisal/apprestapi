const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse aplikasi ke JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = require('./router');

router(app);

app.listen(8080, () => {
    console.log(`Server NODEJS Berjalan`);
});