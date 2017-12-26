var express = require('express');
var app = express();
require('./router.js')(app);
module.exports = app;

const PORT = 5000;

app.listen(PORT);
console.log('Express started on port 5000');
