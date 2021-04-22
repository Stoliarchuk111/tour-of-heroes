const express = require('express');
const path = require('path');
const app = express();
// serve static files....
app.use(express.static(`${__dirname}/dist/angular-heroku-deploy` ));
// send all requests to index.html
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/angular-heroku-deploy/index.html` ));
});
// default Heroku PORT
app.listen(process.env.PORT || 3000);