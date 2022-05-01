const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

//NEW - creates and routes to the new page made.
router.get('/:id/tickets/new', ticketsCtrl.new);
//CREATE - submits the form with the INFORMATION
router.post('/:id/tickets/new', ticketsCtrl.create);

//ADDTOFLIGHT - will add the information TO a flight
// router.post('/flights/:id/tickets', ticketsCtrl.addToFlight)

module.exports = router;