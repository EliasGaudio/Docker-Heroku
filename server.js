'use strict';
const express = require('express'),
    app = express();
app.get('/', (req, res) => {
    res.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
});
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Aplicacion lanzada(Hopefully): ${port}`);
});
