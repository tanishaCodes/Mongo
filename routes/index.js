const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

//if no API routes are hit, send the React App
router.use(function(req, res) {
    res.sendFile(path.join(__dirnamem '../client/public/index.html'));
}); 