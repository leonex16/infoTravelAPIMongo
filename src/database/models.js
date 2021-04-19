const { MongoClient } = require('mongodb');
const { uri, opt, dbName } = require('./conf');

const models = {};
const client = new MongoClient(uri, opt);

models.getAllTicketByRut = async rut => {
	try {
		await client.connect();

		const db = client.db(dbName);
		const boletos = db.collection('BOLETOS');

		const query = { Rut: rut };

		const ticket = await boletos.findOne(query);

		return ticket;
	} finally {
		client.close();
	}
};

models.getAllTicketByTicketNumber = async ticketNumber => {
	try {
		await client.connect();

		const db = client.db(dbName);
		const boletos = db.collection('BOLETOS');

		const query = { 'N° Boleto': +ticketNumber };

		const ticket = await boletos.findOne(query);

		return ticket;
	} finally {
		client.close();
	}
};

models.CreateOrUpdateTicket = async dataTicket => {
	try {
		await client.connect();

		const db = client.db(dbName);
		const boletos = db.collection('BOLETOS');

		const query = { 'N° Boleto': dataTicket['N° Boleto'] };

		const result = await boletos.findOneAndUpdate(query, { $set: dataTicket });
		const ticketUpdated = !!result.value;

		if (!ticketUpdated) {
			await boletos.insertOne(dataTicket);
		}

		return ticketUpdated ? 200 : 201;
	} finally {
		client.close();
	}
};

module.exports = { models };
