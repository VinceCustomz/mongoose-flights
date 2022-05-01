const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req, res) {
    let flight = await Flight.findById(req.params.id) 
    res.render('tickets/new', {flight})
    //render will look at VIEWS FOLDER/"Where you want to go" (in this case tickets/new)
}
// This below function is the long version of the one above
// function newTicket(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         res.render('tickets/new', {flight})
//         //render will look at VIEWS FOLDER/"Where you want to go" (in this case tickets/new)
//     })
// }

async function create(req, res) {
    req.body.flight = req.params.id
    console.log(req.body)

    await Ticket.create(req.body)
    res.redirect(`/flights/${req.params.id}`);
}
// This below function is the long version of the one above
// function create(req, res) {
//     req.body.flight = req.params.id
//     console.log(req.body)

//     Ticket.create(req.body, function (err, ticket) {
//         res.redirect(`/flights/${req.params.id}`);
//     })
// }