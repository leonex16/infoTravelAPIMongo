const express = require('express');
const apicache = require('apicache');
const { controller } = require('./database/controllers');
const { InitializedDb } = require('./database/initializedDb');

const app = express();
let cache = apicache.middleware('5 minutes');

// InitializedDb.InsertDataInitial();
// https://stackoverflow.com/questions/31089221/what-is-the-difference-between-put-post-and-patch
// https://www.mscharhag.com/api-design/http-post-put-patch

app
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.use(cache)
	.set('PORT', process.env.PORT ?? 3000)
	.get('/v1/tickets/rut/:rut', controller.getAllTicketByRut)
	.get('/v1/tickets/ticket/:ticketNumber', controller.getAllTicketByTicketNumber)
	.put('/v1/tickets/create/update', controller.CreateOrUpdateTicket)
	// .get('/ticket/:numberTicket', (req, res) => res)
	.use(controller.notFound);

module.exports = { app };
