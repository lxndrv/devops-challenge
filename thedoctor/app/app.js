var express = require('express');
var app = express();
module.exports = app;

require('./router.js')(app);

const PORT = 5000;

app.listen(PORT);
console.log('The Doctor started on port ' + PORT);
