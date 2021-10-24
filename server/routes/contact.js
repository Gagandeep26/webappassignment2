let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the contact list page - READ operation */
router.get('/', requireAuth, contactController.displayContactList);

/* GET Route for displaying the Edit Page - UPDATE operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for displaying the Edit Page - UPDATE operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to perform Deletion - DELETE operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;