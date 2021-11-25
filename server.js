'use strict';
const express = require('express'),
    app = express();
app.get('/', (req, res) => {
    res.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
});

app.listen(8080, () => {
    console.log(`Aplicacion lanzada(Hopefully): 8080`);
});
