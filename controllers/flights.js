const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    const date = new Date()

    if (req.body.departs === '') {
        const dateOneYearLater = date.setDate(date.getDate()+365)
        req.body.departs = new Date(dateOneYearLater)
    }

    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('flights/new');
        }
        console.log(flight);
        res.redirect('/flights/new');
    });
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        console.log(flights)
        res.render('flights/index', {title: 'All Flights', flights});
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function (err, ticket) {
            res.render('flights/show', {title: 'Flight Detail', flight, ticket});
            //the ticket in the render, allows me to use ticket in the view/flights/show
        });
    });
}

// Ticket.find({flight: flight._id}, function (err, tickets) {

// });