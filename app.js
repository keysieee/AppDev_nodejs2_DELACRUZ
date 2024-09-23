const express = require('express');
const routes = require('./routes/routes'); 
const app = express();

app.set('view engine', 'ejs');

app.use('/', routes);
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});
