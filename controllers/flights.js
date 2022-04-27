const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
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