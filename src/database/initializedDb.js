const { MongoClient } = require('mongodb');
const { uri, opt, dbName } = require('./conf');

const { scheme } = require('./scheme');
const client = new MongoClient(uri, opt);

const initializedDb = {};

initializedDb.createCollections = async () => {
	try {
		await client.connect();

		const db = client.db(dbName);
		const allCollectionsLength = (await db.collections()).length;

		if (Object.keys(scheme).length > allCollectionsLength) {
			for (const prop in scheme) {
				await db.createCollection(prop, scheme[prop]).catch(_handlerError);
			}
		}
	} finally {
		client.close();
	}
};

initializedDb.insertDataInitial = async () => {
	try {
		await client.connect();

		const db = client.db(dbName);
		const roles = db.collection('ROLES');

		const rolesDocs = [
			{
				idRol: '001',
				nombre: 'AUXILIAR',
				activo: 1,
			},
			{
				idRol: '002',
				nombre: 'PASAJERO',
				activo: 1,
			},
		];

		await roles.insertMany(rolesDocs);
	} finally {
		client.close();
	}
};

const _handlerError = error => {
	if (error) {
		switch (error.code) {
			case 48:
				console.log(`The collection already exist!`);
				break;
			default:
				console.error(error);
		}
	}
};

module.exports = { InitializedDb: initializedDb };
