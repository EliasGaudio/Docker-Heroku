'use strict';
const express = require('express'),
    app = express();
app.get('/', (req, res) => {
    res.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
});

app.listen(8080, () => {
    console.log(`Application running on port: 8080`);
});
