const Flight = require ('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight)
        console.log(req.body)
        
        flight.destinations.push(req.body)
        flight.save(function(err, savedFlight) {
            console.log(savedFlight)
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}